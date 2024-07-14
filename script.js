document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.getElementById('typing-text');
    const text = "Hi, I'm Zayneed";
    let index = 0;
    let typingSpeed = 2000 / text.length;
    let deletingSpeed = 1000 / text.length;
    const blinkingCursor = document.querySelector('.blinking-cursor');

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                blinkingCursor.style.display = 'none';
                setTimeout(erase, 4000);
            }, 4000);
        }
    }

    function erase() {
        blinkingCursor.style.display = 'inline';
        if (index > 0) {
            typingText.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(erase, deletingSpeed);
        } else {
            setTimeout(type, 1000);
        }
    }

    setTimeout(type, 1000);
});

document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
