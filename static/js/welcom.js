function setTabPaggination(num = 1){
    let color = 'rgba(184, 128, 132, 0.20)';
    if(num === 2) color = "rgba(148, 190, 167, 0.40)";
    if(num === 3) color = "rgba(137, 187, 229, 0.20)";

    const tabsPagginations = document.querySelectorAll('.welcom__tabs');
    const containerTabs = document.querySelectorAll('.welcom__controller');

    const tabsPagginationHtml = `
        <span ${num === 1 ? 'class="active"' : ''}></span>
        <span ${num === 2 ? 'class="active"' : ''}></span>
        <span ${num === 3 ? 'class="active"' : ''}></span>
    `;

    tabsPagginations.forEach(item => {
        item.innerHTML = tabsPagginationHtml;
    });
    containerTabs.forEach(item => {
        item.style.background = color;
    });
}
const tabs = document.querySelectorAll('.welcom__item');
const tabsButtons = document.querySelectorAll('[data-change-tab]');
tabsButtons.forEach(tabBtn => {
    const targetTabNum = tabBtn.dataset.changeTab;
    tabBtn.addEventListener('click', () => {
        setTabPaggination(+targetTabNum);
        tabs.forEach((tab, index) => {
            if((index + 1) === +targetTabNum){
                tab.classList.add('active');
            }else{
                tab.classList.remove('active');
            }
        });
    });
});
tabs[0].classList.add('active');
setTabPaggination(1);