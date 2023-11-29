document.getElementById('loginForm').addEventListener('submit', function(event){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === ''){
        event.preventDefault();
        document.getElementById('error-message').innerText = 'Username and password are required.';         
    } else{
        document.getElementById(error-message).innerText = '';
    }
});