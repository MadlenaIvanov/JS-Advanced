function e(type, content) {
    const result = document.createElement(type);

    if (typeof content == 'string') {
        result.textContent = content;
    } else {
        result.appendChild(content);
    }
    
     return result;
}