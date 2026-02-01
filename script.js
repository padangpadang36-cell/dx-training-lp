// モバイルメニューの制御
const mobileMenu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const menuLinks = document.querySelectorAll('.menu-link');

function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('opacity-100');
    if (isOpen) {
        mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    } else {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
    }
}

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(link => link.addEventListener('click', toggleMenu));

// スクロール時に要素をふわっと表示させる（スクロールレベール）
function scrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// 初期化
window.addEventListener('scroll', scrollReveal);
// 最初から見えているものに対応
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(el => el.classList.add('reveal')); // CSSクラスを追加
    scrollReveal();
});
