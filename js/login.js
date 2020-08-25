// imgslide show
const articleImg = document.querySelectorAll('.image__slide');
let slideIndex = 0;
function slideShow() {

    for (let i = 0; i < articleImg.length; i++) {
        articleImg[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > articleImg.length) { slideIndex = 1 }

    articleImg[slideIndex - 1].style.opacity = 1;
    setTimeout(slideShow, 3000);
}

slideShow();

// button active
const loginBtn = document.querySelector('button.login__button'),
    loginId = document.querySelector('.loginform__input__id'),
    loginPassword = document.querySelector('.loginform__input__password');


const passwordLength = loginPassword.value.length;
loginId.addEventListener('keyup', e => {
    console.log(loginId.value.length);
    console.log(passwordLength);
    activeButton();
    if (loginId.value.length >= 1 && loginPassword.value.length >= 6 && e.code ===
        "Enter") {
        loginBtn.style.opacity = 1;
    }
});

loginPassword.addEventListener('keyup', e => {
    activeButton();
})


// 로그인 버튼 활성화 함수 패스워드 문자 6개 이상 && 아이디 문자 1개 이상
// ++ 비활성화도 포함 ++ 마우스 커서  
function activeButton() {
    if (loginId.value.length >= 1 && loginPassword.value.length >= 6) {
        loginBtn.style.opacity = 1;
        loginBtn.classList.add('btnActive');
    }
    if (!(loginId.value.length >= 1 && loginPassword.value.length >= 6)) {
        loginBtn.style.opacity = 0.3;
        loginBtn.classList.remove('btnActive');

    }
}
