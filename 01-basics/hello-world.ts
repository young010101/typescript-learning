// Hello World in TypeScript
// 这是你的第一个 TypeScript 程序

function greet(name: string): string {
    return `Hello, ${name}!`;
}

// 基本类型注解
const userName: string = "TypeScript";
const age: number = 5;
const isAwesome: boolean = true;

// 调用函数
console.log(greet(userName));
console.log(`TypeScript is ${age} years old and awesome: ${isAwesome}`);

// 编译和运行:
// npx tsc hello-world.ts
// node hello-world.js