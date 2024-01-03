const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var btnSwitchMode = $('.switch-mode');
var checkDarkMode = false;
var body = document.body;

const app = {
    getLocalStorage: function(){
        var darkChecked = JSON.parse(localStorage.getItem('checked'));
        if (darkChecked) {
            this.enableDarkMode();
        }
    },
    enableDarkMode: function() {
        body.classList.add('dark-mode');
        btnSwitchMode.setAttribute('title', 'Switch to Light Mode');
        checkDarkMode = true;
        body.style.backgroundImage = 'url("./acssets/photo/dark-background.jpg")';
        body.style.backgroundSize = 'cover';
        body.style.transition = 'background-image 0.5s ease-in-out';
    },
    disableDarkMode: function() {
        body.classList.remove('dark-mode');
        btnSwitchMode.setAttribute('title', 'Switch to Dark Mode');
        checkDarkMode = false;
        body.style.backgroundImage = 'url("./acssets/photo/light-background.jpg")';
        body.style.backgroundSize = 'cover';
        body.style.transition = 'background-image 0.5s ease-in-out';
    },
    handleEvents: function(){
        btnSwitchMode.onclick = () =>{
            if(checkDarkMode){
                this.disableDarkMode();
                localStorage.setItem('checked', false);
            }
            else{
                this.enableDarkMode();
                localStorage.setItem('checked', true);
            }
        }
    },
    start : function(){
        this.getLocalStorage();
        this.handleEvents();
    }
}

app.start();
