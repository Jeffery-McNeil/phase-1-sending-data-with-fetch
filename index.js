function submitData(userName, userEmail) {
    const configurationObject = {
        method: "POST",   
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail
            }),
        };
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object){
        const li = document.createElement('li')
        li.textContent = object.id
        document.querySelector('body').append(li)
    })
    .catch(function (error){
        const li = document.createElement('li')
        li.textContent = error.message
        document.querySelector('body').append(li)
    })
}