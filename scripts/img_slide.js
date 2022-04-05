const qtyOfImgs = 8; // 이미지 개수를 지정 (1 이상)
let count = 0; // 몇번째 슬라이드인지 체크하기 위한 변수 선언

// 이미지 개수에 따라 동적으로 슬라이드를 만들기 위해 DOMContentLoaded 이벤트 이후 콜백 함수 지정
document.addEventListener('DOMContentLoaded', function(){
    const div = document.querySelector('.slide_container');
    div.style.width = `${30*qtyOfImgs}vw`; // 슬라이드 컨테이너의 너비를 이미지 개수에 따라 동적으로 지정
    let inner;
    let myImg;
    for(let i = 0; i < qtyOfImgs; i++){ // 이미지 개수 만큼 반복문 시행
        inner = document.createElement('div'); // 이미지를 넣을 내부 컨테이너 생성
        inner.className = 'inner_slide_container';
        myImg = document.createElement('img'); // 이미지 태그 생성
        myImg.setAttribute('src', `images/slide_${i+1}.jpeg`); // 이미지 태그의 src 속성에 이미지 연결

        div.appendChild(inner); // 컨테이너에 생성한 내부 컨테이너 태그 삽입
        inner.appendChild(myImg); // 내부 컨테이너에 생성한 이미지 태그 삽입
    }
})

// 이미지를 슬라이드 시키는 함수. 현재 이미지 위치 좌표로 translate 할 수 있도록 count 변수를 활용.
const imgSlide = function(){
    document.querySelector('.slide_container').style.transform = `translate(${-30*count}vw)`
}

// 오른쪽 화살표 버튼이 눌렸을 때 시행할 코드 작성
document.querySelector('.rightbtn').addEventListener('click', function(){
    if(count + 1 < qtyOfImgs){ // 현재 이미지가 마지막 이미지 일때는 슬라이드가 되지 않도록 설정
        count++;
        imgSlide();
    }
})

// 왼쪽 화살표 버튼이 눌렸을 때 시행할 코드 작성
document.querySelector('.leftbtn').addEventListener('click', function(){
    if(count > 0 ){ // 현재 이미지가 처음 이미지 일때는 슬라이가 되지 않도록 설정
        count--;
        imgSlide();
    }
})