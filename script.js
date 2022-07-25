let password = document.querySelectorAll("input[type =password]");
console.log(password);


password.forEach(elem => elem.addEventListener("focus", () => {
    if(password[1].value == "" || password[0].value == "")
    {
        password[1].classList.remove("right");
        password[1].classList.remove("wrong");
        password[0].classList.remove("right");
        password[0].classList.remove("wrong");
    }    
    else if(password[1].value != password[0].value)
    {
        password.forEach(elem => {elem.classList.add("wrong");
        elem.classList.remove("right")} )
    }
    else if(password[1].value == password[0].value)
    {
        password.forEach(elem => {elem.classList.add("right");
        elem.classList.remove("wrong")} )
    }
    
}))
password.forEach(elem => elem.addEventListener("blur", () => {
    if(password[1].value == "" || password[0].value == "")
    {
        password[1].classList.remove("right");
        password[1].classList.remove("wrong");
        password[0].classList.remove("right");
        password[0].classList.remove("wrong");

    }    
    else if(password[1].value != password[0].value)
    {
        password.forEach(elem => {elem.classList.add("wrong");
        elem.classList.remove("right")} )
    }
    else if(password[1].value == password[0].value)
    {
        password.forEach(elem => {elem.classList.add("right");
        elem.classList.remove("wrong")} )
    }
}))
