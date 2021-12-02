<script context="module">
  import { browser, dev } from "$app/env";
  import { pets } from "../stores/petstore";
  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  //   export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  //   export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  //   export const prerender = true;
</script>

<svelte:head>
  <title>Pets</title>
</svelte:head>

<section class="px-24 mx-auto bg-ecllipse">
  <div class="justify-center items-center flex flex-col mt-8 py-24 ">
    <h1
      class="sm:text-4xl text-2xl font-black mb-10 text-center w-2/4 font-adelia"
    >
      Peep our gorgeous pets
    </h1>
    <p
      class="mb-8 opacity-70 text-base leading-relaxed text-center w-2/4 font-sfpro"
    >
      You know what? take a moment and look through our list of gorgeous pets.
      Assuming you don't spend all day looking at these cuties, go ahead and
      list your own pet!
    </p>
  </div>

  <section class="text-white">
    <div class="px-5 mx-auto">
      <div class="flex flex-wrap -m-4">
        {#each $pets as pet}
          <div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 ">
            <div
              class="h-full bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-400 hover:to-red-400 rounded-lg overflow-hidden"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={pet.image}
                alt="pets"
              />
              <div class="p-6 items-center mx-auto">
                <h1 class="title-font text-lg font-medium mb-3 font-pumpkin">
                  {pet.name}, {pet.age}
                </h1>
                <p class="leading-relaxed mb-3 font-sfpro">
                  {pet.funfact}
                </p>
                <button
                  class="flex mt-8 mb-8 mx-auto text-center font-bold py-2 px-4 rounded-full border border-white  font-pumpkin "
                >
                  Connect with {pet.name}
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</section>
