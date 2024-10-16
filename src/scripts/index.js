document.getElementById('btn-search').addEventListener("click", () =>{
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        getUserProfile(userName)
    }
})

async function user(userName) {
    const response = await fetch (`https://api.github.com/users/${userName}`)
    return await response.json()
}

async function repos(userName) {
    const response = await fetch (`https://api.github.com/users/${userName}/repos`)
    return await response.json()
}

function getUserProfile(userName){

    user(userName).then( userData => {
        let userInfo = `<div class="info">
                        <img src="${userData.avatar_url}" alt="Foto do perfil do usuário" />
                        <div class="data"
                            <h1>${userData.name ?? 'Nao possui nome cadastrado 😢' }</h1>
                            <p>${userData.bio ?? 'Nao possui nome cadastrado 😢'}</p>
                        </div>
                        </div>`

        document.querySelector('.profile-data').innerHTML = userInfo

        getUserRepositories(userName)
    })
}

function getUserRepositories(userName){
    repos(userName).then(reposData => {
        let repositoriesItens = ""
        
        reposData.forEach(repo => {
            repositoriesItens +=`<li><a href="${repo.html_url}" target="_blank">${repo.name}</li>`
        })
        document.querySelector('.profile-data').innerHTML += `<div class="repositories section">
                                                                <h2>Repositorios</h2>
                                                                <ul>${repositoriesItens}</ul>
                                                            </div>`
    })
}