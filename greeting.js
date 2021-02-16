const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    NGImg = document.querySelector(".NGImg");
/*
# 03 Saving the User Name Part One
querySelector에 대한 설명, getElementById 등등 비교.(마우스 오버 참고)
Document method querySelector() returns the first Element within the document that matches the specified selector
!= 'querySelectorAll' returns a static (not live) NodeList representing a list of the document's elements


우선, 함수 init()을 저의하고 설정한 이후, 필요한 Obj를 정의한다.

localStorage에서 정보를 저장하고 가져오는 법을 배움
localStorage.setItem(Key, Value);
localStorage.getItem(Key);
값이 없다면 null

가장 먼저 loadName()함수를 만들고 이를 init()함수에 넣는다.
우선 함수 위에 'currentUser'라는 KEY값을 USER_LS로 정의
const USER_LS = "currentUser"

함수 안에 currentUser 변수를 localStorage.getItem으로 가져옴 
    const currentUser = localStorage.getItem(USER_LS);

안에 값이 없으면 if(currentUser === null) 부분을 일단 비워두고
값이 있을 경우(else)를 생각,
우선 greeting과 form(.input)부분을 가려둘 것
html에 <h4 class="js-greeting greeting"></h4>태그 생성
html에서 class를 정의하고 css파일에서 display: none; 처리

그리고 css에서 class하나를 미리 만들어 두는데 이름은 showing!
.showing {
    display: block;
}

이제 paintGreeting(text)을 만들 것!
(text)가 있는 이유는 표현할 USER 이름이 필요함
loadName()의 currentUser안에 값이 있을 경우 <h4>태그에 글을 쓸 것

우선 <h4> 태그가 보이도록 하는 동시에 form (input)이 사라지도록 함.
const SHOWING_CN = "showing";

이를 위해 greeting Obj를 queryselector로 연결
const greeting = document.querySelector(".js-greeting");

greeting.classList.add(SHOWING_CN); | <h4> 태그를 보여지도록 하고 
form.classList.remove(SHOWING_CN); | display: none;이지만 향후 showing이 돼있을 예정이라 미리 지워둠

greeting.innerText = `Hello, &{USER_LS}!` | <h4> 태그 안에 글이 보이도록 함

*/
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}!`;
    NGImg.src = "images/studying.gif";
    
}

function loadName(){
    const currentUser =localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}




function init() {
    loadName();
}

init();