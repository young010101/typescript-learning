# TypeScript 学习仓库

这是一个系统化的 TypeScript 学习仓库，按照从基础到高级的顺序组织内容。

## 目录结构

```
typescript-learning/
├── 01-basics/           # 基础语法
├── 02-types/            # 类型系统
├── 03-functions/        # 函数
├── 04-objects/          # 对象和接口
├── 05-classes/          # 类
├── 06-generics/         # 泛型
├── 07-modules/          # 模块系统
├── 08-advanced/         # 高级特性
├── 09-exercises/        # 练习题
├── 10-projects/         # 实战项目
└── docs/               # 学习笔记和参考
```

## 学习路径

1. **基础阶段**: 01-basics → 02-types → 03-functions
2. **进阶阶段**: 04-objects → 05-classes → 06-generics
3. **高级阶段**: 07-modules → 08-advanced
4. **实践阶段**: 09-exercises → 10-projects

## 使用方法

```bash
# 编译单个文件
npx tsc filename.ts

# 监听模式编译
npx tsc --watch

# 运行编译后的 JS 文件
node filename.js

# 直接运行 TS 文件 (需要 ts-node)
npx ts-node filename.ts
```

## 快速开始

```bash
npm install
npm run build
npm test
```