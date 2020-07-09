<script>
    import BotonProducto from './botonComponent.svelte'

    export let urlImg
    export let nameProducto
    export let priceProducto
    export let botonesProducto=false
</script>
<div href="" class="card-product">
    <a href="" class="card-product-img">
        <img src="{urlImg}" alt="imagen producto" class="img-product">
    </a>
    <a href="" class="card-title-product">
        <p class="title-product">{nameProducto}</p>
    </a>
    <div class="card-product-price">
        <p class="price-product">S./ {priceProducto}</p>
    </div>
    {#if botonesProducto}
        <div class="botonesproducto">
            <BotonProducto textoBoton="Comprar" claseBoton="secundario" tipoBoton="button" clase="centrado"/>
            <BotonProducto textoBoton="Agregar al Carrito" claseBoton="secundario" tipoBoton="button" clase="centrado"/>
        </div>
    {/if}
</div>
<style>
    .card-product{
        width: 100%;
        flex: 0 1 28%;
        margin: 1rem 2rem;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        font-family: "Roboto Light", sans-serif;
        font-weight: lighter;
        color: black;
        text-decoration: none;
        height: min-content;
    }
    .card-title-product{
        text-decoration: none;
    }
    .card-product-img{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .img-product{
        width: 100%;
    }
    .title-product, .price-product{
        font-size: 2.2rem;
        margin: 0.5rem;
        color: black;
    }
    .botonesproducto{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>