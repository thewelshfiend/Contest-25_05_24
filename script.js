const form = document.querySelector('form');
const fields = form.getElementsByTagName('input');
const footSection = document.getElementById('foot');
const checked = [];

for (let field of fields)
{
    field.addEventListener('change', onChange);
    checked.push(0);
}

function onChange(e)
{
    const fieldInFocus = e.target;
    const currentValue = fieldInFocus.value;
    const parent = fieldInFocus.parentElement;

    if (fieldInFocus.id == `email`)
    {
        if (currentValue.length <= 3 || !(/^[0-9a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+$/.test(currentValue)))
        {
            parent.innerHTML += `
            <p class=invalid>Make sure the email is more than 3 characters and has an '@' and a '.'.</p>
            `;
            checked[0] = 0;
        }
        else
        {
            parent.innerHTML = `
            <label for=email>Email </label>
            <input id=email type=email placeholder=Example@email.com value=${currentValue}>
            `;
            checked[0] = 1;
        }
    }
    else if (fieldInFocus.id == `password`)
    {
        if (currentValue.length <= 8)
        {
            parent.innerHTML += `
            <p class=invalid>Make sure the password is more than 8 characters.</p>
            `;
            checked[1] = 0;
        }
        else
        {
            parent.innerHTML = `
            <label for=password>Password</label>
            <input id=password type=password placeholder=Your Password value=${currentValue}>
            `;
            checked[1] = 1;
        }
    }

    if (checked.includes(0) == false)
    {
        const sanction = document.createElement('p');
        sanction.id = 'valid';
        sanction.innerText = `All good to go!`;
        footSection.prepend(sanction);
    }
    else
    {
        footSection.innerHTML = `
        <button type=submit value=Submit>Submit</button>
        `;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!(checked.includes(0)))
    {
        alert(`Form submission successful!!`);
    }
    else
    {
        alert(`Form submission failed!`);
        alert(`Please retry.`);
        for (let field of fields)
        {
            field.value = '';
        }
    }
});