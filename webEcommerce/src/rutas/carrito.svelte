<script>
    import {link} from 'svelte-spa-router'
    import {location} from 'svelte-spa-router'

    import TableCarrito from '../components/principal/tablecarritoComponent.svelte'
    import Title from '../components/principal/titleComponent.svelte'
    import SubtotalCarrito from '../components/principal/subtotalcarritoComponent.svelte'
    import ContenedorPrincipal from '../components/principal/containerPrincipalComponent.svelte'


    let titulos=['Producto','Cantidad','Quitar','Precio Unitario','Precio Total'];
    let productos=[
        {
            "IdProducto":1,
            "NomProducto":"Producto 1",
            "PrecioProducto":15.99,
            "ImagenProducto":"./img/muestra_productos/PC GAMER.png"
        },
        {
            "IdProducto":2,
            "NomProducto":"Producto 2",
            "PrecioProducto":17.99,
            "ImagenProducto":"./img/muestra_productos/DOOM-Eternal.png"
        }
    ]
    function precios(data) {
        let listaprecio=data.filter(item=>item.PrecioProducto!==null)
        return listaprecio
    }
    console.log(precios(productos))

</script>
<svelte:head>
    <title>{$location.slice(1)}</title>
</svelte:head>
<ContenedorPrincipal>
    <Title texttitle="MI CARRITO DE COMPRAS"/>
    <div class="content-carrito">
        <div class="content-carrito-productos">
            <TableCarrito itemsheaders="{titulos}" carritoproductos={productos}/>
        </div>
        <div class="content-carrito-totales">
            <SubtotalCarrito Descuento="10" precioEnvio="16" precioSubtotal="33.98" precioTotal="59.98"/>
            <div class="publicidad">
                <img src="./img/banner/publicidad.png" alt="publicidad">
            </div>
        </div>
    </div>
</ContenedorPrincipal>
<style>
    .content-carrito{
        width: 100%;
        display: flex;
    }
    .content-carrito-productos{
        width: 80%;
    }
    .content-carrito-totales{
        width: 20%;
    }
    .publicidad{
        margin: 2rem;
    }
    .publicidad>img{
        width: 100%;
    }
</style>