<script context="module">
  export const prerender = true;
</script>

<script>
  import { pets } from "../stores/petstore";
  // import PetHero from "../components/PetHero.svelte";
  // import PetHero from "../../static/pet-hero.svg";

  const newPet = {
    id: Math.random(),
    name: "Dooney",
    slug: "learn-svelte",
    funfact: "This is some fun fact about me",
    image:
      "https://th.bing.com/th/id/R.6dfb5f6ab25a678a99999f15d5616f1c?rik=7Uyobn2w%2fKmw2g&pid=ImgRaw&r=0",
    age: "1",
    location: "USA",
    lookingfor: "Romance",
  };

  // update the store with the new pet
  pets.update((pets) => [...pets, newPet]);
  // console.log($pets);
</script>

<svelte:head>
  <title>Pets can date</title>
</svelte:head>

<section class="py-8 px-4 static">
  <div class="">
    <!-- create a Tailwind navbar with title and no links -->
    <nav
      class="flex items-center justify-between flex-wrap p-6 ml-32 mb-16 font-adelia uppercase"
    >
      Pets can date
    </nav>

    <div class="justify-center items-center flex flex-col mt-8 ">
      <h1
        class="sm:text-4xl text-2xl font-black mb-10 text-center w-2/4 font-pumpkin"
      >
        Let’s get your baby hooked up with another baby! *winks winks*
      </h1>
      <p
        class="mb-10 opacity-70 text-base leading-relaxed text-center w-2/4 font-mono"
      >
        You know how one time you met someone amazing, you bonded with them and
        became friends, eventually ya'll fell in love, yeah that feeling. Pets
        deserve it too
      </p>
      <!-- create a button that when clicked, will add a new pet to the store -->
      <button
        class="bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl"
        on:click={pets.update((pets) => [...pets, newPet])}
        >List Your Pet</button
      >
      <!-- show an image of a pet -->
      <img
        class="w-full sm:w-1/4 md:w-auto lg:w-auto xl:w-1/3 h-96  mb-10"
        alt="pet"
        src="/pet.png"
      />
    </div>
    <!-- <div class="showcase">
    {#each $pets as pet}
      <div class="pet">
        <img height="100" alt="pet" width="150" src={pet.image} />
        <h2>{pet.name}</h2>
        <p>{pet.funfact}</p>
      </div>
    {/each}
  </div> -->
    <div>
      <!-- create a circle to appear on the left of the page with a background color of red -->
      <div
        class="absolute top-24 -left-80 font-bold text-gray-700 bg-ecllipse rounded-full flex items-center justify-center font-mono"
        style="height: 550px; width: 550px; font-size: 170px;"
      />
    </div>
    <div>
      <div
        class="absolute top-3/4 left-3/4 font-bold text-gray-700 bg-ecllipse rounded-full flex items-center justify-center font-mono"
        style="height: 550px; width: 550px; font-size: 170px;"
      />
    </div>
  </div>
</section>

<style>
  /* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	} */
</style>
