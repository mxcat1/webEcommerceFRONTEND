<script>
    export let tipoInput;
    export let idInput;
    export let placeholderInput;
    export let labelInput

</script>
<div class="input-content">
    <label for="{idInput}" class="label-input">{labelInput}</label>
    <input type="{tipoInput}" id="{idInput}" placeholder="{placeholderInput}" class="input-text">
</div>
<style>
    .input-content{
        padding: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .input-text{
        padding: 0.7rem;
        border: none;
        border-radius: 4px;
        font-family: "Roboto Light", sans-serif;
        font-weight: normal;
        font-size: 2rem;
    }
    .input-text::placeholder{
        color: #E0DDDD;
        font-size: 1.8rem;
    }
    .input-text:focus{
        outline: none;
    }
    .label-input{
        font-family: "Roboto Light",sans-serif;
        font-size: 1.8rem;
        font-weight: bolder;
    }
</style>