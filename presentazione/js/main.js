let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function () {
    document.body.classList.toggle('menu-open');
});

document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.header ul li a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// elements
const elementsToWatch = document.querySelectorAll('.watch');
const textElementsToWatch = document.querySelectorAll('.watch-text');

const callbackWatch = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-page");
        } else {
            entry.target.classList.remove("in-page");
        }
    });
};

const observerWatch = new IntersectionObserver(callbackWatch, { threshold: 0.6 });
elementsToWatch.forEach((element) => observerWatch.observe(element));



