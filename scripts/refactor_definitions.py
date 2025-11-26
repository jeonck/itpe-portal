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
        old_definition_text = def_match.group(2).strip()
        
        # Split into sentences to rephrase the last one
        sentences_raw = re.split(r'([.?!])', old_definition_text)
        sentences_raw = [s.strip() for s in sentences_raw if s.strip()] # Filter empty strings

        if not sentences_raw:
            print(f"No sentences found in definition for {file_path}. Skipping.")
            return False

        # Recombine sentences with their punctuation
        sentences = []
        i = 0
        while i < len(sentences_raw):
            if sentences_raw[i] in ['.', '!', '?']:
                if sentences:
                    sentences[-1] += sentences_raw[i]
            else:
                sentences.append(sentences_raw[i])
            i += 1
        
        if not sentences:
            print(f"No valid sentences processed for definition in {file_path}. Skipping.")
            return False

        last_sentence = sentences[-1]
        
        # Define common noun endings
        noun_endings = ("기술", "기법", "기능", "동작", "메커니즘", "아키텍처", "프레임워크", "플랫폼", "솔루션", "방법", "방식", "규약", "표준", "모델", "체계", "시스템", "개념", "원리", "분야", "활용", "패러다임", "의미")

        new_last_sentence = last_sentence.strip()
        
        # Try to apply replacements, aiming for a noun ending
        # Remove common verb endings and '입니다/합니다' etc.
        new_last_sentence = re.sub(r'(는|은|이|가)\s*(것|활동|분야|단계|수단|프로세스|체계|시스템|기법|기술|기능|동작|방식|원리|개념|패러다임|솔루션|플랫폼|프레임워크|아키텍처)\s*이다\s*\.?$', r'\1', new_last_sentence).strip() # Remove '이다'
        new_last_sentence = re.sub(r'제공하는 기술입니다\s*\.?$', '제공하는 기술', new_last_sentence).strip()
        new_last_sentence = re.sub(r'강화하는 분야입니다\s*\.?$', '강화하는 분야', new_last_sentence).strip()
        new_last_sentence = re.sub(r'해결하는 기법입니다\s*\.?$', '해결하는 기법', new_last_sentence).strip()
        new_last_sentence = re.sub(r'입니다\s*\.?$', '', new_last_sentence).strip()
        new_last_sentence = re.sub(r'합니다\s*\.?$', '', new_last_sentence).strip()
        new_last_sentence = re.sub(r'제공합니다\s*\.?$', '제공하는 기능', new_last_sentence).strip() # "제공하는 기능"으로 변경
        new_last_sentence = re.sub(r'나타냅니다\s*\.?$', '의미', new_last_sentence).strip()
        new_last_sentence = re.sub(r'의미합니다\s*\.?$', '의미', new_last_sentence).strip()
        new_last_sentence = re.sub(r'패러다임입니다\s*\.?$', '패러다임', new_last_sentence).strip()
        new_last_sentence = re.sub(r'아키텍처입니다\s*\.?$', '아키텍처', new_last_sentence).strip()
        new_last_sentence = re.sub(r'솔루션입니다\s*\.?$', '솔루션', new_last_sentence).strip()
        new_last_sentence = re.sub(r'기술입니다\s*\.?$', '기술', new_last_sentence).strip()
        new_last_sentence = re.sub(r'기법입니다\s*\.?$', '기법', new_last_sentence).strip()
        new_last_sentence = re.sub(r'기능입니다\s*\.?$', '기능', new_last_sentence).strip()
        new_last_sentence = re.sub(r'동작입니다\s*\.?$', '동작', new_last_sentence).strip()
        new_last_sentence = re.sub(r'규약입니다\s*\.?$', '규약', new_last_sentence).strip()
        new_last_sentence = re.sub(r'표준입니다\s*\.?$', '표준', new_last_sentence).strip()
        new_last_sentence = re.sub(r'플랫폼입니다\s*\.?$', '플랫폼', new_last_sentence).strip()
        new_last_sentence = re.sub(r'모델입니다\s*\.?$', '모델', new_last_sentence).strip()
        new_last_sentence = re.sub(r'체계입니다\s*\.?$', '체계', new_last_sentence).strip()
        new_last_sentence = re.sub(r'시스템입니다\s*\.?$', '시스템', new_last_sentence).strip()
        new_last_sentence = re.sub(r'개념입니다\s*\.?$', '개념', new_last_sentence).strip()
        new_last_sentence = re.sub(r'원리입니다\s*\.?$', '원리', new_last_sentence).strip()
        new_last_sentence = re.sub(r'방식입니다\s*\.?$', '방식', new_last_sentence).strip()
        new_last_sentence = re.sub(r'분야입니다\s*\.?$', '분야', new_last_sentence).strip()
        new_last_sentence = re.sub(r'활용됩니다\s*\.?$', '활용', new_last_sentence).strip()
        new_last_sentence = re.sub(r'것입니다\s*\.?$', '것', new_last_sentence).strip()

        # If it doesn't end with a noun ending, append a context-appropriate one
        if not new_last_sentence.endswith(noun_endings):
            suggested_noun = refactor_definition_noun(old_definition_text, title)
            # Avoid appending if the suggested_noun is already implicitly there or redundant
            if not new_last_sentence.endswith(suggested_noun):
                new_last_sentence = new_last_sentence.rstrip('.').strip() + " " + suggested_noun

        # Ensure it ends with a period for consistency
        new_last_sentence = new_last_sentence.rstrip('.').strip() + "."

        # Reconstruct the definition text
        new_definition_text = ""
        if len(sentences) > 1:
            new_definition_text = " ".join(sentences[:-1]).strip() + " " + new_last_sentence
        else:
            new_definition_text = new_last_sentence

        new_definition_text = re.sub(r'\s*\.\s*\.', '.', new_definition_text) # Fix double periods if any
        new_definition_text = new_definition_text.replace("..", ".") # Remove any double periods from processing

        # Reconstruct the body
        new_body = body.replace(old_definition_text, new_definition_text, 1) # Only replace first occurrence
        
        post.content = new_body
        final_content = frontmatter.dumps(post)

        if final_content != content:
            write_markdown_file(file_path, final_content)
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
