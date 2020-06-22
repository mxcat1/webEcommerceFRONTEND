<script>
    export let urlImg;
    export let nameProducto;
    export let priceProducto;
</script>
<a href="" class="card-product">
    <div class="card-product-img">
        <img src="{urlImg}" alt="imagen producto" class="img-product">
    </div>
    <div class="card-title-product">
        <p class="title-product">{nameProducto}</p>
    </div>
    <div class="card-product-price">
        <p class="price-product">S./ {priceProducto}</p>
    </div>
</a>
<style>
    .card-product{
        width: 100%;
        flex: 1 1 25%;
        padding: 1rem 2rem;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        font-family: "Roboto Light", sans-serif;
        font-weight: lighter;
        color: black;
        text-decoration: none;
    }
    .card-product-img{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .img-product{
        width: 70%;
    }
    .title-product, .price-product{
        font-size: 2.2rem;
        margin: 0.5rem;
    }

</style>