const githubForm = document.getElementById('githubForm');
const usernameInput = document.getElementById('username');
const detailsDiv = document.getElementById('details');

githubForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = usernameInput.value;

    if (username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const userData = await response.json();

            if (response.ok) {
                const userDetails = `
                    <h2>${userData.name || username}</h2>
                    <p><strong>Login:</strong> ${userData.login}</p>
                    <p><strong>Location:</strong> ${userData.location || 'N/A'}</p>
                    <p><strong>Followers:</strong> ${userData.followers}</p>
                    <p><strong>Following:</strong> ${userData.following}</p>
                    <p><strong>Public Repositories:</strong> ${userData.public_repos}</p>
                    <p><strong>Avatar:</strong></p>
                    <img src="${userData.avatar_url}" alt="${userData.login}" width="100">
                `;
                detailsDiv.innerHTML = userDetails;
            } else if (response.status === 404) {
                detailsDiv.innerHTML = `<p>User '${username}' not found.</p>`;
            } else {
                const errorData = await response.json();
                detailsDiv.innerHTML = `<p>Error: ${errorData.message}</p>`;
            }
        } catch (error) {
            detailsDiv.innerHTML = `<p>An error occurred while fetching data.</p>`;
        }
    }
});

