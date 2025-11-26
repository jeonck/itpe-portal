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

def determine_section_type(title, definition):
    # Convert to lowercase for case-insensitive matching
    title_lower = title.lower()
    definition_lower = definition.lower()

    # Keywords for "기술요소" (Technical Elements)
    tech_keywords = ['기술', 'architecture', '시스템', '구성', '프로토콜', '표준', '알고리즘', '코덱', '인프라', '하드웨어', '소프트웨어', 'ai', 'ml', 'blockchain', 'iot', 'vr', 'ar', '클라우드', '암호', '컴퓨팅', '반도체', '메모리', '네트워크', '보안', 'db', '데이터', '접근 제어', '인증']
    if any(k in title_lower or k in definition_lower for k in tech_keywords):
        return "기술요소"

    # Keywords for "동작원리" (Operating Principle)
    op_keywords = ['동작', '원리', '과정', '흐름', '메커니즘', '사이클', '처리', '파이프라인', '스케줄링', '알고리즘']
    if any(k in title_lower or k in definition_lower for k in op_keywords):
        return "동작원리"

    # Keywords for "기능" (Functions)
    func_keywords = ['기능', '서비스', '제공', '활용', '역할', '플랫폼', '솔루션', '앱', '어플리케이션']
    if any(k in title_lower or k in definition_lower for k in func_keywords):
        return "기능"

    # Keywords for "절차" (Procedure)
    proc_keywords = ['절차', '과정', '단계', '프로세스', '관리', '인증', '규제', '평가', '감리']
    if any(k in title_lower or k in definition_lower for k in proc_keywords):
        return "절차"

    # Default to "기술요소" if no specific match
    return "기술요소"

def add_missing_detailed_sections(base_dir):
    modified_files = []
    
    for root, _, files in os.walk(base_dir):
        for file_name in files:
            if file_name.endswith('.md'):
                file_path = os.path.join(root, file_name)
                content = read_markdown_file(file_path)
                
                # Parse frontmatter and body
                try:
                    post = frontmatter.loads(content)
                    title = post.metadata.get('title', 'Unknown Title')
                    body = post.content
                except Exception as e:
                    print(f"Error parsing frontmatter for {file_path}: {e}. Skipping.")
                    continue

                # Check if the structure is "정의 -> 특징 -> 최신 트렌드"
                # Find positions of key headers
                def_pos = re.search(r'# 정의', body)
                features_pos = re.search(r'## 특징', body)
                trends_pos = re.search(r'## 최신 트렌드', body)
                
                # Check for existing detailed sections (기술요소|동작원리|기능|절차)
                existing_detailed_section_match = re.search(r'## (기술요소|동작원리|기능|절차)', body)

                # Criteria:
                # 1. "# 정의" and "## 특징" are present
                # 2. "## 최신 트렌드" is present
                # 3. No existing detailed section (기술요소, 동작원리, 기능, 절차) is found anywhere in the body
                #    OR, more specifically, none are found between features and trends
                if def_pos and features_pos and trends_pos:
                    # Check if any detailed section exists BETWEEN features and trends
                    # This is a more precise check than searching the whole body
                    segment_between_features_and_trends = body[features_pos.end():trends_pos.start()]
                    if not re.search(r'## (기술요소|동작원리|기능|절차)', segment_between_features_and_trends):
                        # Found the pattern: 정의 -> 특징 -> 최신 트렌드, without intermediate detailed section
                        
                        # Extract definition text for type determination
                        # Assuming definition is between '# 정의' and '## 특징'
                        definition_text_match = re.search(r'# 정의(.+?)## 특징', body, re.DOTALL)
                        definition_str = definition_text_match.group(1).strip() if definition_text_match else ""
                        
                        section_type = determine_section_type(title, definition_str)
                        section_content = f"- [TODO: {section_type} 내용을 여기에 작성하세요.]"
                        
                        new_section_markdown = f"\n\n## {section_type}\n{section_content}\n"
                        
                        # Insert the new section before "## 최신 트렌드"
                        trends_start_idx = trends_pos.start()
                        new_body = body[:trends_start_idx] + new_section_markdown + body[trends_start_idx:]
                        
                        post.content = new_body
                        final_content = frontmatter.dumps(post)
                        
                        if final_content != content:
                            write_markdown_file(file_path, final_content)
                            modified_files.append(file_path)
                            print(f"Added missing '## {section_type}' section to: {file_path}")
    
    return modified_files

if __name__ == "__main__":
    topics_base_dir = 'src/data/topics'
    
    # Check if 'python-frontmatter' is installed
    try:
        import frontmatter
    except ImportError:
        print("The 'python-frontmatter' library is not installed.")
        print("Please install it using: pip install python-frontmatter")
        exit(1)
        
    modified_files_list = add_missing_detailed_sections(topics_base_dir)
    
    if modified_files_list:
        print(f"\nSuccessfully added missing detailed sections to {len(modified_files_list)} files.")
    else:
        print("\nNo files found matching the criteria for adding missing detailed sections.")