<script>
    export let idRadioInput
    export let nameRadioInput
    export let labelRadioInput
</script>
<div class="radio-left-content">
    <label for="{idRadioInput}" class="label-input">{labelRadioInput}</label>
    <input type="radio" id="{idRadioInput}" name="{nameRadioInput}" class="radio-left-input" >
</div>
<style>
    .radio-left-content{
        padding: 1rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .radio-left-input{
        margin: 1rem;
        width: 1.8rem;
        height: 1.8rem;
    }
    .label-input{
        color: #282e7a;
        font-family: "Roboto Light",sans-serif;
        font-size: 1.6rem;
        font-weight: bolder;
    }
</style>