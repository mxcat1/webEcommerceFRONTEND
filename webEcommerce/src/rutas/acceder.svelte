<script>
    import TituloPrincipal from '../components/principal/titleComponent.svelte'
    import InputUsuario from '../components/principal/inputComponent.svelte'
    import ButtonLogin from '../components/principal/botonComponent.svelte'
</script>
<main class="container-principal">
    <TituloPrincipal texttitle="INICIAR SESIÓN"/>
    <div class="content-login">
        <InputUsuario tipoInput="email" idInput="emailUsuario" labelInput="Correo Electronico:" placeholderInput="Ingrese su Correo electronico"/>
        <InputUsuario tipoInput="password" idInput="contraUsuario" labelInput="Contraseña:" placeholderInput="Ingrese su Contraseña"/>
        <ButtonLogin claseBoton="opcional" textoBoton="ACCEDER" tipoBoton="button"/>
        <p class="text-regitrarse">No tienes una cuenta aun? <a href="" class="link-registrarse">Registrate</a></p>
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
    .content-login{
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
    }
    .text-regitrarse{
        padding: 2rem;
        font-family: "Roboto Light", sans-serif;
        font-size: 1.6rem;
        align-self: flex-end;
    }
    .link-registrarse{
        text-decoration: none;
        font-size: 1.8rem;
    }
    @media (max-width: 1366px) {
        .container-principal{
            margin: 1rem 11rem;
        }
    }
</style>