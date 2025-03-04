import { bloqueHTMLB } from "./apartadoBmodelo";
import { crearParrafoB } from "./apartadoBmotor";
import {regexEnlace } from "./apartadoBmodelo"
import { traerValorInsertadoB } from "./apartadoBmotor";

export const sacarEnlaces = () => {
    const texto = traerValorInsertadoB()
    const enlaces = regexEnlace.exec(texto);
    console.log(`${enlaces}`)
    if (enlaces) {
        const {enlaceImagen} = enlaces.groups as any;
        console.log(`${enlaceImagen}`)
        if (bloqueHTMLB && bloqueHTMLB instanceof HTMLDivElement) {
            const parrafo = crearParrafoB(`${enlaceImagen}`);
            bloqueHTMLB.appendChild(parrafo);
        }
        ;
        
    }
}