import { botonHTML } from "./apartadoAmodelo"
import {mostrarTodosLosDatos} from "./apartadoAui"
import { botonHTMLB } from "./apartadoBmodelo"
import { sacarEnlaces } from "./apartadoBui"

botonHTML?.addEventListener("click", mostrarTodosLosDatos);
botonHTMLB?.addEventListener("click", sacarEnlaces);