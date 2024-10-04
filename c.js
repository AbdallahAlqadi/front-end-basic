document.getElementById('send-btn').addEventListener('click', async function() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');
    

    if (userInput) {
        // عرض رسالة المستخدم
        chatBox.insertAdjacentHTML('beforeend', `<div class="user-message">${userInput}</div>`);
        
        // مسح حقل الإدخال
        document.getElementById('user-input').value = '';

        // استجابة البوت باستخدام API
        const botResponse = await getBotResponse(userInput);
        chatBox.insertAdjacentHTML('beforeend', `<div class="bot-message">${botResponse}</div>`);
        
        // تمرير إلى أسفل المحادثة
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

// وظيفة لإرجاع استجابة البوت باستخدام OpenAI API
async function getBotResponse(input) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY' // استبدل YOUR_API_KEY بمفتاح API الخاص بك
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo", // أو أي نموذج آخر
            messages: [{ role: "user", content: input }]
        })
    });

    // التحقق من حالة الاستجابة
    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        return 'حدث خطأ أثناء الحصول على رد من البوت.';
    }

    const data = await response.json();
    return data.choices[0].message.content; // الحصول على الرد من API
}
