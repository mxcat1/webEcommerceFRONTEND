<script>
    import {onMount} from 'svelte'

    import Banner from '../components/template/banner.svelte'
    import GroupCard from '../components/principal/groupCard.svelte'


    //	Prueba productos
    let ProductosGrupo1=[
        {
            "id": 1,
            "NomProducto": "Nioh Game",
            "PrecioProducto": 65,
            "UrlImagenProducto": "./img/muestra_productos/nioh.jpg"
        },
        {
            "id": 2,
            "NomProducto": "Doom Eternal",
            "PrecioProducto": 35,
            "UrlImagenProducto": "./img/muestra_productos/doom.jpg"
        },
        {
            "id": 3,
            "NomProducto": "Dragon Ball Kakarot",
            "PrecioProducto": 70,
            "UrlImagenProducto": "./img/muestra_productos/dragon_ball.jpg"
        }
    ];
    let ProductosGrupo2=[
        {
            "id": 1,
            "NomProducto": "PC GAMER ANIMUS",
            "PrecioProducto": 8000,
            "UrlImagenProducto": "./img/muestra_productos/PC GAMER.png"
        },
        {
            "id": 2,
            "NomProducto": "Assassins Cried Unity",
            "PrecioProducto": 20,
            "UrlImagenProducto": "./img/muestra_productos/unity.jpg"
        },
        {
            "id": 3,
            "NomProducto": "PlayStation Plus X 1Año",
            "PrecioProducto": 60,
            "UrlImagenProducto": "./img/muestra_productos/PS PLUS.jpg"
        }
    ];
    let ProductosGrupo3=[
        {
            "id": 1,
            "NomProducto": "DOOM Eternal para PC",
            "PrecioProducto": 85,
            "UrlImagenProducto": "./img/muestra_productos/DOOM-Eternal.png"
        },
        {
            "id": 2,
            "NomProducto": "Call of Duty Modern Warfare",
            "PrecioProducto": 75,
            "UrlImagenProducto": "./img/muestra_productos/moder warfare.jpg"
        },
        {
            "id": 3,
            "NomProducto": "Call of Duty Warzone",
            "PrecioProducto": 50,
            "UrlImagenProducto": "./img/muestra_productos/COD_W.jpg"
        }
    ];

    // const uri='https://cheapshark-game-deals.p.rapidapi.com/games?limit=3&title=batman&exact=0';
    // let games =[]
    // onMount(async ()=>{
    //     const res=await fetch(uri,{
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
    //             "x-rapidapi-key": "ef432b9507mshc644713f53b062dp1c2f3ajsnc4c224ce186d"
    //         }
    //     })
    //     games=await res.json()
    //     console.log(games)
    //     console.log(ProductosGrupo1)
    //
    // })

</script>
<svelte:head>
    <title>JetGames Store</title>
</svelte:head>
<Banner/>

<main class="container-principal">
    <GroupCard nameSection="NOVEDADES" Productos="{ProductosGrupo1}"/>
<!--    <GroupCard nameSection="NOVEDADES" Productos="{games}"/>-->
    <GroupCard nameSection="PROMOCIONES" Productos="{ProductosGrupo2}"/>
    <GroupCard nameSection="MAS VENDIDOS" Productos="{ProductosGrupo3}"/>
</main>

<style>
    .container-principal{
        margin: 1rem 32rem;
    }
    @media (max-width: 1366px) {
        .container-principal{
            margin: 1rem 11rem;
        }
    }

</style>
