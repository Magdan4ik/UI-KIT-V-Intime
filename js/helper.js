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
document.querySelectorAll('.ukit-header__breakpoint-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.ukit-wrapper').style.width = link.dataset.size;
    });
});

//Aside links
document.querySelectorAll('.ukit-aside__list-item a').forEach(link => {
    link.addEventListener('click', e => {
        document.querySelectorAll('.ukit-aside__list-item a').forEach(link => link.classList.remove('active'));
        e.preventDefault();
        link.classList.add('active');
    });
});
