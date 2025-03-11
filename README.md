# Vue Petite

Repo to evaluate Vue Petite

## Requirements

1. **Zero Build Process Required**
   - Framework must be usable without compilation, transpilation, or build tools
   - Should work directly in the browser with standard script tags

2. **Native Component Support**
   - Must have first-class support for component-based architecture
   - Should provide clear component definition and lifecycle management

3. **Component Nesting Capability**
   - Components must be able to import and render other components
   - Parent-child component relationships must be supported

4. **Global State Management**
   - Must provide mechanism for global state that persists across components
   - State changes should propagate to relevant components
   - Should handle reactivity without manual DOM manipulation

5. **Hierarchical Component Structure**
   - Must support organizing application as a tree of components
   - Should maintain proper parent-child relationships and inheritance

6. **ES6 Module Support**
   - Components should be importable via ES6 module syntax
   - Should work with standard browser module implementation
   - No custom module system should be required

## Evaluation Criteria

Requirement                    | Priority | Notes
------------------------------ | -------- | --------------------------------
Zero Build Process             | High     | Essential for simplicity
Native Component Support       | High     | Core architectural requirement
Component Nesting              | High     | Required for proper composition
Global State Management        | High     | Needed for cross-component data
Hierarchical Structure         | High     | Essential for application design
ES6 Module Support             | Medium   | Preferred for modern development

## Implementation Demonstration

The selected framework must be demonstrated with a minimal application that:

1. Shows all requirements being met in practical implementation
2. Follows modern web development best practices
3. Contains minimal code needed to verify requirements
4. Is well-documented with comments explaining key concepts

## Demo

- [x] [first](examples/first)
- [x] [Nested Components](examples/vote)
