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

// =========================================
// DXコスト削減シミュレーターのロジック
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // 要素の取得
    const inputEmployees = document.getElementById('input-employees');
    const inputMinutes = document.getElementById('input-minutes');
    const inputWage = document.getElementById('input-wage');

    const valEmployees = document.getElementById('val-employees');
    const valMinutes = document.getElementById('val-minutes');

    const resultMonthly = document.getElementById('result-monthly');
    const resultYearly = document.getElementById('result-yearly');

    // 計算関数
    function calculateSavings() {
        // 入力値の取得（数値に変換）
        const employees = parseInt(inputEmployees.value) || 0;
        const minutes = parseInt(inputMinutes.value) || 0;
        const wage = parseInt(inputWage.value) || 0;

        // スライダー横の数値を更新
        valEmployees.textContent = employees;
        valMinutes.textContent = minutes;

        // 計算ロジック（月20営業日と仮定）
        // (人数 * 1日の無駄時間(時間換算) * 時給) * 20日
        const monthlySaving = Math.round((employees * (minutes / 60) * wage) * 20);
        const yearlySaving = monthlySaving * 12;

        // 結果の表示（カンマ区切りで見やすく整形）
        resultMonthly.textContent = monthlySaving.toLocaleString();
        resultYearly.textContent = yearlySaving.toLocaleString();
    }

    // イベントリスナーの設定（入力が変化したら即座に再計算）
    inputEmployees.addEventListener('input', calculateSavings);
    inputMinutes.addEventListener('input', calculateSavings);
    inputWage.addEventListener('input', calculateSavings);

    // 初回計算実行
    calculateSavings();
});
