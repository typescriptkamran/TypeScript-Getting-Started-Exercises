# TypeScript-Getting-Started-Exercises

# Installing TypeScript on Windows

This guide will walk you through the process of installing TypeScript on a Windows operating system.

## Step 1: Install Node.js and npm

1. Download the Node.js installer for Windows from the official website: [Node.js Downloads](https://nodejs.org/en/download/)
2. Run the installer and follow the installation instructions.

## Step 2: Install TypeScript

1. Open a Command Prompt or PowerShell window.
2. To install TypeScript globally on your system, run the following command:
   
   ```
   npm install -g typescript
   ```

## Step 3: Create a TypeScript Project

1. Create a new folder for your TypeScript project.
2. Navigate to the project folder using the Command Prompt or PowerShell.

## Step 4: Configure tsconfig.json

Create a `tsconfig.json` file in your project folder. Below is a sample configuration that explains each chosen option:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

- `"target": "ES2022"`: Specifies the version of JavaScript the TypeScript code will be compiled to.
- `"module": "NodeNext"`: Sets the module code generation to support Node.js-style modules.
- `"outDir": "./dist"`: Specifies the output directory for compiled JavaScript files.
- `"esModuleInterop": true`: Enables interoperability with CommonJS modules using ES6-style imports.
- `"forceConsistentCasingInFileNames": true`: Ensures consistent casing for imported file names, which helps prevent issues on case-insensitive file systems.
- `"strict": true`: Enables all strict type-checking options for robust type safety.
- `"skipLibCheck": true`: Skips type-checking of declaration files for faster compilation.

## Step 5: Write TypeScript Code

1. Create `.ts` files in your project folder and start writing TypeScript code.

## Step 6: Compile TypeScript Code

1. In the Command Prompt or PowerShell, navigate to your project folder.
2. Run the TypeScript compiler using the following command:

   ```
   tsc
   ```

   This will compile your TypeScript code based on the configurations in `tsconfig.json` and generate JavaScript files in the specified `outDir`.
