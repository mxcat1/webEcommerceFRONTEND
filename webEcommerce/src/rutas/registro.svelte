<script>
    import {location} from 'svelte-spa-router'

    import TituloPrincipal from '../components/principal/titleComponent.svelte'
    import InputRegistro from '../components/principal/inputComponent.svelte'
    import CheckBox from '../components/principal/checkboxComponent.svelte'
    import ButtonRegistrar from '../components/principal/botonComponent.svelte'

</script>
<svelte:head>
    <title>{$location.slice(1)}</title>
</svelte:head>
<main class="container-principal">
    <TituloPrincipal texttitle="NUEVO USUARIO"/>
    <div class="registro-container">
        <div class="col-register">
            <InputRegistro labelInput="Nombres" idInput="txtnombres" tipoInput="text" placeholderInput="Ingrese sus Nombres"/>
            <InputRegistro labelInput="Apellidos" idInput="txtapellidos" tipoInput="text" placeholderInput="Ingrese sus Apellidos"/>
        </div>
        <div class="col-register">
            <InputRegistro labelInput="Correo" idInput="txtemail" tipoInput="email" placeholderInput="Ingrese su Correo"/>
            <InputRegistro labelInput="Confirme su Correo" idInput="txtemailconfirm" tipoInput="email" placeholderInput="Confirme su Correo"/>
        </div>
        <div class="col-register">
            <InputRegistro labelInput="Contraseña" idInput="txtpass" tipoInput="password" placeholderInput="Contraseña"/>
            <InputRegistro labelInput="Confirme su Contraseña" idInput="txtpassconfirm" tipoInput="password" placeholderInput="Confirme su Contraeña"/>
        </div>
        <div class="col-register-6">
            <InputRegistro labelInput="Celular" idInput="txtcelular" tipoInput="text" placeholderInput="Ingrese su numero de celular"/>
        </div>
        <div class="col-register columna">
            <CheckBox idCheckBox="chkacuerdo1" labelCheckBox="Enviar Noticias y Promociones"/>
            <CheckBox idCheckBox="chkacuerdo2" labelCheckBox="Acepto los terminos y condiciones"/>
        </div>
        <div class="boton-registrar">
            <ButtonRegistrar tipoBoton="button" textoBoton="Registrarse" claseBoton="opcional" claseAncho="perzonalizado"/>
        </div>
    </div>
</main>

<style>
    .container-principal{
        margin: 2rem 32rem;
        display: flex;
        padding: 4.12rem 0;
        flex-direction: column;
        align-items: center;
    }
    .registro-container{
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .col-register{
        width: 100%;
        display: flex;
    }
    .columna{

        flex-direction: column;
        align-items: center;
    }
    .boton-registrar{
        width: 40rem;
        display: flex;
        justify-content: center;
    }
    .col-register-6{
        width: 50%;
        display: flex;
        justify-content: left;
        align-self: flex-start;
    }
    @media (max-width: 1366px) {
        .container-principal{
            margin: 1rem 12rem;
        }
    }
</style>