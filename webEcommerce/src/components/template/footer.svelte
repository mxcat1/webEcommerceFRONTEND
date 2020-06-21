<footer class="container-footer">
    <div class="content-footer">
        <div class="column-3">
            <p class="title-content-footer">MEDIOS DE PAGO</p>
            <img src="./img/icons/tarjetas.png" alt="targetas de credito" class="img-content-footer">
        </div>
        <div class="column-3">
            <p class="title-content-footer">ENLACES DE INTERES</p>
            <ul class="menu-footer">
                <li class="menu-footer-item">
                    <a href="" class="menu-footer-link">Nosotros</a>
                </li>
                <li class="menu-footer-item">
                    <a href="" class="menu-footer-link">Aviso de privacidad</a>
                </li>
                <li class="menu-footer-item">
                    <a href="" class="menu-footer-link">Condiciones de uso</a>
                </li>
            </ul>
        </div>
        <div class="column-3">
            <p class="title-content-footer">SIGUENOS EN:</p>
            <div class="social">
                <div class="social-icon-1 p-1">
                    <a href="" class="social-item">
                        <img src="./img/icons/twitter-square.svg" alt="twitter" class="img-social-ico">
                    </a>
                </div>
                <div class="social-icon-2 p-1">
                    <a href="" class="social-item">
                        <img src="./img/icons/facebook-square.svg" alt="facebook" class="img-social-ico">
                    </a>
                </div>
                <div class="social-icon-3 p-1">
                    <a href="" class="social-item">
                        <img src="./img/icons/instagram.svg" alt="instagram" class="img-social-ico">
                    </a>
                </div>
            </div>
        </div>
        <div class="column-3">
            <p class="title-content-footer">ATENCION AL CLIENTE</p>
            <p class="text-footer">Número: 960984854 / 922990079</p>
            <p class="text-footer">Lunes a sábado: 10:00 am a 05:00 pm</p>
            <p class="text-footer">Correo: JetgamesStore@gmail.com</p>
        </div>
    </div>
</footer>

<style>
    .container-footer{
        font-family: Verdana, sans-serif;
        background: #282e7a;
    }
    .content-footer{
        padding: 3rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    .column-3{
        flex: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title-content-footer{
        font-size: 1.8rem;
        font-weight: lighter;
        color: #C7A31A;
        margin: 0;
    }
    .img-content-footer{
        width: 19rem;
    }
    .menu-footer{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .menu-footer-item{
        list-style: none;
        padding: 1rem 15rem;
    }
    @media (max-width: 1366px) {
        .menu-footer-item{
            padding: 1rem 5rem;
        }
    }
    .menu-footer-link{
        text-decoration: none;
        color: #f2f2f2;
        font-family: "Roboto Light", sans-serif;
        font-weight: lighter;
        font-size: 1.8rem;
    }
    .social{
        height: 12rem;
        display: flex;
        padding: 1rem 0rem;
    }
    .social-icon-1{
        align-self: flex-end;
    }
    .social-icon-2{
        align-self: center;
    }
    .social-icon-3{
        align-self: flex-start;
    }
    .p-1{
        padding: 0.8rem;
    }
    .text-footer{
        font-family: "Roboto Light", sans-serif;
        font-weight: lighter;
        font-size: 1.6rem;
        margin: 0;
        padding: 1rem;
        color: #f2f2f2;
    }
</style>