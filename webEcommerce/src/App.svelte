<script>
	import Header from './components/template/header.svelte'
	import Footer from './components/template/footer.svelte'
	import Router from 'svelte-spa-router'
	import routes from './routes'


</script>

<Header/>
<Router {routes} />
<Footer/>

