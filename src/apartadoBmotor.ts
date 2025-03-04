export const crearParrafoB = (mensaje:string) => {
    const parrafo = document.createElement("p");
    parrafo.innerText = mensaje;
    return parrafo;
}

export const traerValorInsertadoB = () => {
    const valor = document.getElementById("htmlInsertado");
    if (valor && valor instanceof HTMLTextAreaElement) {
        return valor.value;
    } else {
        throw new Error("No se han podido obtener los datos")
    }
}