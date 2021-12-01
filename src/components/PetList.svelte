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

<script>
  //   const newPet = {
  //     id: Math.random(),
  //     name: "Dooney",
  //     slug: "learn-svelte",
  //     funfact: "This is some fun fact about me",
  //     image:
  //       "https://th.bing.com/th/id/R.6dfb5f6ab25a678a99999f15d5616f1c?rik=7Uyobn2w%2fKmw2g&pid=ImgRaw&r=0",
  //     age: "1",
  //     location: "USA",
  //     lookingfor: "Romance",
  //   };

  // update the store with the new pet
  // pets.update(pets => [...pets, newPet])
  // 	 console.log($pets);
  //

  //   save all the pets from store to allPets variable
  //   const allPets = $pets;
</script>

<svelte:head>
  <title>Pets</title>
</svelte:head>

<section class="px-24 mx-auto bg-ecllipse">
  <div class="justify-center items-center flex flex-col mt-8 py-10 ">
    <h1
      class="sm:text-4xl text-2xl font-black mb-10 text-center w-2/4 font-adelia"
    >
      Peep our gorgeous pets
    </h1>
    <p
      class="mb-10 opacity-70 text-base leading-relaxed text-center w-2/4 font-mono"
    >
      You know what? take a moment and look through our list of gorgeous pets.
      Assuming you don't spend all day looking at these cuties, go ahead and
      list your own pet!
    </p>
    <!-- Create cards to dynamically display all the pets in the store -->
  </div>

  <!-- <div class="relative">
    <div
      class="absolute inset-y-1/2 left-1/2 bg-ecllipse rounded-full flex items-center justify-center "
      style="height: 550px; width: 550px; font-size: 170px;"
    />
    <div
      class="absolute inset-y-1/2 right-1/2 bg-ecllipse rounded-full flex items-center justify-center "
      style="height: 550px; width: 550px; font-size: 170px;"
    />
  </div> -->
  <section class="text-white">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        {#each $pets as pet}
          <div class="p-4 md:w-1/4 ">
            <div class="h-full bg-card2 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={pet.image}
                alt="pets"
              />
              <div class="p-6 items-center">
                <h1 class="title-font text-lg font-medium mb-3 font-pumpkin">
                  {pet.name}, {pet.age}
                </h1>
                <p class="leading-relaxed mb-3">
                  {pet.funfact}
                </p>
                <button
                  class=" text-center font-bold py-2 px-4 rounded-full border-2 border-white  font-pumpkin "
                >
                  Connect with {pet.name}
                </button>
              </div>
              <!-- add a button to the pet card with a transparent background and round border that says connect with {pet.name}  -->
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</section>
