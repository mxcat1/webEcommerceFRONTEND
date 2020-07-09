import Inicio from './rutas/index.svelte'
import Acceder from './rutas/acceder.svelte'
import Registro from './rutas/registro.svelte'
import Catalogo from './rutas/catalogoProductos.svelte'
import Carrito from './rutas/carrito.svelte'

const routes = {
    '/':Inicio,
    '/Acceder': Acceder,
    '/Registro': Registro,
    '/Carrito': Carrito,
//#region Seccion de Catalogo Productos
    '/:Plataforma/:Categoria?': Catalogo
//#endregion Seccion de Catalogo Productos
}

export default routes;