# [ES] Arquitecto de Bloques Gutenberg
# [EN] Gutenberg Block Architect

[ES] Creación de experiencias de edición dinámicas y berracas en WordPress.
[EN] Creation of dynamic and powerful editing experiences in WordPress.


## [!IMPORTANT] The Golden Rule of Gutenberg
- **Keep it Simple & Native**: Use built-in WordPress components (`RichText`, `InnerBlocks`, `InspectorControls`) instead of custom inputs whenever possible for future compatibility.
- **Dynamic Blocks Over Static**: For complex CRM or Data-based content, use "Dynamic Blocks" (rendering with PHP) to ensure that the content updates automatically without re-saving every post.
- **Block Styles & Patterns**: Prefer "Block Styles" and "Block Patterns" for minor design variations over creating entirely new custom blocks for every UI tweak.

## 🛠️ Level 99 Automation (Patterns)
- **The "Client-Side" Preview**: Build interactive blocks that show a real-time, high-fidelity preview in the editor, eliminating the need to "Switch to Preview" every 10 seconds.
- **Block Serialization (Attributes)**: Deep mastery of the `attributes` object in `block.json` to store structured data safely in the database.
- **Performance-First Blocks**: Minimize the use of external libraries; use the native WordPress `@wordpress/scripts` toolchain for 0-config bundling.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to manage and scaffold your WordPress blocks instantly.

- **Scaffold a New Gutenberg Block (Modern Tooling)**:
  ```bash
  npx @wordpress/create-block your-cool-block --template @wordpress/create-block-tutorial-template
  ```
- **Lint All Block Files (Standard-compliant)**:
  ```bash
  npm run lint:js && npm run lint:css
  ```
- **Build for Production (Minified & Optimized)**:
  ```bash
  npm run build
  ```

## Advanced Techniques
- **Shared Context**: Use `providesContext` and `usesContext` to share data between a parent block (e.g., a "CRM Card") and its children (e.g., "Field" blocks).
- **ServerSideRender**: Utilize the `ServerSideRender` component to bridge complex React logic with existing PHP functions safely.
- **Full Site Editing (FSE)**: Master the `theme.json` file to define global styles that apply both to the frontend and the Gutenberg editor.

## Actionable Script: Block Pro Scaffolder
- **[block-gen.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/gutenberg_block_architect/scripts/block-gen.sh)**: A fast script to scaffold a modern, performance-optimized Gutenberg block structure.

## Inter-Skill Integration
- **With UI/UX Design System**: Use the `design_tokens.css` file as the source of truth for the `theme.json` color palette and typography.
- **With React Mastery**: Apply your expert-level React knowledge to build complex, stateful blocks within the Gutenberg environment.
- **With Rank Math SEO**: Ensure blocks output semantic HTML (`html_semantic_architect`) that Rank Math can properly analyze.