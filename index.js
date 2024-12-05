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



 //ex1

 const numb=-5;
 if(numb<0){
    console.log('negative');
 }
 else  if(numb==0){
    console.log('zero');
 }
else{
    console.log('positive');
 }

  //ex2
  const temprature=15;
  if(temprature<0){
    console.log('C is freezing');
  }
  else if(temprature>=0&&temprature<30){
    console.log(temprature+'C is normal');
  }
  else{
    console.log(temprature+'C is hot');
  }

  //ex3
  const char='a';
  if(char==='a'||char==='e'||char==='i'||char==='u'||char==='o'){
    console.log(char+' is a vowel');
  }
  else{
    console.log(char+' is a consonant');
  }

  //ex4
  const grade=85;
  if(grade<0||grade>100){
    console.log("it's not a grade");
  }
  else if(grade>=90){
    console.log('Your grade is A');
  }
  else if(grade>=80){
    console.log('Your grade is B');
  }
  else if(grade>=70){
    console.log('Your grade is C');
  }
  else if(grade>=60){
    console.log('Your grade is D');
  }
  else{
    console.log('Your grade is F');
  }

  //ex5
  const age=16;
  if(age<0 ||age>120){
    console.log('Invalid value');
  }
  else if(age<13){
    console.log('You are a child')
  }
  else if(age<=19){
    console.log('You are a teenager')
  }
  else{
    console.log('You are a adult')
  }

  //ex6
  const givenNumber=35;
  if(givenNumber%5===0&&givenNumber%7===0){
    console.log(givenNumber+' is divisible by both 5 and 7')
  }
  else if(givenNumber%5===0){
    console.log(givenNumber+' is divisible by 5')
  }
  else if(givenNumber%7===0){
    console.log(givenNumber+' is divisible by 7')
  }
  else{
    console.log(givenNumber+' is divisible by neither 5 and 7')
  }

  //ex7
  const givenTime=14;
  if(givenTime<0||givenTime>23){
    console.log('Its no time')
  }
  else if(givenTime<12){
    console.log('Its morning ')
  }
  else if(givenTime<18){
    console.log('Its afternoon ')
  }
  else{
    console.log('Its evening')
  }

  //ex8
  const checkNumber=25;
  if(checkNumber>10000&&checkNumber<0){
    console.log('Invalid value');
  }
  else if(checkNumber/10<1){
    console.log(checkNumber,' is single-digit number')
  }
  else if(checkNumber/10/10<1){
    console.log(checkNumber,' is double-digit number')
  }
  else {
    console.log(checkNumber,' is trible-digit number')
  }

  //ex9
  const number9=16;
  if(number9%4===0){
    console.log(number9,' is a multiple of 4')
  }
  else{
    console.log(number9,' is not a multiple of 4')
  }

  //ex10
  let char10='G';
  if(char10.charCodeAt(0)<91||char10.charCodeAt(0)>64){
    console.log(char10," is uppercase")
  }
  else if(char10.charCodeAt(0)<123||char10.charCodeAt(0)>96){
    console.log(char10," is lowercase")
  }
  else{
    console.log('its not alphabet')
  }

  //ex11
  const day=6;
  if(day>7&&day<0){
    console.log('Invalid value');
  }
  else if(day<6){
    console.log(day,' is weekday')
  }
  else{
    console.log(day,' is weekend')
  }
    //ex12
    const size='Medium';
    if(size==='medium'||size==='Medium'){
        console.log('A medium size coffee costs $3 ')
    }
    else if(size==='Small'||size==='small'){
        console.log('A small size coffee costs $2 ')
    }
    else {
        console.log('A large size coffee costs $4 ')
    }
    
    //ex13
    const weather='rainy';
    if(weather==='rainy'){
        console.log("Don't forget your umbrella! ")
    }
    else if(weather==='Cold'){
        console.log("Don't forget your jacket! ")
    }
    else {
        console.log("Don't forget your sunglasses! ")
    }

    //ex14
    const age14=70;
    if(age14<5){
        console.log('Your ticket price is free')
    }
    else if(age14>4&&age14<19){
        console.log('Your ticket price is $10 ')
    }
    else if(age14>18&&age14<61){
        console.log('Your ticket price is $15 ')
    }
    else {
        console.log('Your ticket price is $12')
    }

    //ex15
    const energy=25;
    if(energy>70){
        console.log('Your pet is Happy')
    }
    else if(energy>29&&energy<71){
        console.log('Your pet is Hungry')
    }
    else if(energy<30){
        console.log('Your pet is Sleepy')
    }
    else {
        console.log('we dont know')
    }

    //ex16
    const weight1=75;
    if(energy>100){
        console.log('You are lifting at an Advanced level')
    }
    else if(weight1>49&&weight1<101){
        console.log('You are lifting at an Intermediate level')
    }
    else if(weight1<50){
        console.log('You are lifting at an Beginner level')
    }
    else {
        console.log('we dont know')
    }

    //ex17
    const totalSpent=150;
    if(totalSpent>200){
        console.log('You get a 30% discount')
    }
    else if(totalSpent>49&&totalSpent<101){
        console.log('You get a 10% discount')
    }
    else if(totalSpent>100&&totalSpent<201){
        console.log('You get a 20% discount')
    }
    else if(totalSpent<50){
        console.log('You get a no discount')
    }

    //ex18
    const numcheck=/\d+/
    const specialChar=/^\S+.*\S+$/;
    const password="Pass123!"
    if(numcheck.test(password)===true&&specialChar.test(password)===true&&password.length>=8){
        console.log('Your password is strong')
    }
    else if(numcheck.test(password)===true&&specialChar.test(password)===true&&password.length>=6){
        console.log('Your password is medium')
    }
    else {
        console.log('Your password is weak')
    }

    //ex19
    const height1=130;
    const age1=65;
    if(height1<120&& age1<19){
        console.log("Your ticket price is $5")
    }
    else if(height1>=120&&age1<60){
        console.log("Your ticket price is $10")
    }
    else {
        console.log("Your ticket price is $7")
    }

    //ex20
    const dataUsage=25;
    if(dataUsage>50){
        console.log("Your data cost is $50")
    }
    else if(dataUsage>=0&&dataUsage<5){
        console.log("Your data cost is $10")
    }
    else if(dataUsage>=5&&dataUsage<21){
        console.log("Your data cost is $10")
    }
    else if(dataUsage>=20&&dataUsage<=50){
        console.log("Your data cost is $30")
    }

    //ex21
    const age21 = 30;
    const income = 30000;
    const creditScore = 650;
    if(age21>=21&&income>=25000&&creditScore>600){
        console.log("You are eligible for the loan");
    }
    else{
        console.log("You are not eligible for the loan");
    }

    //ex22
    const attendance = 80; 
    const exam1 = 85;
    const exam2=90;
    const exam3=68;
    const average=(exam1+exam2+exam3)/3;
    if(attendance<75){
        console.log("your final grade is F");
    }
    else if(average<60){
        console.log("your final grade is F")
    } 
    else if(average<70){
        console.log("your final grade is D")
    }
    else if(average<80){
        console.log("your final grade is C")
    }
    else if(average<90){
        console.log("your final grade is B")
    }
    else if(average<=100){
        console.log("your final grade is A")
    }
    else{
        console.log("invalid value")
    }

    //ex23
    let yearsWorked = 6;
    const metTarget = true
    const attendance23 = 95;
    let baseSalary=2000;
    if(yearsWorked>=5&&metTarget==true&&attendance23>=90){
        baseSalary+=(500+300+100);
    }
    else if(metTarget==true&&attendance23>=90){
        baseSalary+=300+100;
    }
    else if(yearsWorked>=5&&attendance23>=90){
        baseSalary+=500+100;
    }
    else if(yearsWorked>=5&&metTarget==true){
        baseSalary+=500+300;
    }
    else if(attendance23>=90){
        baseSalary+=100;
    }
    else if(yearsWorked>=5){
        baseSalary+=500;
    }
    else{
        baseSalary+=300;
    }
    console.log("Your total salary is $",baseSalary);
    

    //ex24
    let gender = 'Female';
    const time = '2:45:00';
    if(gender=='Female'){
        if((parseInt(time.charAt(0))==2&&parseInt(time.charAt(2)+time.charAt(3))<=30)||(parseInt(time.charAt(0))&&parseInt(time.charAt(2)+time.charAt(3))<=59)){
            console.log('Your perfonrmance level is Elite')
        }
        else if((parseInt(time.charAt(0))>3&&parseInt(time.charAt(2)+time.charAt(3))<=15)||(parseInt(time.charAt(0))==2&&parseInt(time.charAt(2)+time.charAt(3))<=59)){
            console.log('Your perfonrmance level is Advanced')
        }
        else{
            console.log('Your perfonrmance level is Amateur')
        }
    }
    else if(gender=='Male'){
        if(parseInt(time.charAt(0))>=2&&parseInt(time.charAt(2)+time.charAt(3))<=10){
            console.log('Your perfonrmance level is Elite')
        }
        else if(parseInt(time.charAt(0))>=3){
            console.log('Your perfonrmance level is Advanced')
        }
        else{
            console.log('Your perfonrmance level is Amateur')
        }
    }