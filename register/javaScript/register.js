const form = document.querySelector(".form");
const elementContainer = document.querySelector(".element-container");
let user = "";

// function newElement (name)  {
const newElement = (name) => {
    elementContainer.innerHTML = "";
    const elem = document.createElement("div");
    elem.classList.add("notification");
    elem.innerHTML = `<h1 class="notification">Pronto nos pondremos en contacto contigo, ${name} gracias</h1>`;
    //  elem.innerText = "Pronto nos pondremos en contacto contigo, " + name + " gracias!";
    elementContainer.appendChild(elem);
};

// form.addEventListener("submit",function(event){
form.addEventListener("submit", (event) => {
    // Evitar que se recargue la página
    event.preventDefault();
    autocomplete = "off";
    //    
    const name = form.userName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name !== "" && lastName !== "" && email !== "" && message !== "") {
        const userObj = {
            name,
            lastName,
            email,
            message,
        }
        console.log(userObj);
        newElement(userObj.name);
    } else {
        alert("Unfilled fields please complete");
    }
});
