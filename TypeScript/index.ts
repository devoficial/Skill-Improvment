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
    // interfaces are used to describe the shape of an object
    interface Person { 
        firstName: string;
        lastName: string;
        age?: number;
        mobile?: number;
    }
    const greeter = (person: Person): string => `Hello ${person.firstName} ${person.lastName} ${person.age} ${person.mobile}`;
    const user: Person = { firstName: 'John', lastName: 'Doe', age: 30, mobile: 1234567890 };
    // greeter(user);
    // greeter({ firstName: 'John', lastName: 'Doe', age: 30, mobile: 1234567890 });
    interface Point {
        readonly x: number;
        readonly y: number;
        cb?: (x: number, y: number) => number;
    }

    const p1: Point = { x: 10, y: 20 };
    // p1.x = 5; // error
    const p2: Point = { x: 10, y: 20, cb: (x, y) => x + y };
    // p2.cb = (x, y) => x * y; // error
    const getPow = (x: number, y: number): number => x ** y;
    const p3: Point = { x: 10, y: 20, cb: getPow };
    // p3.cb = (x, y) => x * y; // error
// 3. Union types and type aliases
// 4. classes
// 5. generics
// 6. decorators
// 7. modules
// 8. namespaces
// 9. type inference
// 10. type compatibility
// 11. type alias
// 12. ambient declarations
// 13. declaration merging
// 14. triple slash directives
// 15. iterators and generators
