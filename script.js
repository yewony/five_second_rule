const words = [
    "과일", "가방 종류", "치마 종류", "동물 소리", "자동차 브랜드",
    "색깔", "계절", "스포츠 종목", "학교 과목", "음식 종류",
    "국가", "유명 영화", "직업", "외국어", "음악 장르",
    "도시 이름", "명절", "과일 이름", "악기", "유명 유명인",
    "컴퓨터 부품", "가전제품", "영어 단어", "음식 재료", "동물 종",
    "명사", "옷 종류", "가족 구성원", "식물 종류", "곤충 종류",
    "교통 수단", "지리적 지형", "수행하는 일", "알파벳", "음료 종류",
    "연예인 이름", "유명 건물", "설명 가능한 단어", "휴가 지역", "학교 시설",
    "음식 종류", "학교 용품", "동물 분류", "선물", "계절 이름",
    "과학 분야", "자연 현상", "체육 활동", "취미", "날씨 조건",
    "바다 생물", "화장품", "도서관 물건", "요리 방식", "영화 제목",
    "대륙 이름", "매운 음식", "아이스크림 맛", "과일 이름", "학교 시간",
    "주차장 물건", "헤어스타일", "무서운 것", "의료 용어", "인사말",
    "포장재료", "안전 용품", "장소", "가격표", "숫자",
    "외국 요리", "건축 양식", "공항 물건", "휴일", "전쟁",
    "유명 지명", "정치인", "유명화가", "유명 시인", "유명 소설",
    "예능 프로그램", "드라마", "애니메이션", "음식 종류", "문구 제품"
];

const timerElement = document.getElementById('timer');
const wordElement = document.getElementById('word');
const passButton = document.getElementById('passButton');

let currentIndex = 0;
let countdown = 5;

function updateWord() {
    wordElement.textContent = words[currentIndex];
}

let interval; // Declare the interval variable globally

function startTimer() {
    countdown = 5;
    updateTimer();

    clearInterval(interval); // Clear the existing interval

    interval = setInterval(() => {
        countdown--;
        updateTimer();

        if (countdown === 0) {
            clearInterval(interval);
            currentIndex = (currentIndex + 1) % words.length;
            updateWord();
            startTimer();
        }
    }, 1000);
}
function updateTimer() {
    timerElement.textContent = countdown;
}


passButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % words.length;
    updateWord();
    clearInterval(interval); // Clear the existing interval
    startTimer();
});

updateWord();
startTimer();
