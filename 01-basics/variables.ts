// 变量声明和类型注解

// 1. 显式类型注解
let userName: string = "Alice";
let userAge: number = 30;
let isActive: boolean = true;

// 2. 类型推断 - TypeScript 自动推断类型
let cityName = "Beijing";  // 推断为 string
let population = 21540000; // 推断为 number
let isCapital = true;      // 推断为 boolean

// 3. const 声明
const PI: number = 3.14159;
const COMPANY_NAME = "TypeScript Corp"; // 推断为字面量类型

// 4. 多种声明方式
var oldStyle: string = "不推荐使用 var";
let modernStyle: string = "推荐使用 let";
const constantValue: string = "使用 const 声明常量";

// 5. 数组声明
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

// 6. 任意类型 (不推荐过度使用)
let anything: any = "可以是任何类型";
anything = 42;
anything = true;

console.log("变量示例:", {
    userName,
    userAge,
    isActive,
    cityName,
    population,
    numbers,
    names
});