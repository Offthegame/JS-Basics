const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    // Date() Object 현재 날짜와 시간을 알려준다. .get(원하는 것) Method로 사용
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${
        seconds <10 ? `0${seconds}` : seconds}`;
    // mini if = `${ 조건 ? :아니라면}` | 대개는 string문에서 사용하는 조건문 같음
    // 패캠 파이썬에서 배웠었음
    
}

function init() {
    // getTime();
    // 함수 값을 갖고 보여주도록 함, 하지만 없어도 될 것 같지?
    setInterval(getTime, 1000);
    // setInterval(fn, 시간) 1/1000초로 반복한다
}

init();