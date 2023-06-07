<script>
	import Cards from "./Cards.svelte";
</script>

<style>
    :global(body) {
        background-image: url('./image/menu_inteligente.png');
        background-color: #91e0ff;
    }
    :global(.alacartaimg) {
        background-image: url('./image/menu-img.png');
    }
</style>

<div class="flex justify-center m-5">
    <img src="/image/logo.png" alt="A la carta" class="bg-white rounded-full m-auto border-4 px-10 border-carta-tertiary shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:max-w-2xl">
</div>
<div class="flex flex-col justify-center m-5">
    <h1 class="font-extrabold text-4xl text-center font-prompt md:text-6xl" style="text-shadow: 0.25rem 0.25rem rgba(0, 0, 0, 0.3);">Menus digitales para restaurantes:</h1>
    <h2 class="font-semibold text-xl text-center my-5 font-prompt md:my-10 md:text-3xl" style="text-shadow: 0.15rem 0.15rem rgba(0, 0, 0, 0.3);">¡Mejora la experiencia de tus clientes!</h2>
</div>
<div class="flex justify-center m-5">
    <p class="bg-white rounded-xl m-auto border-4 text-justify p-4 font-prompt border-carta-tertiary shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:max-w-2xl">Somos una empresa especializada en la creación de menús digitales para restaurantes. Ayudamos a los negocios de comida a mejorar la experiencia de sus clientes al ofrecerles un menú fácil de leer y navegar, con imágenes atractivas de sus platillos y opciones de contacto con servicios de delivery. Nuestros diseños son personalizados y adaptados a la identidad visual de cada negocio.</p>
</div>
<div class="w-full bg-center h-60 bg-cover alacartaimg bg-fixed"></div>
<Cards />
<div class="flex justify-center my-8">
    <h2 class="text-3xl font-extrabold font-prompt">Nuestos Clientes</h2>
</div>
<div class="grid grid-cols-2 m-8 gap-4">
        <img src="/image/logo-alicletas.png" alt="Alicletas" class="drop-shadow-[7.0px_7.0px_3.0px_rgba(0,0,0,0.8)] w-40">
        <img src="/image/bruneta.png" alt="La Bruneta" class="drop-shadow-[7.0px_7.0px_3.0px_rgba(0,0,0,0.8)]">
        <img src="/image/finca.png" alt="La Finca" class="drop-shadow-[7.0px_7.0px_3.0px_rgba(0,0,0,0.8)]">
        <div class="relative">
            <img src="image/streetdogs_alt.png" alt="Streetdogs" class="drop-shadow-[7.0px_7.0px_3.0px_rgba(0,0,0,0.8)] w-32">
            <p class="absolute -bottom-3 left-0 font-extrabold text-lg tracking-tighter">STREETDOGS</p>
        </div>
        <img src="/image/img1.png" alt="La Torcua" class="drop-shadow-[7.0px_7.0px_3.0px_rgba(0,0,0,0.8)]">
</div>
<footer class="sticky bottom-0 w-full bg-slate-800 h-14 mt-8 flex justify-evenly text-carta-secondary items-center text-3xl">
    <a href="https://www.facebook.com/alacarta.com.mx" target="_blank">
        <i class="fa-brands fa-square-facebook"></i>
    </a>
    <a href="https://twitter.com/alacarta_mx" target="_blank"><i class="fa-brands fa-twitter"></i></a>    
    <a href="https://wa.me/5216671606417"><i class="fa-brands fa-whatsapp"></i></a>
    <a href="mailto:hola@alacarta.com.mx"><i class="fa fa-envelope"></i></a>
</footer>