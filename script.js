function drawThumbnail() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const bgColor = document.getElementById('backgroundColor').value;
    const txtColor = document.getElementById('textColor').value;
    const text1 = document.getElementById('sub-title').value;
    const text2 = document.getElementById('main-title').value;
    const emoji = document.getElementById('emoji').value;

    // Set background color
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw sub-title text at the top left
    ctx.font = '40px Arial';
    ctx.fillStyle = txtColor;
    ctx.textAlign = 'left';
    ctx.fillText(text1, 20, 50); // Adjusted position to 20 pixels from left, 50 pixels from top

    // Draw main-title text centered
    ctx.font = '80px Arial';
    ctx.fillStyle = txtColor;
    ctx.textAlign = 'center';
    ctx.fillText(text2, canvas.width / 2, canvas.height / 2 + 20); // Centered horizontally, adjust vertically as needed

    // Draw emoji at the left middle
    ctx.font = '80px Arial';  // Adjust the emoji size if needed
    ctx.fillText(emoji, 40, canvas.height / 2+20);  // Position emoji on the left, halfway down the canvas
}


document.addEventListener('DOMContentLoaded', function() {
    const backgroundColorInput = document.getElementById('backgroundColor');
    const textColorInput = document.getElementById('textColor');

    // 배경 색상 선택 시 input 요소의 배경색 변경
    backgroundColorInput.addEventListener('input', function() {
        backgroundColorInput.style.backgroundColor = backgroundColorInput.value;
    });

    // 텍스트 색상 선택 시 input 요소의 배경색 변경
    textColorInput.addEventListener('input', function() {
        textColorInput.style.backgroundColor = textColorInput.value;
    });
});

document.getElementById('download').addEventListener('click', function() {
    const canvas = document.getElementById('canvas');
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');  // 이미지 형식으로 변환
    const link = document.createElement('a');
    link.download = 'thumbnail.png';  // 다운로드할 파일의 이름 설정
    link.href = image;
    link.click();  // 링크를 통해 다운로드 실행
});

