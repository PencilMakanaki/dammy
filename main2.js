const login = document.querySelector("#button")


login.addEventListener("click",(event)=>{
    event.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const error = document.querySelector("#error")



    error.textContent = ""
    error.style.color= "red"
    if(!email || !password){
        //alert("all field must be filled")
        error.textContent = "all field must be filled"
        return
    }

    const saveUser = JSON.parse(localStorage.getItem("User"))

    if(!saveUser){
        //alert("no account found. please sign up first")
        error.textContent = "no account found. please sign up first"
        return
    }

    if(email === saveUser.email && password === saveUser.password){
        //alert(`welcome ${saveUser.fullname}`)
        error.textContent = `welcome ${saveUser.fullname}`
        window.location.href = "home.html"
        //alert("login successfully")
         error.textContent = "login successfully"
    }else{
        //alert("invalid email and password")
       error.textContent = "invalid email and password"
    }
    
})