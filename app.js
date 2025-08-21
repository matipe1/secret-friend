let friendsList = [];

const ulRender = (friends) => {
    ulElement = document.getElementById('listaAmigos');
    ulElement.innerHTML = '';
    ulElement.innerHTML = friends.map(name => `
    <li>${name}</li>
    `).join('');
}

const  agregarAmigo = () => {
    inputFriend = document.getElementById('amigo');
    inputFriendValue = inputFriend.value;

    if (inputFriendValue.trim() == '') {
        alert('There is not name');

    } else {
        friendsList.push(inputFriendValue);
        ulRender(friendsList);
        inputFriend.value = '';
        }
}

const showResult = (name) => {
    ulElement = document.getElementById('resultado');
    ulElement.innerHTML = '';
    ulElement.innerHTML = `<li>${name}</li>`;
}

const sortearAmigo = () => {
    if (friendsList.length == 0) {
        alert('There is any friend in the list');
    } else {
        const RANDOM_INDEX = Math.floor(Math.random() * friendsList.length);
        let name = friendsList[RANDOM_INDEX];
        showResult(name);
    }
}