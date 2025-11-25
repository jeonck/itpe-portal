import re
import os
import frontmatter

def remove_bold_from_markdown_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split content into frontmatter and body
    try:
        post = frontmatter.loads(content)
        body = post.content
        frontmatter_str = frontmatter.dumps(post) # Reconstruct frontmatter
    except Exception:
        # If no frontmatter or parsing fails, assume entire file is body
        body = content
        frontmatter_str = ""

    # Regex to find **text** and replace with text
    # This regex is a bit tricky: it needs to handle **text**, __text__, and
    # not accidentally remove asterisks that are not for bolding (e.g., in code blocks or lists)
    # For simplicity and given the context, we'll aim for common bold patterns.
    # We will simply remove ** and leave the text as is.
    # More robust solution would be to use a markdown parser.
    modified_body = re.sub(r'\*\*(.*?)\*\*', r'\1', body)
    
    # Reconstruct the file content
    if frontmatter_str:
        new_content = frontmatter_str + "\n\n" + modified_body
    else:
        new_content = modified_body

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Removed bold formatting from: {file_path}")
        return True
    return False

def process_all_markdown_files(root_dir):
    modified_count = 0
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.md'):
                file_path = os.path.join(dirpath, filename)
                if remove_bold_from_markdown_content(file_path):
                    modified_count += 1
    print(f"\nProcessed {modified_count} files.")

if __name__ == "__main__":
    topics_dir = 'src/data/topics'
    if not os.path.exists(topics_dir):
        print(f"Error: Directory '{topics_dir}' not found.")
    else:
        # Before processing, check if 'python-frontmatter' is installed
        try:
            import frontmatter
        except ImportError:
            print("The 'python-frontmatter' library is not installed.")
            print("Please install it using: pip install python-frontmatter")
            exit(1)
        
        process_all_markdown_files(topics_dir)
