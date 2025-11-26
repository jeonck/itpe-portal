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

def refactor_definition_noun(definition_text, title):
    # Heuristics to determine the best ending noun phrase based on content and title
    title_lower = title.lower()
    
    # Prioritize based on keywords in definition itself
    if re.search(r'(기술|기법|메커니즘|아키텍처|프레임워크|플랫폼|솔루션|방법|방식)', definition_text, re.IGNORECASE):
        if '기술' in definition_text: return "기술"
        if '기법' in definition_text: return "기법"
        if '메커니즘' in definition_text: return "메커니즘"
        if '아키텍처' in definition_text: return "아키텍처"
        if '프레임워크' in definition_text: return "프레임워크"
        if '플랫폼' in definition_text: return "플랫폼"
        if '솔루션' in definition_text: return "솔루션"
        if '방법' in definition_text: return "방법"
        if '방식' in definition_text: return "방식"

    # Fallback to title keywords if not found in definition
    if any(keyword in title_lower for keyword in ['기술', 'tech', 'blockchain', 'ai', 'iot', 'vr', 'ar', 'ml', 'cloud', 'security', '암호', '컴퓨팅', '인증']):
        return "기술"
    if any(keyword in title_lower for keyword in ['기법', 'method', 'pattern', 'algorithm', '공격', '방어']):
        return "기법"
    if any(keyword in title_lower for keyword in ['기능', 'function', 'solution', '서비스', '서비스']):
        return "기능"
    if any(keyword in title_lower for keyword in ['동작', 'principle', 'operation', '아키텍처']):
        return "동작"
    
    # Default if no specific keyword matches
    return "기술"

def process_definition_in_file(file_path):
    content = read_markdown_file(file_path)
    
    # Parse frontmatter
    try:
        post = frontmatter.loads(content)
        title = post.metadata.get('title', 'Unknown Title')
        body = post.content
    except Exception as e:
        print(f"Error parsing frontmatter for {file_path}: {e}. Skipping.")
        return False

    # Find the definition section
    # Assuming # 정의 is the first H1 header after frontmatter
    # And it ends before the next H2 header or end of file
    def_match = re.search(r'(# 정의\s*)(.+?)(?=\n##|$)', body, re.DOTALL)

    if def_match:
        old_definition_full_text = def_match.group(2).strip()
        
        # Split into individual lines to check for multi-line definitions
        lines = [line.strip() for line in old_definition_full_text.split('\n') if line.strip()]

        new_definition_final_sentence = ""
        if len(lines) > 1:
            # If multiple lines, prioritize the last one
            new_definition_final_sentence = lines[-1]
        else:
            # If single line, use it
            new_definition_final_sentence = lines[0] if lines else ""

        if not new_definition_final_sentence:
            print(f"No definition text found for {file_path}. Skipping.")
            return False

        # Apply the noun-ending refactoring logic to the chosen sentence
        noun_endings = ("기술", "기법", "기능", "동작", "메커니즘", "아키텍처", "프레임워크", "플랫폼", "솔루션", "방법", "방식", "규약", "표준", "모델", "체계", "시스템", "개념", "원리", "분야", "활용", "패러다임", "의미")

        new_sentence_processed = new_definition_final_sentence.strip()
        
        # Remove common verb endings and '입니다/합니다' etc.
        new_sentence_processed = re.sub(r'제공하는 기술입니다\s*\.?$', '제공하는 기술', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'강화하는 분야입니다\s*\.?$', '강화하는 분야', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'해결하는 기법입니다\s*\.?$', '해결하는 기법', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'입니다\s*\.?$', '', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'합니다\s*\.?$', '', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'제공합니다\s*\.?$', '제공하는 기능', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'나타냅니다\s*\.?$', '의미', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'의미합니다\s*\.?$', '의미', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'패러다임입니다\s*\.?$', '패러다임', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'아키텍처입니다\s*\.?$', '아키텍처', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'솔루션입니다\s*\.?$', '솔루션', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'기술입니다\s*\.?$', '기술', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'기법입니다\s*\.?$', '기법', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'기능입니다\s*\.?$', '기능', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'동작입니다\s*\.?$', '동작', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'규약입니다\s*\.?$', '규약', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'표준입니다\s*\.?$', '표준', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'플랫폼입니다\s*\.?$', '플랫폼', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'모델입니다\s*\.?$', '모델', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'체계입니다\s*\.?$', '체계', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'시스템입니다\s*\.?$', '시스템', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'개념입니다\s*\.?$', '개념', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'원리입니다\s*\.?$', '원리', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'방식입니다\s*\.?$', '방식', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'분야입니다\s*\.?$', '분야', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'활용됩니다\s*\.?$', '활용', new_sentence_processed).strip()
        new_sentence_processed = re.sub(r'것입니다\s*\.?$', '것', new_sentence_processed).strip()
        
        # Fallback for remaining '다' endings
        new_sentence_processed = re.sub(r'다\s*\.?$', '', new_sentence_processed).strip()
        
        # If it doesn't end with a noun ending, append a context-appropriate one
        if not new_sentence_processed.endswith(noun_endings):
            suggested_noun = refactor_definition_noun(old_definition_full_text, title)
            # Avoid appending if the suggested_noun is already implicitly there or redundant
            if not new_sentence_processed.endswith(suggested_noun):
                new_sentence_processed = new_sentence_processed.rstrip('.').strip() + " " + suggested_noun

        # Ensure it ends with a period for consistency
        final_definition_text = new_sentence_processed.rstrip('.').strip() + "."

        # Reconstruct the body
        # Replace only the exact old full definition text to avoid altering other parts
        new_body = body.replace(old_definition_full_text, final_definition_text, 1)
        
        post.content = new_body
        final_file_content = frontmatter.dumps(post)

        if final_file_content != content:
            write_markdown_file(file_path, final_file_content)
            print(f"Refactored definition in: {file_path}")
            return True
    return False

def main():
    base_dir = 'src/data/topics'
    modified_count = 0
    
    for root, _, files in os.walk(base_dir):
        for file_name in files:
            if file_name.endswith('.md'):
                file_path = os.path.join(root, file_name)
                if process_definition_in_file(file_path):
                    modified_count += 1
                    
    print(f"\nCompleted refactoring definitions. Modified {modified_count} files.")

if __name__ == "__main__":
    main()