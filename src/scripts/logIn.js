const loginForm = document.getElementById("loginForm")

loginForm.addEventListener('submit', async function(e) {
    e.preventDefault()

    let correo = document.getElementById('correo').value
    let password = document.getElementById('password').value

    let url = 'http://127.0.0.1:3000/login'

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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
        console.error("Error en login", error)
    }
})