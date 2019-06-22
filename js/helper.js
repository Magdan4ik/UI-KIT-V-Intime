//Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Breakpoints
document.querySelectorAll('.uk-header__breakpoint-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.uk-wrapper').style.width = link.dataset.size;
    });
});

//Aside links
document.querySelectorAll('.uk-aside__list-item a').forEach(link => {
    link.addEventListener('click', e => {
        document.querySelectorAll('.uk-aside__list-item a').forEach(link => link.classList.remove('active'));
        e.preventDefault();
        link.classList.add('active');
    });
});
