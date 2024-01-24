import os

def print_second_line_of_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
        if len(lines) >= 2:
            print(f"Second line of {file_path}:")
            print(lines[1])
        else:
            print(f"File {file_path} doesn't have a second line.")

def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                print_second_line_of_file(file_path)

# Replace 'your_directory_path' with the path to the directory containing your markdown files.
process_directory('docs/pods/')
