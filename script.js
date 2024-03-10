const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden,.hid')
hiddenElements.forEach((el) => observer.observe(el));

let username;
let email;
let id = Math.random();

document.getElementById("register").onclick = function(){

    username = document.getElementById("username").value;
    console.log(username);

    email = document.getElementById("email").value;
    console.log(email);

    if(document.getElementById("getTheaters").checked == true){
        console.log("User agree")
    }
    else{
        console.log("User not agree")
    }
    console.log(id)
        // Преобразовать имя пользователя в массив букв
        const letters = username.split("");
        const letterEmail = email.split("");
    
        // Преобразовать каждую букву в число
        const numbers = letters.map(letter => letter.charCodeAt() - 96);
        const numberEmail = letterEmail.map(letterE => letterE.charCodeAt() - 12)
    
        // Вывести имя пользователя и преобразованные числа в консоль
        console.log(`${numbers}`);
        console.log(`${numberEmail}`);
        // document.getElementById("output").innerHTML = "Your name = " + username + "Your e-mail = "+ email;
}