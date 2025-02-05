import { listaBancos } from "./apartadoAmodelo";

export const crearParrafo = (mensaje:string) => {
    const parrafo = document.createElement("p");
    parrafo.innerText = mensaje
    return parrafo;
}

export const traerValorInsertado = () => {
    const valor = document.getElementById("valorInsertado");
    if (valor && valor instanceof HTMLInputElement) {
        return valor.value;
    } else {
        throw new Error("No se han podido obtener los datos")
    }
}

export const sacarBanco = (codigoBanco: string) => {
    const banco =listaBancos.find((banco) => banco.codigoBanco == codigoBanco);
    if (banco) {
        return banco?.nombreBanco;
    }
    return "Banco no encontrado"
}

