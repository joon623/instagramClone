const minutes = document.querySelector('div.feed__minutes');
// console.log(minutes);
minutes.classList.add('feed__minute');

minutes.innerHTML = `<div>42분 전</div>`;

const comment = document.querySelector('.feed__button > input'),
    button = document.querySelector('.feed__button>button'),
    feedComments = document.querySelector('.feed__comments'),
    myId = document.querySelector('div.profile__id>div:first-child').innerHTML;

// 댓글 버튼 불
comment.addEventListener("keyup", (e) => {
    let comment_letter = comment.value;
    if (comment_letter.length >= 1) {
        button.style.opacity = 1;
        button.style.fontWeight = 600;
    }
    if (comment_letter.length === 0) {
        button.style.opacity = 0.3;
    }

});

// 클릭으로 댓글 입력하기
button.addEventListener('click', addComment);

// 엔터로 댓글 입력하기
comment.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        addComment();
    }
})

// 댓글 추가하기 
function addComment() {
    let comment_letter = comment.value;
    let reply = document.createElement('div');
    reply.classList.add('feed__comment');
    let replySpan = document.createElement('span');

    replySpan.innerHTML = `<Span style="font-size: 16px; font-weight: 600;">${myId}</span> ${comment_letter}`;
    reply.appendChild(replySpan);
    if (!(comment_letter.length === 0)) {
        feedComments.appendChild(reply);

    }
    comment.value = "";
    comment.focus();
}


// 아이디 로고 박스
const clickBox = document.querySelector('.ClickBox'),
    profileImg = document.querySelector('.nav__icon>a:nth-child(5)');

profileImg.addEventListener('click', e => {
    e.preventDefault();
    idClick();
});
// document.addEventListener('click', e => {
//     clickBox.classList.remove('ClickBoxActive');
// })

function idClick() {
    if (clickBox.classList[1] === undefined) {
        clickBox.classList.add('ClickBoxActive');
    } else if (clickBox.classList[1] === 'ClickBoxActive') {
        clickBox.classList.remove('ClickBoxActive');
    }
}