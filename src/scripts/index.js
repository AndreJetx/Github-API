document.getElementById('btn-search').addEventListener("click", () =>{
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

async function user() {
    const response = await fetch ('https://api.github.com/users/AndreJetx')
    return await response.json()
}

function getUserProfile(){
    user().then( userData => {
        let userInfo = `<img src="${userData.avatar_url}" alt="Foto do perfil do usuário" />
                        <div class="data"
                            <h1>${userData.name ?? 'Nao possui nome cadastrado 😢' }</h1>
                            <p>${userData.bio ?? 'Nao possui nome cadastrado 😢'}</p>
                        </div>`

        document.querySelector('.profile-data').innerHTML = userInfo
    })
}

