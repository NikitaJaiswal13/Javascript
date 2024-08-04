
fetch('https://api.github.com/users/NikitaJaiswal13')
.then((response) => {
    return response.json()    
})
.then((data) => {
    console.log(data.login);
})
.catch((error) => {
    console.log(`ERROR: ${error}`);
})
.finally(() => {
    console.log(`Done!`);
})