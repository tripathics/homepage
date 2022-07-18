// scroll active toc
document.addEventListener('DOMContentLoaded', () => {
    let mainNavLinks = document.querySelectorAll('div.toc li a');
    
    window.addEventListener('scroll', e => {
        let fromTop = window.scrollY + 96;
    
        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);
    
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.parentElement.classList.add('current');
            } else {
                link.parentElement.classList.remove('current');
            }
        })
    });
})