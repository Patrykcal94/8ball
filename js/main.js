const img = document.querySelector('img');
const inputText = document.querySelector('input');
const answerText = document.querySelector('.answer');
const errorText = document.querySelector('.error');

const randomAns = ['Tak.', 'Nie.', 'Może...', 'Nie chcesz wiedzieć.', 'Wkrótce poznasz prawdę...', 'Nie chcę mi się z Tobą gadać...', 'Spytaj kolegi.', 'Koleżanka Ci powie...', 'Pal gumę, nie powiem Ci!', 'Tylko wtedy, gdy pada deszcz.'];


const ballAnimate = () => {
    img.classList.add('shake-animation');
    if (inputText.value === '') {
        errorText.textContent = '';
        setTimeout(() => errorText.textContent = 'Musisz zadać pytanie!', 1500);
        setTimeout(() => img.classList.remove('shake-animation'), 1500);
        return;
    }
    if (inputText.value.slice(-1) !== '?') {
        setTimeout(() => img.classList.remove('shake-animation'), 1500);
        setTimeout(() => errorText.textContent = 'Brakuje pytania! Kto tu zapomniał o "?"', 1500);
        return;
    }

    if (inputText.value !== '' && inputText.value.slice(-1) === '?') {
        errorText.textContent = '';
        setTimeout(() => img.classList.remove('shake-animation'), 1500);
        randomAnswer();
    }
};

const randomAnswer = () => {
    const randomAnswers = Math.floor(Math.random() * randomAns.length);
    setTimeout(() => answerText.innerHTML = `<span>Odpowiedź:</span> ${randomAns[randomAnswers]}`, 1500);
};

img.addEventListener('click', ballAnimate);