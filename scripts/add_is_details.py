import os
import re
import frontmatter

def read_markdown_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    return content

def write_markdown_file(file_path, content):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def remove_duplicate_sections(content):
    # This is a bit tricky with regex, as the content can vary.
    # A more robust solution might involve a proper markdown parser.
    # For now, let's target the exact duplicates of # 정의 and ## 특징 + content
    
    # Split content into frontmatter and body
    try:
        post = frontmatter.loads(content)
        body = post.content
        frontmatter_str = frontmatter.dumps(post)
    except Exception:
        return content # Cannot parse frontmatter, return original

    # Remove duplicate '# 정의' and '## 특징' and everything in between
    # This assumes the first # 정의 is the correct one.
    # The regex targets the pattern from '# 정의' to the end of '## 특징' section
    # and tries to find a duplicate of it.
    
    # Pattern for # 정의 ... ## 특징 ... (up to the next ## or #)
    pattern = r'(# 정의\s*.+?\n## 특징\s*(?:- .+\n?)+)'
    
    # Find all occurrences of the main section (definition + features)
    matches = re.findall(pattern, body, re.DOTALL)
    
    if len(matches) > 1:
        # Keep only the first occurrence
        body = body.replace(matches[0], '', len(matches)-1) # Remove all but first
        body = matches[0] + body # Prepend the first match back
        
        # Remove subsequent '# 정의' and '## 특징' headers if they are left
        body = re.sub(r'# 정의\s*(.+?)(?=\n#|\n##|$)', '', body, count=1, flags=re.DOTALL)
        body = re.sub(r'## 특징\s*(?:- .+\n?)+', '', body, count=1, flags=re.DOTALL)
        
        # This is a rough attempt. A better approach is to just keep the first # 정의 and ## 특징
        # and remove any subsequent ones.
        
        cleaned_body_parts = []
        seen_h1 = False
        seen_h2 = False
        
        lines = body.splitlines()
        for line in lines:
            if line.strip() == '# 정의' and not seen_h1:
                cleaned_body_parts.append(line)
                seen_h1 = True
            elif line.strip() == '## 특징' and not seen_h2:
                cleaned_body_parts.append(line)
                seen_h2 = True
            elif line.strip() == '# 정의' and seen_h1: # Skip subsequent # 정의
                continue
            elif line.strip() == '## 특징' and seen_h2: # Skip subsequent ## 특징
                continue
            else:
                cleaned_body_parts.append(line)
        
        body = "\n".join(cleaned_body_parts)

    new_content = frontmatter_str + "\n\n" + body
    return new_content


def add_detailed_section(file_path, section_type, section_content):
    content = read_markdown_file(file_path)
    
    # Split content into frontmatter and body
    try:
        post = frontmatter.loads(content)
        body = post.content
        frontmatter_str = frontmatter.dumps(post)
    except Exception:
        print(f"Error parsing frontmatter for {file_path}. Skipping detailed section add.")
        return False

    # Find the end of the '## 특징' section
    # This regex looks for '## 특징' followed by bullet points, until the next '##' header or end of string
    match = re.search(r'(## 특징\s*(?:- .+\n?)+)', body, re.DOTALL)
    
    if match:
        end_of_features_section = match.end()
        
        # Insert the new detailed section after the features section
        modified_body = body[:end_of_features_section] + \
                        f"\n\n## {section_type}\n" + \
                        section_content + \
                        body[end_of_features_section:]
                        
        new_content = frontmatter_str + "\n\n" + modified_body
        write_markdown_file(file_path, new_content)
        print(f"Added '{section_type}' section to: {file_path}")
        return True
    else:
        # If '## 특징' is not found, try to find '# 정의' and insert after it
        match_def = re.search(r'(# 정의\s*.+?)(?=\n##|\n#|$)', body, re.DOTALL)
        if match_def:
            end_of_def_section = match_def.end()
            # Insert ## 특징 placeholder first
            modified_body = body[:end_of_def_section] + \
                            "\n\n## 특징\n- [TODO: 특징을 여기에 작성하세요.]" + \
                            f"\n\n## {section_type}\n" + \
                            section_content + \
                            body[end_of_def_section:]
            new_content = frontmatter_str + "\n\n" + modified_body
            write_markdown_file(file_path, new_content)
            print(f"Inserted '## 특징' placeholder and added '{section_type}' section to: {file_path}")
            return True
        else:
            print(f"Could not find '# 정의' or '## 특징' in {file_path}. Skipping detailed section add.")
            return False
    
def process_is_files_for_details(is_topics_dir):
    modified_files = []
    
    for file_name in os.listdir(is_topics_dir):
        if file_name.endswith('.md'):
            file_path = os.path.join(is_topics_dir, file_name)
            
            # Step 1: Remove duplicate sections first
            original_content = read_markdown_file(file_path)
            cleaned_content = remove_duplicate_sections(original_content)
            if cleaned_content != original_content:
                write_markdown_file(file_path, cleaned_content)
                print(f"Removed duplicates from: {file_path}")
                
            # Step 2: Add detailed section after ## 특징
            # Re-read the potentially cleaned content
            current_content = read_markdown_file(file_path)
            
            # Determine suitable section type and content (this part needs to be customized)
            section_type = "기술요소" # Default
            section_content = "- [TODO: 기술요소 내용을 여기에 작성하세요.]"
            
            # Example logic to determine section type based on keywords or title
            if "관리" in file_name or "거버넌스" in file_name or "인증" in file_name or "평가" in file_name:
                section_type = "절차"
                section_content = "- [TODO: 절차 내용을 여기에 작성하세요.]"
            elif "공격" in file_name or "보안" in file_name or "기술" in file_name or "암호" in file_name or "인증" in file_name:
                section_type = "기술요소"
                section_content = "- [TODO: 기술요소 내용을 여기에 작성하세요.]"
            elif "포렌식" in file_name:
                section_type = "절차"
                section_content = "- [TODO: 절차 내용을 여기에 작성하세요.]"
            
            # Check if ## 특징 is already present
            if re.search(r'## 특징', current_content):
                # Check if a detailed section is already present (## 기술요소, ## 절차, ## 동작원리, ## 기능)
                if not re.search(r'## (기술요소|절차|동작원리|기능)', current_content):
                    # Add new section after ## 특징
                    modified = False
                    # Insert after the last bullet of ## 특징
                    match_features = re.search(r'(## 특징\s*(?:- .+\n?)+)', current_content, re.DOTALL)
                    if match_features:
                        end_of_features = match_features.end()
                        new_part = f"\n\n## {section_type}\n{section_content}\n"
                        final_content = current_content[:end_of_features] + new_part + current_content[end_of_features:]
                        write_markdown_file(file_path, final_content)
                        print(f"Added '{section_type}' to {file_path}")
                        modified_files.append(file_path)
                    else:
                        print(f"Could not find '## 특징' in {file_path} for adding section. Skipping.")
                else:
                    print(f"Detailed section already exists in {file_path}. Skipping.")
            else:
                # If ## 특징 is not found, try to insert it after # 정의
                match_def = re.search(r'(# 정의\s*.+?)(?=\n##|\n#|$)', current_content, re.DOTALL)
                if match_def:
                    end_of_def = match_def.end()
                    new_part = "\n\n## 특징\n- [TODO: 특징을 여기에 작성하세요.]" + \
                               f"\n\n## {section_type}\n{section_content}\n"
                    final_content = current_content[:end_of_def] + new_part + current_content[end_of_def:]
                    write_markdown_file(file_path, final_content)
                    print(f"Inserted '## 특징' placeholder and added '{section_type}' to {file_path}")
                    modified_files.append(file_path)
                else:
                    print(f"Could not find '# 정의' or '## 특징' in {file_path}. Skipping detailed section add.")
    return modified_files

if __name__ == "__main__":
    is_topics_dir = 'src/data/topics/IS'
    if not os.path.exists(is_topics_dir):
        print(f"Error: Directory '{is_topics_dir}' not found.")
    else:
        # Before processing, check if 'python-frontmatter' is installed
        try:
            import frontmatter
        except ImportError:
            print("The 'python-frontmatter' library is not installed.")
            print("Please install it using: pip install python-frontmatter")
            exit(1)
        
        # Process files
        processed_files = process_is_files_for_details(is_topics_dir)
        if processed_files:
            print(f"\nSuccessfully processed {len(processed_files)} IS topic files.")
        else:
            print("\nNo IS topic files were modified.")
