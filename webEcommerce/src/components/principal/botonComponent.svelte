<script>
    export let tipoBoton
    export let claseBoton
    export let textoBoton
</script>
<div class="boton-content">
    <button type="{tipoBoton}" class="btn btn-{claseBoton}">{textoBoton}</button>
</div>
<style>
    .boton-content{
        align-self: flex-end;
        padding: 1rem;
    }
    .btn{
        padding: 1rem;
        font-family: "Roboto Light", sans-serif;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .btn-primario{
        background: #5362ff;
        color: #f2f2f2;
        font-weight: normal;
        font-size: 2rem;
    }
    .btn-opcional{
        font-size: 2rem;
        font-weight: lighter;
        background: #C7A31A;
        color: #f2f2f2;
    }
    button:focus{
        outline: none;
    }

</style>