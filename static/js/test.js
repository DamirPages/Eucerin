const testContainers = document.querySelectorAll('.test__container');
const rounds = document.querySelectorAll('.test__round');
const results = [];

testContainers.forEach((container, index) => {
    const checkboxs = container.querySelectorAll('input');
    const result = container.querySelector('.button-show-result');
    const next = container.querySelector('.next-question');
    checkboxs.forEach(input=>{
        input.addEventListener('change', ()=>{
            result.classList.remove('disabled');
        }, {once: true});
    });
    result.addEventListener('click', ()=>{
        results.push(showResults(container));
    });
    next.addEventListener('click', ()=>{
        testContainers.forEach(item => item.classList.remove('active'));
        testContainers[index + 1].classList.add('active');
        rounds.forEach(item => item.classList.remove('active'));
        rounds[index + 1].classList.add('active');
        document.querySelector('#current-test-answer').innerHTML = (index + 2);
        window.scrollTo(0, 0);
    });
});
function showResults(container){
    const correctAnswers = container.querySelectorAll('[data-corect="true"]');
    const checkedAnswers = container.querySelectorAll('input:checked');
    const resultYes = container.querySelector('.test__result-yes');
    const resultNo = container.querySelector('.test__result-no');
    const showButton = container.querySelector('.button-show-result');
    const nextQuest = container.querySelector('.next-question');
    container.querySelector('.test__answers').classList.add('disabled');
    let error = false;
    if(correctAnswers.length !== checkedAnswers.length){
        error = true;
    }
    checkedAnswers.forEach(item => {
        if(!item.dataset.corect) error = true;;
    });

    if(error){
        resultNo.classList.remove('hidden');
    }else{
        resultYes.classList.remove('hidden');
    }
    showButton.classList.add('hidden');
    nextQuest.classList.remove('hidden');
    return !error;
}