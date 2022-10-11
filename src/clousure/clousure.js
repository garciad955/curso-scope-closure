function greeting() {
    let userName = 'Dani';

    function displayUserName() {
        return `Hello ${userName}`;
    }

    return displayUserName;
}

const g = greeting(); //retorna referencia a displayUserName

console.log(g);
console.log(g());