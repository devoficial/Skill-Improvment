// typescript fundamentals
// 1. types
    // variables in typescript can be declared using var, let, const
    enum Color { Red = 1, Green = 2, Blue = 3 };
    let colorName: string = 'red';
    // colorName = [1, 2, 3]; // error
    // function types
    const add = (x: number, y: number): number => x + y;
    // optional parameters
    const buildName = (firstName: string, lastName?: string): string => { return `${firstName} ${lastName}` };
// 2. interfaces
// 3. classes
// 4. generics
// 5. decorators
// 6. modules
// 7. namespaces
// 8. type inference
// 9. type compatibility
// 10. type alias
// 11. ambient declarations
// 12. declaration merging
// 13. triple slash directives
// 14. iterators and generators
