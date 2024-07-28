var user_name = Quest;

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Both name and email are required!');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    onSuccessfulValidation();
    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function onSuccessfulValidation() {
    alert('Form submitted successfully!');
    user_name = 'pizdec';
    setText();

}




function toggleDropdown() {
    document.getElementById("dropfile-dropdown-id").classList.toggle("show");
    console.log('owo');
    document.getElementById('content').data = ('SignInForm.html')
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("profile-dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function setText() {
    var name = document.getElementById('name');
    name.innerHTML = user_name;
}
