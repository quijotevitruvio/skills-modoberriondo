#!/bin/bash
# Level 99 Gutenberg Block Scaffolder
# Purpose: Performance-optimized initialization of a WordPress block.
# Usage: ./block-gen.sh <block-slug>

BLOCK_SLUG=$1

if [ -z "$BLOCK_SLUG" ]; then
    echo "Usage: ./block-gen.sh <block-slug>"
    exit 1
fi

echo "🚀 Scaffolding Gutenberg Block: $BLOCK_SLUG..."

# 1. Using @wordpress/create-block for a standard structure
npx @wordpress/create-block $BLOCK_SLUG --no-plugin

cd $BLOCK_SLUG

# 2. Inject performance-oriented block.json settings
# (Adding supports: align, anchor, customClassName)
cat <<EOF > src/block.json
{
	"\$schema": "https://schemas.wp.org/trunk/block.json",
	"apiVersion": 3,
	"name": "create-block/$BLOCK_SLUG",
	"version": "0.1.0",
	"title": "$BLOCK_SLUG",
	"category": "widgets",
	"icon": "smiley",
	"description": "Custom performance-optimized block for the Vanguard ecosystem.",
	"example": {},
	"supports": {
		"html": false,
		"align": true,
		"anchor": true
	},
	"textdomain": "$BLOCK_SLUG",
	"editorScript": "file:./index.js",
	"editorStyle": "file:./index.css",
	"style": "file:./style-index.css",
	"render": "file:./render.php"
}
EOF

echo "✅ Block $BLOCK_SLUG scaffolded. Run 'npm start' to begin development."
