<script>
    import {link} from 'svelte-spa-router'
    import {location} from 'svelte-spa-router'
    import { onMount } from 'svelte';

    import TituloPrincipal from '../components/principal/titleComponent.svelte'
    import TituloNormal from '../components/principal/titulonormalComponent.svelte'
    import CardProducto from '../components/principal/cardProduct.svelte'
    import RadioButton from '../components/principal/radioleftComponent.svelte'
    import SelectInput from '../components/principal/comboboxComponent.svelte'
    import NumberInput from '../components/principal/numberinputComponent.svelte'
    import BotonCatalogo from '../components/principal/botonComponent.svelte'
    import ContenedorPrincipal from '../components/principal/containerPrincipalComponent.svelte'

    export let params = {}

    let generos=['Accion','Aventura','Social','Peleas','Deportes']

    // const uri='https://cheapshark-game-deals.p.rapidapi.com/games?limit=60&title=batman&exact=0';
    // let games
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
    //
    // })

</script>
<svelte:head>
    <title>{params.Plataforma}{params.Categoria===null?'':'-'+params.Categoria}</title>
</svelte:head>
<ContenedorPrincipal>
    <div class="titulo-catalogo">
        <TituloPrincipal texttitle="{params.Plataforma.toUpperCase()}{params.Categoria===null?'':' / '+params.Categoria.toUpperCase()}"/>
    </div>
    <div class="container-catalogo">
        <div class="filtro-catalogo">
            <div class="group-filtro-plataforma">
                <TituloNormal texttitulonormal="PLATAFORMA"/>
                <RadioButton nameRadioInput="grouprbplataforma" idRadioInput="rbfiltropc" labelRadioInput="PC"/>
                <RadioButton nameRadioInput="grouprbplataforma" idRadioInput="rbfiltroxbox" labelRadioInput="Xbox"/>
                <RadioButton nameRadioInput="grouprbplataforma" idRadioInput="rbfiltroplay" labelRadioInput="PlayStation"/>
                <RadioButton nameRadioInput="grouprbplataforma" idRadioInput="rbfiltronintendo" labelRadioInput="Nintendo"/>
            </div>
            <div class="group-filtro-categoria">
                <TituloNormal texttitulonormal="CATEGORIA"/>
                <RadioButton nameRadioInput="grouprbcategoria" idRadioInput="rbfiltroequipos" labelRadioInput="Equipos"/>
                <RadioButton nameRadioInput="grouprbcategoria" idRadioInput="rbfiltrojuegos" labelRadioInput="Juegos"/>
                <RadioButton nameRadioInput="grouprbcategoria" idRadioInput="rbfiltroaccesorios" labelRadioInput="Accesorios"/>
            </div>
            <div class="group-filtro-genero">
                <TituloNormal texttitulonormal="GENERO"/>
                <SelectInput idComboBox="cbgenero" contenidoComboBox="{generos}"/>
            </div>
            <div class="group-filtro-orden">
                <TituloNormal texttitulonormal="ORDEN"/>
                <RadioButton nameRadioInput="grouprborden" idRadioInput="rbfiltronombre" labelRadioInput="Por Nombre"/>
                <RadioButton nameRadioInput="grouprborden" idRadioInput="rbfiltroprecio" labelRadioInput="Por Precio"/>
            </div>
            <div class="group-filtro-precio">
                <TituloNormal texttitulonormal="PRECIO"/>
                <NumberInput idNumberInput="nbpreciodesde" labelNumberInput="Desde:" minNumberInput="100" maxNumberInput="5000"/>
                <NumberInput idNumberInput="nbpreciohasta" labelNumberInput="Hasta:" minNumberInput="100" maxNumberInput="5000"/>
            </div>
            <div class="group-filtro-btn">
                <BotonCatalogo textoBoton="Buscar" tipoBoton="button" claseBoton="opcional" claseAncho="normal"/>
            </div>
        </div>
        <div class="content-catalogo-producto">
            <CardProducto priceProducto="15.99" botonesProducto="true" nameProducto="Producto 1" urlImg="./img/muestra_productos/PC GAMER.png"/>
            <CardProducto priceProducto="15.99" botonesProducto="true" nameProducto="Producto 1" urlImg="./img/muestra_productos/PC GAMER.png"/>
            <CardProducto priceProducto="15.99" botonesProducto="true" nameProducto="Producto 1" urlImg="./img/muestra_productos/PC GAMER.png"/>
            <CardProducto priceProducto="15.99" botonesProducto="true" nameProducto="Producto 1" urlImg="./img/muestra_productos/PC GAMER.png"/>
        </div>

    </div>
</ContenedorPrincipal>
<style>
    .titulo-catalogo{
        width: 100%;
        background: #faffff;
        border-radius: 6px;
        box-shadow: -1px 11px 5px -3px rgba(0,0,0,0.2);
    }
    .container-catalogo{
        padding: 5rem 0;
        display: flex;
    }
    .filtro-catalogo{
        width: 20%;
        background: #faffff;
        border-radius: 4px;
    }
    .content-catalogo-producto{
        margin: 0 3rem;
        padding: 2rem 2rem;
        width: 80%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-content: flex-start;
        background: #faffff;
    }
    .group-filtro-btn{
        padding: 2rem;
        display: flex;
        justify-content: center;
    }
</style>