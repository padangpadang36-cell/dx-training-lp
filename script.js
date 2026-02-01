// 1. ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
    
    // --- モバイルメニューの制御 ---
    const mobileMenu = document.getElementById('mobile-menu');
    const openBtn = document.getElementById('open-menu');
    const closeBtn = document.getElementById('close-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (openBtn && mobileMenu) {
        openBtn.addEventListener('click', () => {
            mobileMenu.classList.replace('opacity-0', 'opacity-100');
            mobileMenu.classList.replace('pointer-events-none', 'pointer-events-auto');
        });
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.replace('opacity-100', 'opacity-0');
            mobileMenu.classList.replace('pointer-events-auto', 'pointer-events-none');
        });
    }

    // --- DXコスト削減シミュレーターのロジック ---
    const inputEmployees = document.getElementById('input-employees');
    const inputMinutes = document.getElementById('input-minutes');
    const inputWage = document.getElementById('input-wage');

    const valEmployees = document.getElementById('val-employees');
    const valMinutes = document.getElementById('val-minutes');
    const resultMonthly = document.getElementById('result-monthly');
    const resultYearly = document.getElementById('result-yearly');

    function calculateSavings() {
        if (!inputEmployees || !inputMinutes || !inputWage) return;

        const employees = parseInt(inputEmployees.value) || 0;
        const minutes = parseInt(inputMinutes.value) || 0;
        const wage = parseInt(inputWage.value) || 0;

        // 表示を更新
        valEmployees.textContent = employees;
        valMinutes.textContent = minutes;

        // 月20日稼働で計算
        const monthlySaving = Math.round((employees * (minutes / 60) * wage) * 20);
        const yearlySaving = monthlySaving * 12;

        // カンマ区切りで表示
        resultMonthly.textContent = monthlySaving.toLocaleString();
        resultYearly.textContent = yearlySaving.toLocaleString();
    }

    // 入力が変わるたびに計算を実行
    if (inputEmployees) inputEmployees.addEventListener('input', calculateSavings);
    if (inputMinutes) inputMinutes.addEventListener('input', calculateSavings);
    if (inputWage) inputWage.addEventListener('input', calculateSavings);

    // 初回計算
    calculateSavings();

    // --- スクロールアニメーション ---
    const scrollReveal = () => {
        const reveals = document.querySelectorAll('.scroll-reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', scrollReveal);
    scrollReveal();
});
