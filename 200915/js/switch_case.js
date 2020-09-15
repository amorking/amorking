let myArea = prompt('지역을 입력하세요', '서울');

switch (myArea) {
    case "서울": //myArea=서울 > 실행문 1
        areaNum = "02";
        break;
    case "경기": //실행문 2
        areaNum = "031"
        break;
    case "부산": //실행문 3
        areaNum = "051"
        break;
    default: //위에 해당되지 않는 경우 > 실행문 4
        alert('등록되지 않은 지역입니다.');
};

console.log(`${myArea} 지역 번호는 ${areaNum}입니다.`);