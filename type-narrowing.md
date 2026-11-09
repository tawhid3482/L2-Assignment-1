# Type Narrowing in TypeScript

## Introduction

Type narrowing is the process of reducing a variable from a broad type to a more specific type. It helps TypeScript understand which operations are safe in a particular part of a program. Developers commonly narrow union types using `typeof`, `instanceof`, and the `in` operator.

## Detailed Explanation

The `typeof` operator is useful for primitive values such as strings, numbers, and booleans. After checking the type, TypeScript allows the matching operation.

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  return value.toFixed(2);
}
```

The `instanceof` operator checks whether an object was created from a particular class or constructor. It is useful when handling different class instances.

```ts
class Dog {
  bark(): string {
    return "Woof";
  }
}

class Cat {
  meow(): string {
    return "Meow";
  }
}

function makeSound(animal: Dog | Cat): string {
  if (animal instanceof Dog) {
    return animal.bark();
  }

  return animal.meow();
}
```

The `in` operator checks whether a property exists in an object. TypeScript uses that check to narrow object union types.

```ts
type EmailUser = { email: string };
type PhoneUser = { phone: string };

function getContact(user: EmailUser | PhoneUser): string {
  if ("email" in user) {
    return user.email;
  }

  return user.phone;
}
```

These checks make code safer because each branch works with a type that supports the operations being used.

## Conclusion

Type narrowing improves type safety and reduces runtime mistakes. Use `typeof` for primitive values, `instanceof` for class instances, and `in` for checking object properties. These techniques are practical tools for writing reliable TypeScript applications.
