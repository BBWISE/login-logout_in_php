
/*
    CALLING THE PHP CODE FROM THE JAVASCRIPT CODE USING THE FETCH API
*/

let user = {
    /*
    "password": "12345678",
    "email": "BLESSING.BAYODE@EDSA.COM"
    */
}


function starting_check() {
    fetch('PHP/process.php', {
        'method': 'POST',
        
        'body': JSON.stringify(user)
        

    }).then(res => {
        return res.json();
    }).then(data => {
        
        if (data == null) {
            
            let butt = document.getElementById('but');
            butt.innerHTML = `<button type="button" onclick="login()" >Login</button>`;
        }
        else {
            let butt = document.getElementById('but');
            butt.innerHTML = `<button type="button" onclick="dashboard()" >Dashboard</button>`;
        }
    })
}



function login(){
    
    document.write('<iframe src="login.html"></iframe>');
}
function dashboard() {
    fetch('dashboard.html');
}

starting_check();