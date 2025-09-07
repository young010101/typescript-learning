# TypeScript 快速参考

## 🔤 基本类型

```typescript
// 基础类型
let name: string = "TypeScript";
let age: number = 5;
let isActive: boolean = true;

// 数组
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana"];

// 元组
let user: [string, number] = ["Alice", 30];

// 枚举
enum Color { Red, Green, Blue }
let c: Color = Color.Red;

// 任意类型
let data: any = "anything";

// 联合类型
let id: string | number = "123";
```

## 🎯 函数

```typescript
// 基本函数
function add(x: number, y: number): number {
    return x + y;
}

// 箭头函数
const multiply = (x: number, y: number): number => x * y;

// 可选参数
function greet(name: string, title?: string): string {
    return title ? `${title} ${name}` : name;
}

// 默认参数
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

// 剩余参数
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}
```

## 🏗️ 接口

```typescript
// 基本接口
interface User {
    name: string;
    age: number;
    email?: string;        // 可选属性
    readonly id: string;   // 只读属性
}

// 函数接口
interface MathFunc {
    (x: number, y: number): number;
}

// 可索引接口
interface StringArray {
    [index: number]: string;
}

// 接口继承
interface Employee extends User {
    department: string;
    salary: number;
}
```

## 🎭 类

```typescript
// 基本类
class Animal {
    private name: string;
    protected species: string;
    public age: number;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    public getName(): string {
        return this.name;
    }
}

// 继承
class Dog extends Animal {
    constructor(name: string) {
        super(name, "Canine");
    }

    bark(): void {
        console.log("Woof!");
    }
}

// 抽象类
abstract class Shape {
    abstract getArea(): number;
}
```

## 🔧 泛型

```typescript
// 泛型函数
function identity<T>(arg: T): T {
    return arg;
}

// 泛型接口
interface Container<T> {
    value: T;
}

// 泛型类
class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
}

// 泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

## 🛠️ 高级类型

```typescript
// 类型别名
type ID = string | number;
type User = {
    id: ID;
    name: string;
};

// 条件类型
type ApiResponse<T> = T extends string ? string : number;

// 映射类型
type Partial<T> = {
    [P in keyof T]?: T[P];
};

// 工具类型
type UserUpdate = Partial<User>;           // 所有属性可选
type UserPick = Pick<User, "id" | "name">; // 选择特定属性
type UserOmit = Omit<User, "id">;          // 排除特定属性
```

## 🔍 类型守卫

```typescript
// typeof 守卫
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}

// instanceof 守卫
class Bird {
    fly() { console.log("flying"); }
}
class Fish {
    swim() { console.log("swimming"); }
}

function move(pet: Bird | Fish) {
    if (pet instanceof Bird) {
        pet.fly();
    } else {
        pet.swim();
    }
}

// 自定义类型守卫
function isBird(pet: Bird | Fish): pet is Bird {
    return (pet as Bird).fly !== undefined;
}
```

## 📦 模块

```typescript
// 导出
export interface User {
    name: string;
}

export default class UserService {
    getUser(): User {
        return { name: "Alice" };
    }
}

// 导入
import UserService, { User } from "./userService";
import * as Utils from "./utils";
```

## ⚙️ 配置文件

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## 🚀 常用命令

```bash
# 编译单个文件
tsc filename.ts

# 编译整个项目
tsc

# 监听模式
tsc --watch

# 直接运行 TS 文件
npx ts-node filename.ts

# 初始化 tsconfig.json
tsc --init
```