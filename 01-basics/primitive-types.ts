// TypeScript 基本数据类型

// 1. 数字类型 (number)
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// 2. 字符串类型 (string)
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${fullName}`;

// 3. 布尔类型 (boolean)
let isDone: boolean = false;
let isSuccess: boolean = true;

// 4. 数组类型
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let stringArray: string[] = ["a", "b", "c"];

// 5. 元组类型 (Tuple)
let x: [string, number];
x = ["hello", 10]; // 正确
// x = [10, "hello"]; // 错误，类型顺序不匹配

// 6. 枚举类型 (enum)
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;

// 手动设置枚举值
enum Status {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}

// 字符串枚举
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// 7. void 类型 (通常用于函数无返回值)
function warnUser(): void {
    console.log("This is my warning message");
}

// 8. null 和 undefined
let u: undefined = undefined;
let n: null = null;

// 9. never 类型 (永不返回的函数)
function error(message: string): never {
    throw new Error(message);
}

// 10. object 类型
let obj: object = { name: "TypeScript" };

console.log("基本类型示例:", {
    decimal,
    color,
    isDone,
    list1,
    x,
    c,
    direction: Direction.Up
});