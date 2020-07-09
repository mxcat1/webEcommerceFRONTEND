<script>
    export let itemsheaders
    export let carritoproductos

    import CardCarrito from './cardcarritoComponent.svelte'
    import CardCarritoProducto from './cardcarritoComponent.svelte'
    import HeaderCarrito from './tableheadercarritoComponent.svelte'

</script>
<div class="table-producto-carrito">
    <HeaderCarrito itemsTableHeader="{itemsheaders}"/>
    {#each carritoproductos as producto}
        <CardCarritoProducto detalleproductoCardCarrito={producto.NomProducto} imgproductoCardCarrito={producto.ImagenProducto} preciouniproductoCardCarrito={producto.PrecioProducto}/>
    {/each}
</div>
<style>
    .table-producto-carrito{
        width: 100%;
    }
</style>