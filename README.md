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
2. Navigate to the project folder using the Command Prompt.
Run the TypeScript compiler using the following command:

   ```
   tsc --init
   ```
   It will create a `tsconfig.json` file in your project folder.

## Step 4: Configure tsconfig.json

 Below is a sample configuration that explains each chosen option:

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

1. Create `exersise1.ts, exersise2.ts ... ` files in your project folder and start writing TypeScript code.

## Step 6: Compile TypeScript Code

1. In the Command Prompt, navigate to your project folder.
2. Run the TypeScript compiler using the following command:

   ```
   tsc
   ```

   This will compile your TypeScript code based on the configurations in `tsconfig.json` and generate JavaScript files in the specified `outDir`.

## Step 6: Run Your Node.js Application

1. Navigate to the "dist" directory within your project folder.

```
cd dist
```

2. Run your Node.js application using the node command followed by the name of your compiled JavaScript file.
   For example:


```
node exercise1.js
```

Replace exercise1.js with the name of your compiled JavaScript file.

or you can directly run .js file from your project root:

```
node ./dist/exercise1.js
```

Your Node.js application should now be running, and you'll see the output in the command window.

 
