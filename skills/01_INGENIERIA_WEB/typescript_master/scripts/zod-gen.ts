/**
 * Level 99 TypeScript Zod Schema Generator
 * 
 * Purpose: Instantly create Zod schemas and inferred types from static JSON.
 * Usage: `npx ts-node zod-gen.ts '{"id": 1, "name": "Test"}'`
 */

import { z } from 'zod';

function generateZodSchema(obj: any): string {
  let schemaStr = 'const schema = z.object({\n';
  
  for (const [key, value] of Object.entries(obj)) {
    let type = 'z.any()';
    if (typeof value === 'string') type = 'z.string()';
    if (typeof value === 'number') type = 'z.number()';
    if (typeof value === 'boolean') type = 'z.boolean()';
    if (Array.isArray(value)) type = 'z.array(z.any())';
    if (value && typeof value === 'object' && !Array.isArray(value)) type = 'z.object({...})';
    
    schemaStr += `  ${key}: ${type},\n`;
  }
  
  schemaStr += '});\n\ntype SchemaType = z.infer<typeof schema>;';
  return schemaStr;
}

// Example Execution
const input = process.argv[2] ? JSON.parse(process.argv[2]) : { id: 1, email: "rocka@example.com", isAdmin: true };
console.log("%c --- GENERATED ZOD SCHEMA --- ", "color: #ff00ff; font-weight: bold; background: #000;");
console.log(generateZodSchema(input));
