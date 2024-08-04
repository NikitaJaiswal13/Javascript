
async function getUser() {
    try {
        let response = await fetch('https://api.github.com/users/NikitaJaiswal13')
        let data = await response.json()
        console.log(data.login);
    } catch (error) {
        console.log(`ERROR: ${error}`);
    } finally {
        console.log(`Done!`);
    }
}

getUser()