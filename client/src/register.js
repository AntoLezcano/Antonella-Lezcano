import "./style.css";

//*Formulario de registro
const $form = document.getElementById("register-form");


$form.addEventListener("submit", async (e) => {

    e.preventDefault();


    const formData = new FormData($form);
    const entries = Object.fromEntries(formData.entries());
    fetch("http://localhost:4321/api/sign-up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            credencials: "include",
        },
        body: JSON.stringify(entries),
    }).then((response) => {
        if (response.ok) {
            window.location.href = "/pages/login";
        } else {
            console.error(response);
        }
    })
})
