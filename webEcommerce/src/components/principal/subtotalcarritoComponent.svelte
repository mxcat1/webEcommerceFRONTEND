<script>
    export let precioEnvio
    export let precioSubtotal
    export let Descuento
    export let precioTotal

    import BotonPagar from './botonComponent.svelte'
</script>
<div class="subtotal-carrito-content">
    <div class="subtotal-contenido">
        <p><span>Precio Envio: </span><span>S/. {precioEnvio}</span></p>
        <p><span>Subtotal: </span><span>S/. {precioSubtotal}</span></p>
        <p><span>Descuento: </span><span>S/. {Descuento}</span></p>
        <p><span class="subtotal-text">Total a Pagar: </span><span class="subtotal-precio-total">S/. {precioTotal}</span></p>
    </div>
    <div class="btn-pagar">
        <BotonPagar tipoBoton="button" textoBoton="Pagar" claseBoton="big" clase="perzonalizado"/>
    </div>
</div>
<style>
    .subtotal-carrito-content{
        box-sizing: border-box;
        width: 100%;
        border: 0.5px solid #9fa4a4;
        border-radius: 4px;
    }
    .subtotal-contenido{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
    p{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    p>span{
        font-family: "Roboto Light", sans-serif;
        font-size: 1.6rem;
    }
    .subtotal-text, .subtotal-precio-total{
        font-size: 1.7rem;
        font-weight: bolder;
    }
    .btn-pagar{
        display: flex;
        justify-content: center;
    }
</style>