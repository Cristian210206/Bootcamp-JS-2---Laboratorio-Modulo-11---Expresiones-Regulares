import { isValidIBAN } from "ibantools";
import { bloqueHTML, validacionIBAN } from "./apartadoAmodelo";
import { crearParrafo, sacarBanco, traerValorInsertado } from "./apartadoAmotor";

const comprobarFormacionIBAN = (valorInsertado:string, bloque: HTMLDivElement) :boolean => {
    if (validacionIBAN.test(valorInsertado)) {
        crearParrafo(`El IBAN esta bien formado`,bloque);
        return true;
    }
    crearParrafo(`El IBAN no esta bien formado`,bloque);
    return false;
}

const ibanEsValido = (valor: string, bloque: HTMLDivElement) : boolean => {
    if (isValidIBAN(valor)) {
        crearParrafo(`El IBAN es valido`,bloque);
        return true;
    }
    crearParrafo(`El IBAN no es valido`,bloque);
    return false;
}

const mostrarDatosIBAN = (valor:string, bloque: HTMLDivElement) => {
    const coincidencia = validacionIBAN.exec(valor);
    if (coincidencia) {
        console.log("Hola")
        const { codBanco, codSucursal, digitoControl2, numCuenta } = coincidencia.groups as any;
        sacarBanco(codBanco,bloque);
        crearParrafo(`Código sucursal: ${codSucursal}`, bloque);
        crearParrafo(`Digito de control: ${digitoControl2}`, bloque);
        crearParrafo(`Numero de cuenta: ${numCuenta}`, bloque);
    } else {
        console.log(coincidencia)
    }
}


export const mostrarTodosLosDatos = () => {
    const valor = traerValorInsertado();
    if (valor && bloqueHTML && bloqueHTML instanceof HTMLDivElement) {
        bloqueHTML.innerHTML = "";
        const formacion = comprobarFormacionIBAN(valor,bloqueHTML);
        if (formacion) {
            const validez = ibanEsValido(valor,bloqueHTML);
            if (validez) {
                mostrarDatosIBAN(valor,bloqueHTML);
            }
        }
    }
}