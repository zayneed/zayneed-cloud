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

    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the element is visible

    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        observer.observe(project);
    });
});








document.addEventListener("DOMContentLoaded", function() {
    const aboutMeSection = document.getElementById('about-me');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(aboutMeSection)) {
            aboutMeSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
});
