// 🚚 How to Migrate a Project from JS to TS
// ✅ 1. Install TypeScript
// In your existing JavaScript project:


// npm install --save-dev typescript

// Optionally, install type definitions for Node (if using Node):
// npm install --save-dev @types/node
// 🛠 2. Initialize TypeScript config
// npx tsc --init
// This creates a tsconfig.json file. You can customize it based on your project:

// {
//   "compilerOptions": {
//     "target": "ES6",
//     "module": "CommonJS",
//     "strict": true,
//     "esModuleInterop": true,
//     "skipLibCheck": true,
//     "outDir": "dist",
//     "rootDir": "src"
//   },
//   "include": ["src"],
//   "exclude": ["node_modules"]
// }
// ✏️ 3. Rename Files from .js to .ts (or .jsx to .tsx)
// You can do this manually or with a script. For example:


// find src -name "*.js" -exec bash -c 'mv "$0" "${0%.js}.ts"' {} \;
// For React projects:

// find src -name "*.jsx" -exec bash -c 'mv "$0" "${0%.jsx}.tsx"' {} \;
// 👨‍🔧 4. Fix Type Errors Gradually
// Start adding type annotations where needed. TypeScript will infer many things, but you can improve accuracy by explicitly typing:

// Function parameters and return types

// Variables and constants

// Props and state (React)

// Use any temporarily when unsure, then replace it later with a proper type.

// 🧩 5. Install Type Definitions
// If you’re using libraries (like lodash, express, react, etc.), install their types:


// npm install --save-dev @types/express
// npm install --save-dev @types/react
// Use DefinitelyTyped as a source.

// 🧪 6. Test Everything
// Use your existing test suite or add manual checks to ensure the code behaves the same after migration.

// 🚀 7. Gradually Refactor to Fully Typed Code
// Continue refining your types, introducing interfaces, types, enums, and utility types like Partial, Pick, etc.

// 🆚 Type vs Interface in TypeScript
// Both are used to define custom types, but there are some key differences:

// Feature	interface	type
// Used for	Objects, classes	Anything: primitives, unions, tuples
// Extendable	Yes (extends)	Yes (via intersections: &)
// Declaration merging	✅ Supported	❌ Not supported
// React props preference	Commonly used	Also valid
// Computed properties	❌ Not allowed	✅ Allowed (type A = { [K in T]: X })
// ✅ Use interface when:
// You're defining object shapes or class structures.

// You want to take advantage of declaration merging.

// ts
// interface User {
//   name: string;
//   age: number;
// }
// ✅ Use type when:
// You need union/intersection types.

// You’re defining function signatures or more complex combinations.

// ts
// type ID = string | number;

// type User = {
//   name: string;
//   age: number;
// };
// Both work similarly in most cases, so use what feels natural or is standard in your project/team.
