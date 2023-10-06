// //ES5

// //1 string data type
// console.log("Hello World!");
// //2 number data type
// console.log(12);
// console.log(12.5);
// //3 boolean data type
// console.log(true);
// console.log(false);
// //4 undefined data type
// console.log(undefined);
// //5 null data type
// console.log(null);
// var a;
// console.log(a);
// var b=null;
// console.log(b);
// //variable
// var name="aungaung";
// console.log(name);
// //overide
// name="Aung Aung";
// console.log(name);

// //ES6
// let nameayeaye="Aye Aye";
// nameayeaye="aye aye";
// console.log(nameayeaye);
// //const
// const pi=3.142;
// console.log(pi);

// //type of corecion
// var num1=15;
// var num2=16;
// console.log(num1 + num2);
// let my_name="Thein Myint Win";
// let my_age=23
// console.log(my_name+" age is "+my_age);
// let c="23";
// let d=23;
// console.log(c-d);

//operator
// console.log(1+2);
// console.log(2-1);
// console.log(3*2);
// console.log(4/2);
// console.log(4%2);

//operator precedence
// let x=(6+2)*4/2;
// console.log(x);
// let x=1;
// x+=1
// x++
// x=x+1
// console.log(x);

// var name="Thein Myint Win";
// // console.log(name=="Kyaw Kyaw");
// // let my_name="Thein Myint Win";
// // console.log(my_name=="Thein Myint Win");
// if(name=="Thein Myint Win"){
//     console.log("My Name IS TMW");
// }else{
//     console.log("Not My Name");
// }

//let x=undefined;
// if(x){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if(x){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if(x){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if(x){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if(x){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let x=5;
// if(x<=5){
//     console.log("Valid Number");
// }
// else{
//     console.log("Invalid Number");
// }

//else if

// let x;
// if(x==10){
//     console.log("x is equal 10");
// }
// else if(x>10){
//     console.log("x is greather than 10");
// }
// else if(x<10){
//     console.log("x is less than 10");
// }
// else{
//     console.log("Invalid");
// }

//And Gate

// let x=61;
// if(x>=1 && x<=18){
//     console.log("You Are Young Boy");
// }else if(x>=18 && x<=30){
//     console.log("You Are Man");
// }else if(x>=30 && x<=60){
//     console.log("You Are Old");
// }else{
//     console.log("You Are Died");
// }

//OR Gate

// let x=18;
// if(x>20 || x<18){
//     console.log("Valid Number");
// }else{
//     console.log("Invalid Number");
// }

//function
//Declaration Function
// function showName(){
//     alert("Thein Myint Win");
// }
// showName();
// function helloworld(){
//     console.log("Hello World");
// }
// helloworld();

//Expression Function

// var showName=function(){
//     let name="Thein Myint Win";
//     console.log("My Name Is" +name);
// }
// showName();
//Example
// var showName=function(age){
//     console.log("My Age Is" +age);
// }
// showName(23);

//parameter
// function showName (name,age){
//     // alert(name);
//     console.log(name,age)
// }
// showName("Thein Myint Win",23);
// showName("Aung Aung",24);

//Return
// function helloworldText(){
//     return "Hello World";
// }
// console.log(helloworldText());

// function sum(num1,num2){
//     return(num1 + num2);
// }
// let result=sum(20,20);
// console.log(result);

//ES6 Syntax
//ES5
// var showName=function(){
//     let name="Thein Myint Win";
//     console.log("My Name Is" +name);
// }
// showName();
//ES6
// let helloworld=()=>{
//     console.log("Hello World");
// }
// helloworld();

// let showMGMGAge=(age)=>{
//     console.log("Mg Mg Age IS" + age);
// }
// showMGMGAge(23);
//Return
// let showMGMGAge=age=>{
//     return"Mg Mg Age Is" + age;
// }
// let result=showMGMGAge(23);
// console.log(result);
//Example
// let showName=name=> "My Name Is" + name;
// let result=showName("Thein Myint Win");
// console.log(result);

// Array
// let fruits=["Apple","Orange","Watermelon"];
// let my_about=["TMW",23,"False"];
// console.log(fruits);
// console.log(my_about);
// console.log(fruits.length);
// console.log(my_about.length);
// console.log(fruits[2]);
// console.log(my_about[1]);
// fruits[3]="Pineapple";
// console.log(fruits);
// fruits[0]="Lemon";
// console.log(fruits);

// Array Function

//Push Function
// let my_bio=[];
// let About=(name,age,job)=>{
//     my_bio.push(name);
//     my_bio.push(age);
//     my_bio.push(job);
// }
// About("TMW",23,"Programmer");
// // console.log(my_bio);
// my_bio.push("TMW");
// my_bio.push(23);
// my_bio.push("Programmer");
// console.log(my_bio);

//unshift function
// let my_bio=[];
// let About=(name,age,job)=>{
//     my_bio.unshift(name);
//     my_bio.unshift(age);
//     my_bio.unshift(job);
// }
// About("TMW",23,"Programmer");
// console.log(my_bio);
// my_bio.unshift("TMW");
// my_bio.unshift(23);
// my_bio.unshift("Programmer");
// console.log(my_bio);

//length
// let name="Thein Myint Win";
// console.log(name.length);
//indexOf
// name="Thein Myint Win";
// console.log(name.indexOf("y"));
// console.log(name.lastIndexOf("i"));
//Slice
// let name="Khin Wint Wah";
// console.log(name.slice(0,4));
//Includes
// let name="Nan Su Oo";
// console.log(name.includes("Nan"));
//toUpperCase
// let name="nan su yati soe";
// let result=name.toUpperCase();
// console.log(result);
//typeof
// let number="123";
// console.log(number);
// console.log(typeof number);
// let name="Thein Myint Win";
// console.log(name);
// console.log(typeof name);
// let result=parseInt(number);
// console.log(result);
// console.log(typeof result);

//pop
var fruits=["Apple","Orange","Lemon","Pineapple"];
fruits.pop();
console.log(fruits);