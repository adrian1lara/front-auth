const thisForm = document.getElementById("signUpForm")
thisForm.addEventListener('submit', async function(e) {
    e.preventDefault()
    
    let nombres = document.getElementById('nombres').value
    let apellidos = document.getElementById('apellidos').value
    let correo = document.getElementById('correo').value
    let password = document.getElementById('password').value

    let url = 'http://127.0.0.1:3000/signup'

    try {
        const res = await fetch(url,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombres: nombres,
                apellidos: apellidos,
                correo: correo,
                password: password
            })
        })

        let response = await res.json()
        if(res.ok) {
            alert(response.message)
        } else {
            alert(response)
        }

    } catch (error) {
        console.error("Error with signup", error)
    }
   
})