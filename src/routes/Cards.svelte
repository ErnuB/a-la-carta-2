<script>
  let items = [
    {
      nombre: 'Paquete Básico',
      secciones: 3,
      pyd: "Logotipo y hasta 1 foto por sección",
      precio: "$1,620"
    },
    {
      nombre: 'Paquete Intermedio',
      secciones: 4,
      pyd: "Logotipo, hasta 1 foto por sección + 1 y tipografías",
      precio: "$2,552"
    },
    {
      nombre: 'Paquete Personalizado',
      secciones: 5,
      pyd: "Logotipo, hasta 1 foto por sección + 1, tipografías y botones (what's app, teléfono u otros)",
      precio: "$3,480"
    },
    {
      nombre: 'Paquete Avanzado',
      secciones: "5 ó más",
      pyd: "Modal para mostrar imágenes por platillo (hasta 20), tipografías y botones (what's app, teléfono u otros)",
      precio: "$4,640"
    },
  ];

  let containerWidth;
  let scrolledLeft = 0;

  $: if (containerWidth == scrolledLeft) {
    console.log('hit scroll snap');
  }

  function handleSlide(direction) {
    const container = document.querySelector('.tab-panels-container');
    const panelWidth = containerWidth;
    const numPanels = items.length;
    const maxScrollLeft = (panelWidth * numPanels) - containerWidth;

    if (direction === "left" && scrolledLeft < maxScrollLeft) {
      scrolledLeft += panelWidth;
      container.scroll({ left: scrolledLeft, behavior: 'smooth' });
    } else if (direction === "right" && scrolledLeft > 0) {
      scrolledLeft -= panelWidth;
      container.scroll({ left: scrolledLeft, behavior: 'smooth' });
    }
  }
</script>

<style>
  .tab-panels-container {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    height: 100%;
    width: 100vw;
    display: flex;
  }

  .tab-panel {
    scroll-snap-align: start;
    /* only supported in Chrome */
    scroll-snap-stop: always;
    flex: 1 0 auto;
  }
</style>

<div class="tab-panels-container font-prompt scroll-p-4 snap-mandatory" bind:clientWidth={containerWidth} on:scroll={({ target }) => scrolledLeft = target.scrollLeft}>
  {#each items as item}
  <div class="relative tab-panel flex justify-around p-4 bg-white flex-col rounded-3xl w-11/12 m-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] border-2 border-carta-tertiary">
    <div>
      <i class="fa-solid fa-chevron-left top-1/2 -left-4 absolute text-3xl text-carta-primary cursor-pointer" style="
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
        " on:click={() => handleSlide("right")}></i>
      <i class="fa-solid fa-chevron-right top-1/2 -right-4 absolute text-3xl text-carta-primary cursor-pointer" style="
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
        " on:click={() => handleSlide("left")}></i>
    </div>
    <div class="tab-panel-content text-carta-primary text-3xl font-extrabold">
      {item.nombre}
    </div>
    <div class="my-2">
      <p class="text-xl font-semibold p-2">Secciones de menú</p>
      <div class="flex font-light px-2">
        <p>{item.secciones} secciones de menú</p>
      </div>
    </div>
    <div class="my-2">
      <p class="text-xl font-semibold p-2">Personalización y diseño</p>
      <div class="flex font-light px-2">
        <p>{item.pyd}</p>
      </div>
    </div>
    <div class="self-end">
      <div class="flex font-light px-2">
        <p class="text-carta-primary text-2xl font-bold">{item.precio}</p>
      </div>
    </div>
    <div class="self-center my-8">
      <a href="https://wa.me/5216671606417" target="_blank" class="text-carta-primary border-2 border-carta-tertiary bg-carta-secondary p-2 rounded-full">¡Contrata ahora!</a>
    </div>
  </div>
  {/each}
</div>
