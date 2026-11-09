# Type Aliases vs Interfaces in TypeScript

## Introduction

TypeScript provides both `type` aliases and `interface` declarations to describe the shape of data. They often look similar, but they have different capabilities. Choosing the right one makes code easier to understand and maintain.

## Detailed Explanation

An interface is commonly used to describe the structure of an object. It can define properties and methods, and another interface can extend it.

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

A type alias can also describe an object, but it can represent more than object shapes. For example, it can create union types, intersection types, primitive aliases, and tuple types.

```ts
type Status = "pending" | "approved" | "rejected";

type UserWithRole = User & {
  role: string;
};

type Coordinate = [number, number];
```

One important difference is declaration merging. If the same interface is declared more than once, TypeScript merges its members. Type aliases cannot be reopened in this way. Interfaces are therefore useful when designing object-oriented contracts or public object APIs that may be extended.

Type aliases are especially useful when a type needs unions, intersections, tuples, or a combination of different types. Both can be used for many object definitions, so consistency within a project is also important.

## Conclusion

Use an interface when describing an extendable object structure. Use a type alias when defining unions, tuples, intersections, or other type expressions. Understanding both gives developers flexibility while keeping TypeScript code clear.
