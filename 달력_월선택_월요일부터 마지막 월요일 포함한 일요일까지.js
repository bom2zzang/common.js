/*
월 달력 선택 ('2020-05')
해당월의 첫번째 월요일 부터 마지막 월요일과 연결된 일요일까지 
변수에 담기. 
*/

//시작일자 구하기
var applyMonth = '2020-05';

var applyFrom = new Date(applyMonth + "-01");
var aFDay = applyFrom.getDay();

while(aFDay!=1){
        applyFrom.setDate(applyFrom.getDate()+1);
        aFDay = applyFrom.getDay(); //console.log(aFDay);
}
console.log(applyFrom);

//종료일자 구하기
applyTo = new Date(applyMonth.split('-')[0],applyMonth.split('-')[1],0);
var aTDay = applyTo.getDay();

while(aTDay!=0){
        applyTo.setDate(applyTo.getDate()+1);
        aTDay = applyTo.getDay(); //console.log(aTDay);
}
console.log(applyTo);
