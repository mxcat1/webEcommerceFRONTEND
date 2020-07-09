<script>
    export let tipoBoton
    export let claseBoton
    export let textoBoton
    export let clase="normal"
</script>
<div class="boton-content {clase}">
    <button type="{tipoBoton}" class="btn btn-{claseBoton}">{textoBoton}</button>
</div>
<style>
    .boton-content{
        align-self: flex-end;
        padding: 1rem;
    }
    .normal{
        width: auto;
    }
    .perzonalizado{
        width: 100%;
    }
    .centrado{
        align-self: center;
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
    .btn-secundario{
        background: #ff4b4c;
        color: #f2f2f2;
        font-weight: normal;
        font-size: 1.6rem;
    }
    .btn-secundario:hover{
        background: #bf413e;
    }
    .btn-opcional{
        font-size: 2rem;
        font-weight: lighter;
        background: #C7A31A;
        color: #f2f2f2;
    }
    .btn-big{
        width: 100%;
        font-size: 2rem;
        font-weight: lighter;
        background: #C7A31A;
        color: #f2f2f2;
    }
    button:focus{
        outline: none;
    }

</style>