let imageLoaded = false; // 이미지가 로드되었는지 추적하는 플래그

document.getElementById('imageUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) {
        imageLoaded = false; // 파일이 선택되지 않았음
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            imageLoaded = true; // 이미지 로드 완료
            drawThumbnail(); // 이미지 로드 후 그리기 함수 호출
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
});

function drawThumbnail() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const bgColor = document.getElementById('backgroundColor').value;
    const txtColor = document.getElementById('textColor').value;
    const text1 = document.getElementById('sub-title').value;
    const text2 = document.getElementById('main-title').value;
    const emoji = document.getElementById('emoji').value;

    // 이미지가 로드되지 않았을 경우에만 배경색 설정
    if (!imageLoaded) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 텍스트 및 이모지 그리기
    ctx.font = '35px Arial';
    ctx.fillStyle = txtColor;
    ctx.textAlign = 'left';
    ctx.fillText(text1, 30, 60);

    ctx.font = '80px Arial';
    ctx.fillStyle = txtColor;
    ctx.textAlign = 'center';
    ctx.fillText(text2, canvas.width / 2, canvas.height / 2 + 40);

    ctx.font = '40px Arial';
    ctx.fillText(emoji, 20, canvas.height / 2);
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

