

 /* დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და
 // დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
 
 function numbers(m,n){
   if (m>n) 
   return (m)
else if (m=n)
   return (0)}
console.log(numbers(9,9))*/
 

/*2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი

function numbers (a,b){
   return (a+b)
} console.log(numbers(10,20))*/


/* დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

function sum (firstName, lastName)
 {
   console.log(firstName, lastName)
} sum("tsira", "mesablishvili") */


/*დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ
 //( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდა

 let person = {
   firstName: "lela"
   lastname: "gabelia"
   fullname: function() { 
       
       console.log(this.firstName,  this.lastName)
       return this.fullname
   }
}
console.log(person.fullname)*/

/*function sum (firstname, lastname){
var fullname=sum;
return fullname
}
  console.log(sum(ana,mesablishvili)) */


/*Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) 
//და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი
 //( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ 
   //ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. 
   //Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
  
      

   function number (n){
      let a=1;
  for(i=1;i<6;i++){
   a *= n;

  }
return a
   }
  console.log(number(6))  */
    
   



/*Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - 
//რომელსაც აქვს შემდეგი properties: firstName, lastName, age, scores 
//(scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი fullName 
//რომელიც აბრუნებს სტუდენტის სრულ სახელს 
//( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) */
   
/*6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)

let student = {
   firstName: "ana",
   lastName: "kupatadze",
   age: 30,
   scores : [4,7,5,3,2],
   fullName: function() {
   console.log (this.firstName, this.lastName)
}
}
student.fullName () */

/*დაბეჭდეთ სტუდენტის სახელი და ასაკი

let student = {
   firstName: "ana",
   lastName: "kupatadze",
   age: 30,
   scores : [4,7,5,3,2],
   fullName: function() {
   console.log (this.firstName, this.lastName)
}
}
console.log(student.firstName, student.age)*/



7./* Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს

function fullscores (scores) {
   let a=0;
   for (i=2; i<7; i++){
      a+=a
   }
   
   return a;
 }*/
//ggdkkkkkkgggg