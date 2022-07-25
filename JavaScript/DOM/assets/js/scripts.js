function changeMode() {
    changeClasses();
    changeText();
}

const BUTTON = document.getElementById('mode-selector');
const H1 = document.getElementsByClassName('page-title')[0];
const FOOTER = document.getElementsByTagName('footer')[0];
const BODY = document.getElementsByTagName('body')[0];
const DARK_MODE_CLASS = 'dark-mode';

BUTTON.addEventListener('click', changeMode);


function changeClasses() {
    BUTTON.classList.toggle(DARK_MODE_CLASS);
    FOOTER.classList.toggle(DARK_MODE_CLASS);
    BODY.classList.toggle(DARK_MODE_CLASS);
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(BODY.classList.contains(DARK_MODE_CLASS)) {
        BUTTON.innerHTML = lightMode;
        H1.innerHTML = darkMode + ' ON';
        return;
    }
    BUTTON.innerHTML = darkMode;
    H1.innerHTML = lightMode + ' ON';
}
