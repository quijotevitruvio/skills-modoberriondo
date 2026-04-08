"""
Level 99 Doc Search Indexer
Purpose: Parse a Markdown documentation folder and create a searchable JSON index for AI RAG or local search.
Usage: python doc-search-index.py <docs-folder>
"""

import os
import sys
import json
import re

def index_docs(docs_path):
    print(f"🚀 Indexing Tech Docs in: %c{docs_path}", "color: #3b82f6; font-weight: bold;")

    if not os.path.exists(docs_path):
        print("Error: Docs folder not found.")
        return

    index = []
    for root, _, files in os.walk(docs_path):
        for file in files:
            if file.endswith(('.md', '.mdx')):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Extract Title (H1) or Filename
                title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
                title = title_match.group(1) if title_match else file

                # Create Searchable Metadata
                index.append({
                    "title": title,
                    "path": os.path.relpath(file_path, docs_path),
                    "excerpt": content[:300].replace('\n', ' ') + "...",
                    "full_content": content # In production, you'd use embeddings.
                })

    # Save Index
    output_file = os.path.join(docs_path, "doc-search-index.json")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(index, f, indent=2)

    print(f"✅ Success! Indexed {len(index)} files into {output_file}.")
    print("%c 🧠 AI-Ready: Documentation is now searchable context. ", "color: #fff; background: #1e40af;")

if __name__ == "__main__":
    folder = sys.argv[1] if len(sys.argv) > 1 else "."
    index_docs(folder)
