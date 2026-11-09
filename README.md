# TypeScript & OOP Assignment (B8A1)

## Assignment Overview

This repository contains the solutions for the TypeScript problem-solving tasks and two technical blog posts. The coding tasks cover optional parameters, union types, readonly tuples, generics, interfaces, `keyof`, classes, access modifiers, inheritance, and Promises.

## Files

- `solutions.ts` — all eight coding solutions in one TypeScript file.
- `type-vs-interface.md` — blog post comparing type aliases and interfaces.
- `type-narrowing.md` — blog post explaining type narrowing with examples.

## Run the TypeScript File

1. Install Node.js from https://nodejs.org/.
2. Open a terminal in this repository folder.
3. Initialize a project if needed:

   ```bash
   npm init -y
   ```

4. Install TypeScript:

   ```bash
   npm install --save-dev typescript
   ```

5. Check the TypeScript file:

   ```bash
   npx tsc --noEmit --target ES2019 --strict solutions.ts
   ```

The command should finish without TypeScript errors.

## Notes

The functions intentionally contain no sample calls or `console.log` statements, as required by the assignment. Test calls can be placed in a separate temporary file while practicing, but should not be added to the submitted `solutions.ts`.
