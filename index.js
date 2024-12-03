const number = 15;
if (Number.isInteger(number) === false) {
    console.log("Nan - Not a Number! Please Input Number");
}
else if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
}
else if (number % 3 === 0) {
    console.log("Fizz");
}
else if (number % 5 === 0) {
    console.log("Buzz");
}
else {
    console.log("given input number/value");
}

const number1 = -5;
const number2 = -2;
const number3 = -6;
const number4 = 0;
const number5 = -1;
if (number1 > number2 && number1 > number3 && number1 > number4 && number1 > number5) {
    console.log(number1)
}
else if (number2 > number3 && number2 > number4 && number2 > number5) {
    console.log(number2)
}
else if (number3 > number4&& number3 > number5) {
    console.log(number3)
}
else if (number4> number5) {
    console.log(number4)
}
else {
    console.log(number5)
}

//exercise3
const num1 = 2;
const num2 = 5;
if (typeof num1 === Number || Number.isInteger(num2) == false) {
    console.log("invalid value");
}
else if (num1 > num2) {
    console.log(num1);
} else if (num1 < num2) {
    console.log(num2);
}
else {
    console.log(num1);
}

//exercise4
const example1=3;
const example2=-7;
const example3=2;
if(example1+example2+example3<0){
console.log("The sign is -");
}
else{
console.log("The sign is +");
}

//exercise5
const X=5;
const y=4;
if(X>y){
    console.log("true");
}
else if(X===y){
    console.log("false");
}
else{
    console.log("not sure");
}

//exercise6
const studentName1='Bat'
const grade1=67;
const studentName2='Onts'
const grade2=59;
if (grade1>100||grade1<0){
    console.log("invalid value");
}
if(grade1>=90&&grade1<=100){
    console.log(studentName1,"A Маш сайн");
}
else if(grade1<=89&&grade1>=80){
    console.log(studentName1, "B Сайн");
}
else if(grade1<=79&&grade1>=70){
    console.log(studentName1 ,"C Дунд");
}
else if(grade1<=69&&grade1>=60){
    console.log(studentName1,"D Хангалттай");
}
else {
    console.log(studentName1,"F Маш муу");
}

//exercise7
const crewStatus=true;
if(crewStatus==true){
    console.log("Crew Ready");
}
else{
    console.log("Crew Not Ready");
}

const computerStatusCode=200;
if(computerStatusCode==200){
    console.log("Please stand by. Computer is rebooting.");
}
else if(computerStatusCode==400){
    console.log("Success! Computer online.");
}
else{
    console.log("ALERT: Computer offline!");
}

const shuttleSpeed=17500;
if(shuttleSpeed>17500){
    console.log("ALERT: Escape velocity reached!");
}
else if(shuttleSpeed<8000){
    console.log("ALERT: Cannot maintain orbit!");
}
else{
    console.log("Stable speed");
}

const checkNum=3;
if(checkNum%2==0){
    console.log("even number" ,checkNum);
}
else{
    console.log("odd number" , checkNum);
}

//exercise8
const role="";
if(role==="Employee"||role==="employee"){
    console.log('hello');
}
else if(role==="Director"||role==="director"){
    console.log('Greetings');
}
else if(role===''||role===' '){
    console.log('Please provide role');
}
else{
    console.log('Hi');
}

let cost=40000;
if(cost<0){
    console.log('invalid value');
}
else if(cost>=5000&&cost<=30000){
    cost+=cost*0.15;
    console.log('cost=',cost);
}
else{
    cost+=cost*0.2;
    console.log('cost=',cost);
}

//exercise10
const string1="dfia";
if(string1.length<=0){
    console.log("nothing");
}
else if(string1.length>=10){
    console.log("the string  has more than 10 characters");
}
else if(string1.length>=5){
    console.log("the string  has more than 10 characters");
}
else if(string1.length==1){
    console.log("the string has 1 character");
}
else{
    console.log(string1.length);
}


//exercise1
let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3;//true
let iv = 4 <= 3;//false
let v = 4 == 4;//true
let vi = 4 === 4;//true
let vii = 4 != 4;//false
let iix = 4 !== 4;//false
let ix = 4 != "4";//false
let x = 4 == "4";//true
let xi = 4 === "4";//false
console.log(i,iii,ii,iv,v,vi,vii,iix,ix,x,xi);

//exercise2
let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12;//false
let three = 4 > 3 || 10 < 12;//true
let four = 4 > 3 || 10 > 12;//true
let five = !(4 > 3);//false
let six = !(4 < 3);//true
let eight = !(4 > 3 && 10 < 12);//false
let nine = !(4 > 3 && 10 > 12);//true
let ten = !(4 === "4");//true
console.log(one,two,three,four,five,six,eight,nine,ten);

//exercise3
const year=2001;
if(year%4===0){
    console.log('өндөр жил ');
}
else if(year%100!==0&&year%400===0){
    console.log('өндөр жил');
}
else{
    console.log('өндөр жил биш');
}

//exercise4 Гараас утасны дугаар ( 99001234 )
const phoneNum=99001234;
const first2Num=parseInt(phoneNum/1000000);
const numLength=(phoneNum.toString()).length;
if(typeof phoneNum !=="number"){
    console.log('invalid value');
}
else if(numLength!==8){
    console.log('invalid value0',numLength);
}
else if(first2Num==86||first2Num==88||first2Num==80||first2Num==89){
    console.log('Unitel');
}
else if(first2Num==96||first2Num==90||first2Num==91||first2Num==92){
    console.log('Skytel');
}
else if(first2Num==93||first2Num==97||first2Num==98){
    console.log('G-Mobile');
}
else if(first2Num==95||first2Num==94||first2Num==99||first2Num==85){
    console.log('Mobicom');
}
else{
    console.log('wrong number');
}

//exercise6 Тэгш өнцөгт гурвалжин
const talA=3;
const talB=-4;
if(talA>0&&talB>0){
    const talC=Math.sqrt(Math.pow(talA,2)+Math.pow(talB,2));
    console.log("налуугийн урт",talC);
}
else{
    console.log("invalid value");
}

//exercise9
const myAge=prompt("Насаа оруулна уу:","");
const yourAge=prompt("Насаа оруулна уу:","");
if(myAge===yourAge){
    console.log("chatsuu");
}
else if(myAge>yourAge){
    console.log("chi");
}
else{
    console.log("ta");
}

//exercise10
const huvisagch1=120;
const huvisagch2=33;
const huvisagch3=10;
const huvisagch4=12;
if (huvisagch1 < huvisagch2 && huvisagch1 < huvisagch3 && huvisagch1 < huvisagch4) {
    console.log(huvisagch1)
}
else if (huvisagch2 < huvisagch3 && huvisagch2 < huvisagch4) {
    console.log(huvisagch2)
}
else if (huvisagch3 < huvisagch4) {
    console.log(huvisagch3)
}
else {
    console.log(huvisagch4)
}

//exercise11
const num11=93;
if(num11<0){
    console.log('invalid value');
}
else if(num11%3==0&&num11%7==0){
    console.log('7 bolon 3-d huvaagdana');
}
else if(num11%3==0){
    console.log('3-d huvaagdana');
}
else if(num11%7==0){
    console.log('7-d huvaagdana');
}
else{
    console.log('ali ni ch bish');
}

//exercise12
const nNumber=900;
if(nNumber>=0){
    console.log('positive');
}
else{
    console.log('negative');
}

//exercise13

const weight=60;
const height=163;
const bji=weight/Math.pow(height/100,2);
if(bji<18.5){
    console.log('Жингийн дутагдалтай')
}
else if (bji<=24.9){
    console.log('Эрүүл')
}
else if (bji<=29.9){
    console.log('Илүүдэл жинтэй')
}
else{
    console.log('Хэт таргаллалттай')
}

//exercise15
 const yearOfBirth=2004;
 const old=2024-yearOfBirth;
 if(yearOfBirth>2024||yearOfBirth<0){
    console.log('wrong answer');
 }
 else if(old>=0&&old<=1){
    console.log('Infant');
 }
 else if(old<=3){
    console.log('Toddler');
 }
 else if(old<=5){
    console.log('Preschool');
 }
 else if(old<=12){
    console.log('Gradeschooler');
 }
 else if(old<=18){
    console.log('Teen');
 }
 else if(old<=21){
    console.log('Youngadult');
 }
 else if(old<=60){
    console.log('adult');
 }
 else{
    console.log('elder');
 }
