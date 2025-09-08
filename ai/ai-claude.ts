async function main() {
    const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer sk-9bb987192a624d20b71705b248b57f49',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "qwen-plus",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant."
                },
                {
                    role: "user",
                    content: "蓝天立"
                }
            ],
            stream: true
        })
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let result = '';

    if (reader) {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            result += decoder.decode(value, { stream: true });
        }
        console.log(result);
    } else {
        console.error('No response body');
    }
}

main().catch(console.error);