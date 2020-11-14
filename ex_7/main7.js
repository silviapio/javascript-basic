const objects = ['taula', 'cadira', 'ordinador', 'libreta'];

function getObjectPosition() {
    for (let i = 0; i < objects.length; i++) {
        console.log(`L'objecte ${objects[i]} està a la posiciò ${i}.`);
    }
}