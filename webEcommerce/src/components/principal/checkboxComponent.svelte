<script>
    export let idCheckBox;
    export let labelCheckBox;
</script>
<div class="check-content">
    <input type="checkbox" name="{idCheckBox}" class="check-input" id="{idCheckBox}">
    <label for="{idCheckBox}" class="label-input">{labelCheckBox}</label>
</div>
<style>
    .check-content{
        padding: 0.3rem;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .check-input{
        margin: 1rem;
        width: 1.8rem;
        height: 1.8rem;
    }
    .label-input{
        font-family: "Roboto Light",sans-serif;
        font-size: 1.6rem;
        font-weight: normal;
    }
</style>