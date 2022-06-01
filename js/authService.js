const login = (username, password) => {
    fetch('http://localhost:8080/api/auth', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then( async result => {
            const data = await result.json();
            const userId = data.userId;

            sessionStorage.setItem('userId', 'userId');
        })
        .catch(err=> {
            alert('Error! Check logs');
            console.log(err)
        })
}