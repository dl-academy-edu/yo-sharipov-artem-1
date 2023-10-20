document.getElementById("open-modal").addEventListener("click",function(){
    document.getElementById("win-modal").classList.add("open")
})

document.getElementById("close-win-modal").addEventListener("click",function(){
    document.getElementById("win-modal").classList.remove("open")
})

document.querySelector("#win-modal .modal__form").addEventListener('click', event=> {
    event._isClickWithInModal = true;
});

document.getElementById("wim-modal").addEventListener('click', event=> {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});