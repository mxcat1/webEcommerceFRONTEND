<script>
    export let itemsTableHeader

</script>
<div class="card-producto-carrito-header">
    {#each itemsTableHeader as item}
        <div class="title-header">
            <p class="title-text">{item}</p>
        </div>
    {/each}
</div>
<style>
    .card-producto-carrito-header{
        box-sizing: border-box;
        display: flex;
        padding: 2rem;
        width: 100%;
    }
    .title-header{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1.5rem;
        text-transform: uppercase;
    }
    .title-text{
        font-family: "Roboto Light", sans-serif;
        font-size: 1.6rem;
        font-weight: bolder;
    }
</style>