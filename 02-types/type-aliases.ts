// 类型别名 (Type Aliases)

// 1. 基本类型别名
type UserID = string;
type Score = number;
type IsActive = boolean;

// 使用类型别名
let userId: UserID = "user_123";
let gameScore: Score = 2550;
let userActive: IsActive = true;

// 2. 对象类型别名
type User = {
    id: UserID;
    name: string;
    email: string;
    age: number;
    isActive: IsActive;
};

// 使用对象类型别名
const user: User = {
    id: "user_456",
    name: "Alice",
    email: "alice@example.com",
    age: 28,
    isActive: true
};

// 3. 函数类型别名
type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

// 4. 数组类型别名
type StringArray = string[];
type NumberList = Array<number>;

const fruits: StringArray = ["apple", "banana", "orange"];
const numbers: NumberList = [1, 2, 3, 4, 5];

// 5. 复杂嵌套类型别名
type Address = {
    street: string;
    city: string;
    country: string;
    zipCode: string;
};

type Company = {
    name: string;
    address: Address;
    employees: User[];
};

const company: Company = {
    name: "Tech Corp",
    address: {
        street: "123 Tech Street",
        city: "San Francisco",
        country: "USA",
        zipCode: "94105"
    },
    employees: [user]
};

// 6. 联合类型别名
type Status = "pending" | "approved" | "rejected";
type ID = string | number;

let currentStatus: Status = "pending";
let itemId: ID = "item_123";

console.log("类型别名示例:", {
    user,
    company,
    currentStatus,
    fruits
});