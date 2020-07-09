<script>
    export let imgproductoCardCarrito
    export let detalleproductoCardCarrito
    export let preciouniproductoCardCarrito

    let cantidad=1;
    let precio_total
    $: cantidad;
    $: precio_total=preciouniproductoCardCarrito*cantidad

    import NumberInput from './numberinputComponent.svelte'
</script>
<div class="card-producto-carrito-body">
    <div class="card-producto-carrito-item">
        <div class="card-producto-carrito-item-img">
            <img src="{imgproductoCardCarrito}" class="producto-img" alt="">
        </div>
        <div class="card-producto-carrito-item-detalle">
            <p>{detalleproductoCardCarrito}</p>
        </div>
    </div>
    <div class="card-producto-carrito-cantidad">
        <NumberInput idNumberInput="nbcard-carrito" minNumberInput="1" maxNumberInput="100" clase="centrado" bind:value="{cantidad}"/>
    </div>
    <div class="card-producto-carrito-btndelete">
        <a href=""class="btn-delete">
            <img src="./img/icons/delete.svg" class="btn-ico-delete" alt="Boton para borrar">
        </a>
    </div>
    <div class="card-producto-carrito-precio-unitario">
        <p class="precio-unitario">S/. {preciouniproductoCardCarrito}</p>
    </div>
    <div class="card-producto-carrito-precio-total">
        <p class="precio-total">S/. {precio_total}</p>
    </div>
</div>
<style>
    .card-producto-carrito-body{
        width: 100%;
        display: flex;
        margin: 1rem 0;
        padding: 2rem;
        justify-content: space-between;
        font-family: "Roboto Light", sans-serif;
        box-sizing: border-box;
    }
    .card-producto-carrito-body>div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-producto-carrito-item{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card-producto-carrito-item-img{
        width: 15rem;
    }
    .producto-img{
        width: 100%;
    }
    p{
        font-size: 1.8rem;
    }
    .card-producto-carrito-btndelete{
        width: 100%;
    }
    .btn-delete{
        text-decoration: none;
    }
    .btn-ico-delete{
        width: 3rem;
    }

</style>