<script context="module">
  export const prerender = true;
</script>

<script>
  import { pets } from "../stores/petstore";
  import PetList from "../components/PetList.svelte";
  import PetListForm from "../components/PetListForm.svelte";

  let showForm = false;

  // Create a function to toggle showForm on button click
  const toggleShowForm = () => {
    showForm = !showForm;
  };
</script>

<svelte:head>
  <title>Pets can date</title>
</svelte:head>

<section class="py-8 px-4 static">
  <div class="">
    <a
      href="/"
      class="flex ml-32 mb-16 font-adelia uppercase items-center md:justify-start justify-center text-gray-900"
    >
      <img src="/favicon.png" alt="logo" class="w-10" />
      <span class="ml-3 text-xl">Pets can date</span>
    </a>

    <div class="justify-center items-center flex flex-col mt-8">
      <h1
        class="sm:text-4xl text-2xl font-black mb-10 text-center w-2/4 font-pumpkin"
      >
        Let’s get your baby hooked up with another baby! *winks winks*
      </h1>
      <p
        class="mb-10 opacity-70 text-base leading-relaxed text-center w-2/4 font-sfpro"
      >
        You know how one time you met someone amazing, you bonded with them and
        became friends, eventually ya'll fell in love, yeah that feeling. Pets
        deserve it too
      </p>
      <!-- create a button that when clicked, will add a new pet to the store -->
      <button
        class="bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl"
        on:click={toggleShowForm}>List Your Pet</button
      >
      {#if showForm}
        <PetListForm />
      {/if}
      <!-- show an image of a pet -->
      <img
        class="w-full sm:w-1/4 md:w-auto lg:w-auto xl:w-1/3 h-96  mb-10"
        alt="pet"
        src="/pet.png"
      />
    </div>
    <div>
      <!-- create a circle to appear on the left of the page with a background color of red -->
      <div
        class="absolute top-24 -left-80 font-bold text-gray-700 bg-ecllipse rounded-full flex items-center justify-center font-sfpro"
        style="height: 550px; width: 550px; font-size: 170px;"
      />
    </div>
    <div>
      <div
        class="absolute top-3/4 left-3/4 font-bold text-gray-700 bg-ecllipse rounded-full flex items-center justify-center font-sfpro"
        style="height: 550px; width: 550px; font-size: 170px;"
      />
    </div>
    <!-- <div>
      <div
        class="absolute top-3/4 left-3/4  bg-gray-500 rounded-full flex  font-sfpro"
        style="height: 550px; width: 550px; font-size: 170px;"
      />
    </div> -->
  </div>
  <PetList />
</section>
