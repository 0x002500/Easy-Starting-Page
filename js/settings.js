window.onload = function() {
    const repoList = document.getElementById('repoList');
    const storedRepos = localStorage.getItem('githubRepos');
    if (storedRepos) {
        const repos = JSON.parse(storedRepos);
        repos.forEach(repo => {
            const listItem = document.createElement('li');
            listItem.textContent = `${repo.owner}/${repo.repo}`;
            repoList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No repositories found.';
        repoList.appendChild(listItem);
    }
};
const addRepoForm = document.getElementById('addRepoForm');
addRepoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const ownerInput = document.getElementById('ownerInput');
    const repoInput = document.getElementById('repoInput');
    const owner = ownerInput.value.trim();
    const repo = repoInput.value.trim();
    if (owner && repo) {
        const repoList = document.getElementById('repoList');
        const listItem = document.createElement('li');
        listItem.textContent = `${owner}/${repo}`;
        repoList.appendChild(listItem);
        let repos = [];
        const storedRepos = localStorage.getItem('githubRepos');
        if (storedRepos) {
            repos = JSON.parse(storedRepos);
        }
        repos.push({ owner: owner, repo: repo });
        localStorage.setItem('githubRepos', JSON.stringify(repos));
        ownerInput.value = '';
        repoInput.value = '';
    } else {
        alert('Owner and Repository fields cannot be empty.');
    }
});

function setSettings(option) {
    const dialog = document.querySelector('.settings');
    if (dialog) {
        if (option){
            dialog.showModal();
        } else {
            dialog.close();
        }
    }
}