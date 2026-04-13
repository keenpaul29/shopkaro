```markdown
# shopkaro Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `shopkaro` JavaScript repository. It covers file naming, import/export styles, commit message practices, and how to write and run tests. The repository does not use a framework, focusing on vanilla JavaScript with a modular structure.

## Coding Conventions

### File Naming
- Use **camelCase** for all file names.
  - Example: `productList.js`, `cartManager.js`

### Imports
- Use **relative imports** for referencing modules.
  - Example:
    ```javascript
    import { addToCart } from './cartManager.js';
    ```

### Exports
- Use **named exports** for functions, constants, or classes.
  - Example:
    ```javascript
    // cartManager.js
    export function addToCart(item) { ... }
    export const CART_LIMIT = 10;
    ```

### Commit Messages
- Freeform style with no enforced prefixes.
- Average length: ~42 characters.
  - Example:  
    ```
    Fix bug in cart total calculation
    ```

## Workflows

### Adding a New Module
**Trigger:** When you need to add new functionality as a separate module  
**Command:** `/add-module`

1. Create a new file using camelCase (e.g., `orderHistory.js`).
2. Implement your functions or classes.
3. Export them using named exports.
    ```javascript
    export function getOrderHistory(userId) { ... }
    ```
4. Import the module where needed using a relative path.
    ```javascript
    import { getOrderHistory } from './orderHistory.js';
    ```

### Writing and Running Tests
**Trigger:** When you want to verify code correctness  
**Command:** `/run-tests`

1. Create a test file with the `.test.` infix (e.g., `cartManager.test.js`).
2. Write your test cases (framework is unknown, so follow existing patterns).
3. Run your tests using the project's preferred method (consult project docs or package.json).

### Committing Changes
**Trigger:** When you are ready to save your work  
**Command:** `/commit-changes`

1. Write a concise, descriptive commit message (no prefix required).
    ```
    Update checkout validation logic
    ```
2. Commit your changes using your version control system.

## Testing Patterns

- Test files are named with the `.test.` infix (e.g., `productList.test.js`).
- The testing framework is not specified; follow the structure of existing test files.
- Place test files alongside the modules they test or in a dedicated test directory if present.

## Commands
| Command         | Purpose                                      |
|-----------------|----------------------------------------------|
| /add-module     | Scaffold and integrate a new JS module       |
| /run-tests      | Run all test files matching `*.test.*`       |
| /commit-changes | Commit staged changes with a message         |
```