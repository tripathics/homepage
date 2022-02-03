var body = document.body;

function toggleMenu() {
    let navColapse = document.getElementById('nav-colapse');
    let navItems = document.getElementById('nav-items');
    navItems.classList.toggle('hidden');
    let btn = document.getElementById('menu-btn');

    if (navItems.className === 'hidden') {
        btn.innerHTML = `<svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"><title>Menu</title><path d="M10 80h80a5 5 0 000-10H10a5 5 0 000 10zm0-25h80a5 5 0 000-10H10a5 5 0 000 10zM5 25a5 5 0 005 5h80a5 5 0 000-10H10a5 5 0 00-5 5z" fill="currentColor"/></svg>`;
        navColapse.style.borderRadius = '0 0 0.5rem';
    } else {
        btn.innerHTML = `<svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"><title>Menu</title><g fill="currentColor"><path d="M61.92 48.25L86.06 23.3a2 2 0 012.92 0l5.4 5.59a2.18 2.18 0 010 3L77.11 49.76l17.28 17.86a2.18 2.18 0 010 3L89 76.22a2 2 0 01-2.92 0L61.92 51.28a2.18 2.18 0 010-3z"/><rect height="10" rx="4.25" width="67.74" x="5" y="20"/><rect height="10" rx="4.25" width="67.74" x="5" y="70"/><rect height="10" rx="3.59" width="48.39" x="5" y="45"/></g></svg>`;
        navColapse.style.borderRadius = '0';
    }
}