import { listaBancos } from "./apartadoAmodelo";

export const crearParrafo = (mensaje: string, bloque: HTMLDivElement) => {
    const parrafo = document.createElement("p");
    parrafo.innerText= mensaje;
    bloque.appendChild(parrafo);
}

export const traerValorInsertado = () => {
    const valor = document.getElementById("valorInsertado");
    if (valor && valor instanceof HTMLInputElement) {
        return valor.value;
    } else {
        throw new Error("No se han podido obtener los datos")
    }
}

export const sacarBanco = (codigoBanco: string, bloque:HTMLDivElement) => {
    const banco =listaBancos.find((banco) => banco.codigoBanco == codigoBanco);
    crearParrafo(`Banco: ${banco?.nombreBanco}`, bloque)
}

