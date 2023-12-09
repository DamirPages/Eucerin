const modules = document.querySelectorAll('.module__container');
let currentModul = 0;
modules.forEach(modul => {
    const nextBtn = modul.querySelector('.next') || null;
    const prevBtn = modul.querySelector('.back') || null;
    nextBtn?.addEventListener('click', () => {
        currentModul++;
        modules.forEach(modul=>modul.classList.remove('active'));
        modules[currentModul].classList.add('active');
        window.scrollTo(0, 0);
    });
    prevBtn?.addEventListener('click', () => {
        currentModul--;
        modules.forEach(modul=>modul.classList.remove('active'));
        modules[currentModul].classList.add('active');
        window.scrollTo(0, 0);
    });
})