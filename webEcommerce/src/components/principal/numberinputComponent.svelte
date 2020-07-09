<script>
    export let labelNumberInput=''
    export let idNumberInput
    export let maxNumberInput
    export let minNumberInput
    export let clase=''
    export let value=null

</script>
<div class="numberinput-content {clase}">
    {#if labelNumberInput!==''}
        <label for="{idNumberInput}" class="label-input">{labelNumberInput}</label>
    {/if}
    {#if value===null}
        <input type="number" name="{idNumberInput}" id="{idNumberInput}" min="{minNumberInput}" max="{maxNumberInput}" class="number-input">
    {:else}
        <input type="number" name="{idNumberInput}" id="{idNumberInput}" min="{minNumberInput}" max="{maxNumberInput}" class="number-input" bind:value={value}>
    {/if}
</div>
<style>
    .numberinput-content{
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .centrado{
        justify-content: center;
    }
    .number-input{
        width: 40%;
        padding: 0.8rem;
        border: 0.5px solid rgba(95,95,95,0.4);
        font-family: "Roboto Light", sans-serif;
        font-size: 1.8rem;
        color: #282e7a;
        height: 1.5rem;

    }
    .label-input{
        font-family: "Roboto Light",sans-serif;
        font-size: 1.8rem;
        font-weight: bolder;
        color: #282e7a;
    }
</style>