function drawThumbnail() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const bgColor = document.getElementById('backgroundColor').value;
    const txtColor = document.getElementById('textColor').value;
    const text = document.getElementById('text').value;
    const emoji = document.getElementById('emoji').value;

    // Set background color
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text color and draw text
    ctx.font = '30px Arial';
    ctx.fillStyle = txtColor;  // Apply text color from txtColor
    ctx.fillText(text, canvas.width / 3, 100);

    // Set text color for emoji and draw emoji
    ctx.fillText(emoji, 20, 100);
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

