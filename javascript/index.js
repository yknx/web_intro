function Color() {
    // 16진수 색상 코드를 생성한다.
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    // body 요소의 배경색을 변경한다.
    document.body.style.backgroundColor = hexColor;
}  
function Circle(canvasId, numCircles) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found.`);
        return;
    }
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    
    for(let i = 0; i < numCircles; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 50 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }
}