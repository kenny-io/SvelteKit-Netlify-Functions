<script context="module">
  import { browser, dev } from "$app/env";

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<script>
  import { pets } from "../stores/petstore";

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
  <title>About</title>
</svelte:head>

<div class="items-center">
  <h1>PetsCan Date</h1>
  <p>
    You know how one time you met someone amazing, you bonded with them and
    became friends, eventually ya'll fell in love, yeah that feeling your pets
    deserve it too
  </p>
</div>
