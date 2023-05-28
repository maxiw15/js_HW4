 function getPasswordChecker(password){
    let result = false
     check()
     function check(){
         let secret_password = "my_Secret_PS"
         result = (password === secret_password)
    }
        return result
 }

 console.log(getPasswordChecker("my_Secret_PS"))
 console.log(getPasswordChecker("eror"))
 // console.log(secret_password)