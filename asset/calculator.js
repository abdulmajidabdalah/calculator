const firstName = prompt('siapa nama depan kamu ?');
const lastName = prompt('siapa nama belakang kamu ?');
const language = prompt('kamu bisa bahasa apa ? \n Sunda, Indo, Inggris \n keyword harus sama yaaa');

const user = {
    name: {
        first: firstName,
        last: lastName,
    },
    language: language
};

if (user.language === 'Sunda') {
    alert('Wilujeng sumping ' + user.name.first + ' ' + user.name.last + '!');
} else if (user.language === 'Indo') {
    alert('Selamat datang ' + user.name.first + ' ' + user.name.last + '!');
} else if (user.language === 'Inggris') {
    alert('welcome ' + user.name.first + ' ' + user.name.last + '!');
} else {
    alert('hmmmmm kenapa ga di isi ' + user.name.first + ' ' + user.name.last + '?')
}