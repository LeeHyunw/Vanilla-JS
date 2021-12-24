const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const testlog = document.querySelector("#greeding");


// localStorage.clear();

function onLoginButtonClick (event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem("username", username);
    writingname(username);
}

function writingname (username) {
    testlog.classList.remove("hidden");
    testlog.innerText = username; 
}

const saveusername = localStorage.getItem("username");

console.log(saveusername);

if (saveusername == null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginButtonClick);
}else{
    writingname(saveusername);
};


