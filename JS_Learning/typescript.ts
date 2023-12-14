// What is TypeScript and why would you use it?
// How does TypeScript differ from JavaScript?
// What are the basic types in TypeScript?
// Explain the concept of Type Inference in TypeScript.
// What is a union type in TypeScript?
// What is an interface in TypeScript and how does it differ from a class?
// Explain the concept of type assertion in TypeScript.
// What is the "any" type in TypeScript and when would you use it?
// What is a tuple in TypeScript?
// Explain the concept of generics in TypeScript.
// What are namespaces in TypeScript?
// What is an ambient declaration in TypeScript?
// How does TypeScript support decorators and what are they used for?
// Explain the concept of strict null checks in TypeScript.
// What is a module in TypeScript?
// 
// What is a namespace module in TypeScript?
// Explain the concept of abstract classes in TypeScript.
// What is a mixin in TypeScript and how would you implement it?
// What is an enum in TypeScript and when would you use it?
// What is the purpose of the "never" type in TypeScript?
// Explain the concept of type guards in TypeScript.
// What is the "readonly" modifier in TypeScript and how does it work?
// What are conditional types in TypeScript?
// Explain the concept of declaration merging in TypeScript.

type typeOfLibrary = "national" | "academic" | "public"

type book = {
  title: string,
  pages: number,
  isbn: string
}

type member = {
  name: string,
  phone: string,
  [key: string]: string
}

type Library = {
  name: string,
  address: string,
  numberOfBooks: number,
  type: typeOfLibrary,
  books: book[],
  genres: string[],
  members: member[]
}

const library: Library = {
    name: "New York Library",
    address: " 24, Some Street, New York",
    numberOfBooks: 1254,
    type: "national", // 'national', 'academic', 'public'
    books: [
      {
        title: "Harry Potter",
        pages: 756,
        isbn: "9971-5-0210-0",
      },
      {
        title: "Davinci Code",
        pages: 386,
        isbn: "9971-5-0210-0",
      },
    ],
    genres: ["fiction", "history", "computers", "poetry"],
    members: [
      {
        name: "John Doe",
        phone: "+167678978",
      },
      {
        name: "Mark Doe", // Name is mandatory
        phone: "+167678978", // Phone is mandatory
        email: "mark@email.com", // Can have additional optional fields
      },
    ],
  };