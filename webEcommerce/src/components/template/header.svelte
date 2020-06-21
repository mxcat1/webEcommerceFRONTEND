<script>
    import Menu from './menu.svelte'
</script>
<header>
    <div class="content-header">
        <div class="logo">
            <img class="logo-img" src="./img/logo.svg" alt="Logo-empresa">
        </div>
        <div class="search-form">
            <input type="text" class="search-input" id="txtSearch" name="txtSearch" placeholder="Buscar">
            <div class="search-ico"></div>
        </div>
        <div class="opcions">
            <div class="login">
                <img src="./img/icons/user.svg" alt="user-login-icons" class="user-login-icon">
                <p>Acceder</p>
            </div>
            <div class="shop-car">
                <img src="./img/icons/shop-car.svg" alt="shop car">
            </div>
        </div>
    </div>
</header>
<Menu/>

<style>
    header{
        margin: 0 32rem auto;
        font-family: 'Open Sans', sans-serif;
    }
    .content-header{
        display: flex;
        margin: 1rem;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        display: flex;
    }
    .logo-img{
        width: 10rem;
    }
    .search-form{
        display: flex;
        align-items: center;
    }
    .search-input{
        width: 50rem;
        height: 3rem;
        border: 1px #E0DDDD solid;
        border-radius: 4px;
        font-size: 1.6rem;
        padding: 0.5rem;
    }
    .search-input::placeholder{
        color: #E0DDDD;
    }
    .search-ico{
        position: relative;
        right: 3rem;
        width: 2rem;
        height: 2rem;
        background: url("/img/icons/search.svg") no-repeat;
        background-size: contain;
    }
    .opcions{
        display: flex;
        align-items: center;
    }
    .login{
        display: flex;
        margin: 0 2rem;
    }
    .login>p{
        font-size: 1.6rem;
    }
    .shop-car{
        margin: 0 2rem;
    }
    @media (max-width: 1366px) {
        header{
            margin: 0 12rem auto;
        }
    }
</style>