const signup = document.querySelector("#button")


signup.addEventListener("click", (event)=>{
    event.preventDefault()

    const fullname = document.querySelector("#fullname").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const confirmPassword = document.querySelector("#confirmPassword").value
    const error = document.querySelector("#error")

    

    error.textContent = ""
    error.style.color= "red"
    error.style.fontSize = "40px"
    //error.style.backgroundColor = "yellow"
    if(!fullname || !email || !password){
        //alert("all field must be filled")
        error.textContent = "all field must be filled"
        return
    }

    if(password.length <=5 || password !== confirmPassword){
        //alert("confirm password")
        error.textContent = "confirm password"
        error.style.color= "blue"
        return
        
    }

    const user= {
        fullname:fullname,
        email:email,
        password:password,
        
    }
    
    localStorage.setItem("User",JSON.stringify(user))




    //alert("account created successfully")
    error.textContent = "account created successfully"

    
    window.location.href = "login.html"
   
})

