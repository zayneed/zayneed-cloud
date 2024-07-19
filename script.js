document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.getElementById('typing-text');
    const text = "Hi, I'm Zayneed";
    let index = 0;
    let typingSpeed = 3500 / text.length;
    let deletingSpeed = 1000 / text.length;
    const blinkingCursor = document.querySelector('.typewriter::after');

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




    function copyEmail() {
        const emailText = document.getElementById("email").innerText;
        navigator.clipboard.writeText(emailText).then(() => {
            const notification = document.getElementById("notification");
            notification.style.display = "block";
            setTimeout(() => {
                notification.style.display = "none";
            }, 2000);
        }).catch(err => {
            console.error('Fehler beim Kopieren der E-Mail-Adresse: ', err);
        });
    }






    function setColumnPercentage(columnId, percentage) {
        var column = document.getElementById(columnId);
        column.style.height = percentage + '%';
    }
    
    setColumnPercentage('column1', 30);
    setColumnPercentage('column2', 25);
    setColumnPercentage('column3', 45);
    setColumnPercentage('column4', 70);
    setColumnPercentage('column5', 110);
    