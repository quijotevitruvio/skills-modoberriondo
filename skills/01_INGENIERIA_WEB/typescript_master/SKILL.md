# [ES] Maestro en TypeScript
# [EN] Typescript Master

[ES] Seguridad de tipos y arquitectura resiliente en el ecosistema JS.
[EN] Type-safety and resilient architecture in the JS ecosystem.


## [!IMPORTANT] The Golden Rule of TypeScript
- **Strict Mode**: Always set `"strict": true` in `tsconfig.json`. No exceptions for enterprise-grade apps.
- **Type-Safe Data Flow**: Ensure every API response is validated at runtime using **Zod** or **io-ts** to prevent "undefined is not a function" errors.
- **Discriminated Unions**: Use them for complex UI states (e.g., `Loading`, `Success`, `Error`) to eliminate invalid states at compile time.

## 🛠️ Level 99 Automation (Patterns)
- **The "Utility Type" Power**: Master `Omit`, `Pick`, `Partial`, and `Required`. Use `Record<string, unknown>` instead of `any`.
- **Branded Types**: Create "Branded" primitive types (e.g. `UserId`, `Email`) to prevent developer errors like passing a `dealId` into a `customerId` parameter.

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these to analyze and fix TypeScript architectures instantly.

- **Fast Type Check (No Emit)**:
  ```bash
  npx tsc --noEmit
  ```
- **Check Specific File Types**:
  ```bash
  (Using n8n or Node script) npx ts-node --type-check server.ts
  ```
- **Audit `any` usage**:
  ```bash
  npx eslint . --rule 'no-explicit-any: error'
  ```

## Advanced Techniques
- **Generics**: Build reusable components and services that strictly maintain input-output type relationships.
- **Mapped Types**: Use them to transform existing types into new shapes automatically (e.g. creating a `Readonly` version of a deep object).
- **Zod Schemas**: Use `z.infer<typeof schema>` to bridge the gap between runtime validation and static typing.

## Advanced Type Gymnastics
- **Conditional Types (The "Infer" Keyword)**: Use `T extends { a: infer U } ? U : never` to extract nested types from complex third-party libraries.
- **Template Literal Types**: Create strong string types like `Env: "prod" | "dev" | "stg"` or `Action: `user:${Verb}`` for high-precision event tracking.
- **Opaque / Nominal Types**: Prevent passing a `CustomerID` where a `DealID` is expected using unique symbols to "Brand" your primitives.

## Actionable Script: Type Strength Audit
- **[types-audit.ts](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/typescript_master/scripts/types-audit.ts)**: A Level 99 utility to identify "Loose" types (`any`, `unknown`) and suggest stronger alternatives using conditional logic.

## Inter-Skill Integration
- **With AI Engineering (RAG)**: Use TypeScript to define the "Context Schema" so your AI always receives data in the expected format.
- **With Engine Core Performance**: High-quality types lead to "Monomorphic" code, which V8 can optimize significantly better than polymorphic "any" code.
- **With Technical SEO**: Define strict schemas for JSON-LD structured data to ensure search engines never receive malformed metadata.