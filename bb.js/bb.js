
//დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ
 //( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ}

let person = {
    firstName: "lela"
    lastName: "gabelia"
    fullname: function() { 
        
        console.log(this.firstName,this.lastName)
    }
}
person.fullname()