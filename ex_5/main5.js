function getResult() {
    let nota = parseFloat(document.getElementById("nota").value);
    if ( nota >=5 && nota <= 10) {
        alert(`Enhorabuena! Has aprobado el examen con ${nota} :)`);
    } else if ( nota > 0 && nota < 5) {
        alert(`Oh no! Has suspendido el examen con ${nota} :(`);
    } else {
        alert(`Oooops! Parece que no has indicado una nota válida.`);
    }
}