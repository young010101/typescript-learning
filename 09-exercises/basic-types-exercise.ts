// 🟢 基础类型练习题

// 练习 1: 变量类型注解
// 为以下变量添加正确的类型注解

// TODO: 添加类型注解
let studentName = "张三";
let studentAge = 20;
let isGraduated = false;
let hobbies = ["reading", "swimming", "coding"];

// 练习 2: 函数类型
// 完成以下函数的类型注解

// TODO: 添加参数和返回值类型
function calculateArea(width: number, height: number): number {
    return width * height;
}

// TODO: 添加参数和返回值类型
function greetStudent(name: string, age: number): string {
    return `Hello ${name}, you are ${age} years old`;
}

// 练习 3: 数组类型
// 创建不同类型的数组

// TODO: 创建一个数字数组
let scores;

// TODO: 创建一个字符串数组
let subjects;

// TODO: 创建一个布尔值数组
let passStatus;

// 练习 4: 元组类型
// 创建表示学生信息的元组

// TODO: 创建一个包含 [姓名, 年龄, 是否毕业] 的元组类型
let student1;

// 练习 5: 枚举类型
// 创建一个表示学期的枚举

// TODO: 创建 Semester 枚举，包含 Spring, Summer, Fall, Winter
enum Semester {
    // 在这里添加枚举值
}

// ========== 解答参考 ==========
// 取消注释查看解答

/*
// 解答 1:
let studentName: string = "张三";
let studentAge: number = 20;
let isGraduated: boolean = false;
let hobbies: string[] = ["reading", "swimming", "coding"];

// 解答 2:
function calculateArea(width: number, height: number): number {
    return width * height;
}

function greetStudent(name: string, age: number): string {
    return `Hello ${name}, you are ${age} years old`;
}

// 解答 3:
let scores: number[] = [85, 90, 78, 92];
let subjects: string[] = ["Math", "English", "Science"];
let passStatus: boolean[] = [true, true, false, true];

// 解答 4:
let student1: [string, number, boolean] = ["李四", 22, true];

// 解答 5:
enum Semester {
    Spring = "春季",
    Summer = "夏季", 
    Fall = "秋季",
    Winter = "冬季"
}
*/

// 测试你的答案
console.log("基础类型练习完成！");