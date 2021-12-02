<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import { pets } from "../stores/petstore";

  pets.subscribe((value) => {
    // console.log(value);
  });
</script>

<main>
  <slot />
  <Footer />
</main>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
