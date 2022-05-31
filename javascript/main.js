let para = document.getElementById("pargra")
let body = document.querySelector("body")
let btn = () => {
    let password = "ABCDEFG123456789#%&/$"
    let result = []
    for (let i = 0; i < 6; i++){
        result.push(password[Math.floor(Math.random() * password.length)])
    }
    let e = result.join("")
    para.innerHTML = e
   
}

