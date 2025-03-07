let form = document.forms.request;

form.addEventListener('submit', (event)=> {
    event.preventDefault();

    let login = form.login.value;
    let phone = form.phone.value;

    if (!login|| !phone) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    if (!(isValidName(login))) {
        alert("Имя должно содержать только буквы");
        return;
    }

    if (!(isValidPhone(phone))) {
        alert("Телефон должен содержать только цифры");
        return;
    }

    form.submit();
});

function isValidPhone (phone) {
    let pattern = /^(|\d+)$/i;
    return pattern.test(phone);
}

function isValidName (login) {
    let pattern = /^([a-zа-яё]+)$/i;
    return pattern.test(login);
}

const element = document.getElementById('phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);