const button = document.querySelector(".btn-no");


button.addEventListener('mouseover', ()=> {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});


button.addEventListener('click', function () {
        console.log("hurry");
    });