<script>
    import CardProducto from './cardProduct.svelte';
    export let nameSection;
    export let Productos;
</script>
<div class="group-products">
    <div class="group-card-title">
        <h3 class="title-group">{nameSection}</h3>
    </div>
    <div class="group-content">
        {#each Productos as producto}
            <CardProducto urlImg="{producto.UrlImagenProducto}" nameProducto="{producto.NomProducto}" priceProducto="{producto.PrecioProducto}"/>
        {/each}
    </div>
</div>

<style>
    .group-products{
        background: white;
        margin-top: 1rem;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column wrap;
        font-family: "Roboto Light", sans-serif;
    }
    h3{
        font-size: 2.8rem;
        font-weight: bolder;
    }
    .group-content{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    @media (max-width: 1024px) {
        .group-content{
            flex-flow: column wrap;
        }
    }
</style>