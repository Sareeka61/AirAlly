document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

//validation???? will do later

    window.location.href = "home.html";

    document.getElementById('login-form').reset();
});
