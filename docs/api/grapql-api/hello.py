import re


def convert_to_tabs(markdown_content):
    # Regex pattern to capture each code block section
    pattern = re.compile(
        r"<!-- dprint-ignore-start -->\n(```.*?```)\n(```.*?```)\n(```.*?```)\n<!-- dprint-ignore-end -->",
        re.DOTALL,
    )

    def format_section(match):
        blocks = [block.strip() for block in match.groups()]
        labels = ["cURL", "GraphQL", "Output"]
        tab_items = []

        for label, block in zip(labels, blocks):
            # Extract language
            lang = block.split("\n", 1)[0].replace("```", "").strip()
            # Extract code
            code = block.split("\n", 1)[1].rstrip("```").strip()
            tab_item = f"""
  <TabItem value="{lang.lower()}" label="{label}">
```{lang}
{code}
```
  </TabItem>"""
            tab_items.append(tab_item)

        return "<Tabs>\n" + "\n".join(tab_items) + "\n</Tabs>"

    # Substitute the matched patterns with the tabbed format
    return pattern.sub(format_section, markdown_content)


# Read the content of the Markdown file
file_path = "create-pod-template.md"
with open(file_path, "r") as file:
    markdown_content = file.read()

# Convert to tabs
converted_content = convert_to_tabs(markdown_content)

# Print or save the converted content
print(converted_content)
