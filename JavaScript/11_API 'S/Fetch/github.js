const APIURL = 'https://api.github.com/users/';
async function getUser(username) {
    try {
        const response = await fetch(APIURL + username);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
        alert(`Error: ${error.message}`);
    }
}
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let username = document.getElementById('search').value;
    const main = document.querySelector('main');
    main.innerHTML = `<h1>loading.......<h1>`;
    const user = await getUser(username);
    const inform = await details(user);
    main.innerHTML = inform;
    await getRepos(user);
    search.value = '';

});

const details = (user) => {
    if (user.message === 'Not Found') {
        return `<h1 class="not-found">User not found</h1>`;
    }
    const info = `<div class="user">
            <img src="${user.avatar_url}" alt="${user.login}">
            <div id="user-info">
                <h2>${user.login}</h2>
                <p>${user.bio || `There is no bio available for ${user.login}.`}
                </p>
                <ul>
                    <li><strong>Followers:</strong> ${user.followers}</li>
                    <li><strong>Following:</strong> ${user.following}</li>
                    <li><strong>Public Repos:</strong> ${user.public_repos}</li>
                </ul>
                <div id="repos">
                </div>
            </div>


        </div>`;

    return info;
}

async function getRepos(user) {
    const reposUrl = await fetch(user.repos_url);
    const reposData = await reposUrl.json();
    reposData.slice(0, 3).forEach(repo => {
        const div = document.querySelector('#repos');
        const a = document.createElement('a');
        a.href = repo.html_url;
        a.target = '_blank';
        a.innerText = repo.name;
        a.classList.add('repo');
        div.appendChild(a);
    });
    return reposData;
}
