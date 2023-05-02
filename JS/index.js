
/*
    CALLING THE PHP CODE FROM THE JAVASCRIPT CODE USING THE FETCH API
*/

function starting_check() {
    fetch('PHP/process.php', {
        method: 'POST',
        body: {
        };
    }).then(res){
        console.log("Accessing PHP ...");
    }
    .catch (error) {
        console.log(error);
    }
}

starting_check();