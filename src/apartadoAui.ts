import { isValidIBAN } from "ibantools";
import { bloqueHTML, validacionIBAN } from "./apartadoAmodelo";
import { crearParrafo, sacarBanco, traerValorInsertado } from "./apartadoAmotor";

const ibanEsValido = (valor: string) : boolean => {
    return isValidIBAN(valor)
}

const mostrarDatosIBAN = (valor:string, bloque: HTMLDivElement) => {
    const coincidencia = validacionIBAN.exec(valor);
    if (coincidencia) {
        const { codBanco, codSucursal, digitoControl2, numCuenta } = coincidencia.groups as any;
        const nombreBanco = sacarBanco(codBanco);
        const parrafo1 = crearParrafo(`Banco: ${nombreBanco}`);
        const parrafo2 = crearParrafo(`Codigo sucursal: ${codSucursal}`);
        const parrafo3 = crearParrafo(`Digito de control: ${digitoControl2}`);
        const parrafo4 = crearParrafo(`Numero de cuenta: ${numCuenta}`);
        bloque.appendChild(parrafo1);
        bloque.appendChild(parrafo2);
        bloque.appendChild(parrafo3);
        bloque.appendChild(parrafo4);
    }
}


export const mostrarTodosLosDatos = () => {
    const valor = traerValorInsertado();
    if (valor && bloqueHTML && bloqueHTML instanceof HTMLDivElement) {
        bloqueHTML.innerHTML = "";
        if(ibanEsValido(valor)) {
            const parrafo = crearParrafo("El IBAN es valido")
            bloqueHTML.appendChild(parrafo)
            mostrarDatosIBAN(valor,bloqueHTML)
        } else {
            const parrafo = crearParrafo("El IBAN no es valido o esta mal formado")
            bloqueHTML.appendChild(parrafo)
        }
    }
}