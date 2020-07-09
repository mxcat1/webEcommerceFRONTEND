<script>
    import {link} from 'svelte-spa-router'


</script>
<nav class="container-menu">
    <ul class="menu">
        <li class="menu-item">
            <a href="" class="menu-link">Noticias</a>
        </li>
        <li class="menu-item">
            <a href="/Computador" use:link class="menu-link">Computador</a>
            <ul class="submenu">
                <li class="submenu-item">
                    <a href="/Computador/Juegos" use:link class="submenu-link">Juegos</a>
                </li>
                <li class="submenu-item">
                    <a href="/Computador/Equipos" use:link class="submenu-link">Equipos</a>
                </li>
                <li class="submenu-item">
                    <a href="/Computador/Accesorios" use:link class="submenu-link">Accesorios</a>
                </li>
            </ul>
        </li>
        <li class="menu-item">
            <a href="" class="menu-link">Xbox</a>
            <ul class="submenu">
                <li class="submenu-item">
                    <a href="" class="submenu-link">Juegos</a>
                </li>
                <li class="submenu-item">
                    <a href="" class="submenu-link">Equipos</a>
                </li>
                <li class="submenu-item">
                    <a href="" class="submenu-link">Accesorios</a>
                </li>
            </ul>
        </li>
        <li class="menu-item">
            <a href="" class="menu-link">PlayStation</a>
            <ul class="submenu">
                <li class="submenu-item">
                    <a href="" class="submenu-link">Juegos</a>
                </li>
                <li class="submenu-item">
                    <a href="" class="submenu-link">Equipos</a>
                </li>
                <li class="submenu-item">
                    <a href="" class="submenu-link">Accesorios</a>
                </li>
            </ul>
        </li>
        <li class="menu-item">
            <a href="" class="menu-link">Nintendo</a>
            <ul class="submenu">
                <li class="submenu-item">
                    <a href="" class="submenu-link">Juegos</a>
                </li>
                <li class="submenu-item">
                    <a href="" class="submenu-link">Equipos</a>
                </li>
                <li class="submenu-item">
                    <a href="" class="submenu-link">Accesorios</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>

<style>
    .container-menu{
        display: flex;
        background: #282e7a;
        justify-content: center;
        min-height: 5rem;
    }
    .menu{
        margin: 0;
        display: flex;
        flex-flow: row wrap;
        padding: 0;
        justify-content: center;
        align-items: center;
    }
    ul>li{
        list-style: none;
        padding: 0 5rem;
        height: 5rem;
    }
    ul>li>a{
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        color: white;
        font-size: 1.8rem;
    }
    .menu-item:hover>.menu-link{
        color: #C7A31A;
    }
    .menu-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .menu-item:hover>.submenu{
        visibility: visible;
        height: 19.2rem;
    }
    .submenu{
        height: 0;
        padding: 0;
        display: flex;
        overflow: hidden;
        visibility: hidden;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 12rem;
        background: #282e7a;
        transition: height 1s;
    }
    .submenu-item{
        height: auto !important;
        padding: 2rem 5rem !important;
    }
    .submenu-link{
        font-size: 1.6rem;
    }
    .submenu-link:hover{
        color: #C7A31A;
    }

</style>