import { bloqueHTMLB } from "./apartadoBmodelo";
import { crearParrafoB } from "./apartadoBmotor";
import {regexEnlace } from "./apartadoBmodelo"
import { traerValorInsertadoB } from "./apartadoBmotor";

export const sacarEnlaces = () => {
    const texto = traerValorInsertadoB()
    const enlaces = texto.match(regexEnlace);
    console.log(`${enlaces}`)
    if (enlaces) {
        enlaces.forEach((enlace) => {
            const parrafo = crearParrafoB(enlace);
            bloqueHTMLB?.appendChild(parrafo);            
        })
    }
}