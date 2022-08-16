document.getElementById('btn-change').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    const previousWife = document.getElementById('previous-wife');
    
    const currentWIfe = document.getElementById('current-wife');
    previousWife.innerText = currentWIfe.innerText;
    currentWIfe.innerText = inputFieldValue;

    const main = document.querySelector('main');
    main.style.backgroundColor = "red";

    alert("Congratulations!! " + inputFieldValue + " is now your wife!!")
})