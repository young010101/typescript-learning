#!/bin/bash

# 简单的MySQL MCP查询脚本
QUERY="$1"

if [ -z "$QUERY" ]; then
    echo "Usage: $0 'SQL_QUERY'"
    exit 1
fi

# 构造MCP消息
MCP_MESSAGE="{\"jsonrpc\": \"2.0\", \"method\": \"tools/call\", \"params\": {\"name\": \"execute_query\", \"arguments\": {\"query\": \"$QUERY\"}}, \"id\": 1}"

# 发送到mysql-mcp-server
echo "$MCP_MESSAGE" | MYSQL_HOST=localhost MYSQL_USER=root MYSQL_DATABASE=tmp timeout 10s mysql-mcp-server 2>/dev/null | grep -o '"text":"[^"]*"' | sed 's/"text":"//g' | sed 's/"$//g' | sed 's/\\n/\n/g'