// ✅ Prerequisites
// Node.js and npm installed (node -v, npm -v)

// An account on npmjs.com

// If you don’t have an account yet, go make one—it’s free.

// 🔧 1. Create your package
// Make a folder for your package:

// mkdir my-awesome-package
// cd my-awesome-package
// Initialize it with:

// npm init
// or

// npm init -y
// This creates a package.json file. You can edit this to add things like "description", "keywords", "author", etc.

// 📁 2. Add your code
// Put your main logic in something like index.js:

// // index.js
// module.exports = function () {
//   console.log('Hello from my-awesome-package!');
// };
// Make sure your package.json has a main field pointing to this file:

// "main": "index.js"
// 📦 3. Add a .gitignore and optionally a .npmignore
// Typical .gitignore:

// node_modules/
// dist/
// If you don’t want certain files in your published package, add a .npmignore file. Otherwise, npm uses .gitignore.

// 🧪 4. Test your package locally
// From the root of your package folder:

// npm link
// Then in another project:

// npm link my-awesome-package
// Now you can require() or import it and test.

// 🔐 5. Login to npm
// If you haven't already:

// npm login
// Follow the prompts to enter your npm username, password, and email.

// 🚀 6. Publish!
// Make sure your package name in package.json is unique (or scoped like @yourusername/package-name).

// Then run:

// npm publish
// If you're using a scoped package (@yourname/pkg), you might need:

// npm publish --access public
// ✅ Done!
// Your package should now be live on npmjs.com. You (and others) can install it like:

// npm install my-awesome-package
