const apiUrl = 'https://api.github.com/repos/{owner}/{repo}';

async function fetchRepoStarCount(owner, repo) {
    try {
        const response = await fetch(apiUrl.replace('{owner}', owner).replace('{repo}', repo));
        const data = await response.json();
        const starCount = data.stargazers_count;
        return starCount;
    } catch (error) {
        console.error('Error fetching repository star count:', error);
        return null;
    }
}

async function updateRepoStarCounts() {
    let repos = [];
    const storedRepos = localStorage.getItem('githubRepos');
    if (storedRepos) {
        try {
            repos = JSON.parse(storedRepos);
        } catch {
            const githubRepoDiv = document.getElementById('githubRepo');
            if (githubRepoDiv) {
                const repoDetailsDiv = document.createElement('div');
                repoDetailsDiv.classList.add('repo-details');
                repoDetailsDiv.innerHTML = `
                    <p>No repositories found. Please add github repositories you want to track in settings.</p>
                `;
                githubRepoDiv.appendChild(repoDetailsDiv);
            }
        }
    } else {
        const githubRepoDiv = document.getElementById('githubRepo');
        const repoDetailsDiv = document.createElement('div');
        repoDetailsDiv.classList.add('repo-details');
        repoDetailsDiv.innerHTML = `
            <p>No repositories found. Please add github repositories you want to track in settings.</p>
        `;
        githubRepoDiv.appendChild(repoDetailsDiv);
        console.log('No repositories found in localStorage.');
    }

    const githubRepoDiv = document.getElementById('githubRepo');
    if (githubRepoDiv) {
        for (const repo of repos) {
            const starCount = await fetchRepoStarCount(repo.owner, repo.repo);
            if (starCount !== null) {
                const repoDetailsDiv = document.createElement('div');
                repoDetailsDiv.classList.add('repo-details');
                repoDetailsDiv.innerHTML = `
                    <p>${repo.owner}/${repo.repo}</p>
                    <p>Stars: ${starCount}</p>
                `;
                githubRepoDiv.appendChild(repoDetailsDiv);
            } else {
                const errorMessageDiv = document.createElement('div');
                errorMessageDiv.classList.add('error-message');
                errorMessageDiv.textContent = `Failed to fetch star count for ${repo.owner}/${repo.repo}`;
                githubRepoDiv.appendChild(errorMessageDiv);
            }
        }
    }
}
function insertRepo(owner, repo) {
    let repos = [];
    const storedRepos = localStorage.getItem('githubRepos');
    if (storedRepos) {
        try {
            repos = JSON.parse(storedRepos);
        } catch {
            console.log('Error parsing stored repositories from localStorage.');
            repos = [];
        }
    }
    const existingRepoIndex = repos.findIndex(r => r.owner === owner && r.repo === repo);
    if (existingRepoIndex === -1) {
        repos.push({ owner: owner, repo: repo });
        localStorage.setItem('githubRepos', JSON.stringify(repos));
    } else {
        console.log('Repository already exists in localStorage.');
    }
}

updateRepoStarCounts();
