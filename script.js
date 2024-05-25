const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementsByTagName('button')[0];
const goAhead = document.getElementById('valid');

email.addEventListener(`change`, onChange);
password.addEventListener(`change`, onChange);

let allOk = false;
function onChange(event)
{
    const currentInput = event.target;
    const inputName = currentInput.id;
    const inputValue = currentInput.value;

    if (((inputName == `email`) && (inputValue.length > 3 && (\^[a-zA-Z0-9]+\.[a-z]+$\).test(inputValue))) || ((inputName == `password`) && (inputValue.length > 8)))
    {
        allOk = true;
    }

    if (!allOk)
    {
        const msg = currentInput.nextSibling;
        msg.setAttribute(`style`, `display: block;`);
    }
    else
    {
        goAhead.setAttribute(`style`, `display: block;`);
    }
}
    
submit.addEventListener(`click`, (e) => {
    e.preventDefault();
    prompt(`Confirm Details?`);
    if (allOk)
    {
        alert(`Successful Signup!`);
    }
});