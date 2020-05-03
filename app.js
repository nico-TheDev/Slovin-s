let sampleSize,population,marginOfError,calcBtn;


calcBtn = document.getElementById('calculate');
let answer = document.querySelector('.answer');



calcBtn.addEventListener('click',function(){
    population = document.getElementById('population');
    marginOfError = document.getElementById('errors');


    answer.textContent = population.value /(1 + (population.value * marginOfError.value**2))


    marginOfError.value = '';
    population.value = '';
});