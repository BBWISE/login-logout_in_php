function processing() {
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');

    let user = {
        "password": pass.value,
        "email": email.value
    }
    console.log(user.email);
    fetch('PHP/process.php', {
        'method': 'POST',

        'body': JSON.stringify(user)


    }).then(res => {
        return res.json();
    }).then(data => {

        if (data == null) {

            window.alert("Invalid credentials");
            
        }
        else {
            document.write('<iframe src="dashboard.html"></iframe>');
        }
    })
}