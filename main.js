
const show = `<i class="fa-solid fa-eye-slash" style="color: #555BBB;"></i>`;
const hide = `<i class="fa-solid fa-eye" style="color: #555BBB;"></i>`;

const btn = document.querySelector(".icon");
const input = document.querySelector("#input");

btn.addEventListener("click" ,() => {
    if (input.type === "password") {
        input.type = "text";
        btn.innerHTML = hide;
    }
    else{
        input.type = "password";
        btn.innerHTML = show;
    }
})