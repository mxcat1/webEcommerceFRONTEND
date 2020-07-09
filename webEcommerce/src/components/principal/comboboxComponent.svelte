<script>
    export let labelComboBox=''
    export let idComboBox
    export let contenidoComboBox
</script>
<div class="combo-content">
    {#if labelComboBox!==''}
        <label for="{idComboBox}" class="label-input">{labelComboBox}</label>
    {/if}
    <select name="{idComboBox}" id="{idComboBox}" class="combo-input">
        <option value="" class="opdefault">Seleccione</option>
        {#each contenidoComboBox as item}
            <option value="{item}">{item}</option>
        {/each}
    </select>
</div>
<style>
    .combo-content{
        padding: 2rem;
        display: flex;
        justify-content: center;
    }
    .combo-input{
        width: 100%;
        padding: 0.5rem;
        border-radius: 4px;
        border: 0.5px solid rgba(95,95,95,0.4);
        font-family: "Roboto Light", sans-serif;
        font-size: 1.8rem;
        color: #282e7a;
        height: 3.5rem;
    }
    .combo-input option{
        font-size: 1.8rem;
    }
    .opdefault{
        color: #9fa4a4;
    }
    .label-input{
        font-family: "Roboto Light",sans-serif;
        font-size: 1.8rem;
        font-weight: bolder;
    }

</style>