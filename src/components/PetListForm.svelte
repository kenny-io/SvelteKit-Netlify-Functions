<script>
  import { pets } from "../stores/petstore.js";

  let formValues = {
    name: "",
    type: "",
    age: "",
    funfact: "",
    location: "",
    lookingFor: "",
    image: "",
  };

  let submitted = false;
  // handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    let newPet = {
      name: formValues.name,
      funfact: formValues.funfact,
      image: formValues.image,
      age: formValues.age,
      location: formValues.location,
      lookingfor: formValues.lookingfor,
      type: formValues.type,
    };
    // Update the pets store
    pets.update((pets) => [...pets, newPet]);

    // reset the form
    formValues = {
      name: "",
      type: "",
      age: "",
      funfact: "",
      location: "",
      lookingFor: "",
      image: "",
    };
    submitted = true;
  };
</script>

<section class="mt-10 px-24 mx-auto bg-ecllipse">
  <div class="justify-center items-center flex flex-col mt-8 py-24 ">
    <h1
      class="sm:text-2xl text-2xl font-black mb-10 text-center w-full font-adelia"
    >
      List your furball!
    </h1>
    <p
      class="mb-8 opacity-70 text-base leading-relaxed text-center w-2/4 font-sfpro"
    >
      Tell us about your pet and we will help you find the perfect partner!
    </p>
    <!-- Create a Tailwind form with inputs for the pets name, age, location, funfact and lookingfor -->
    <form class="flex flex-col items-center justify-center w-full font-pumpkin">
      <div class="w-2/4 mt-3">
        <label
          class="flex text-start text-gray-700 text-sm font-bold mb-2"
          for="name"
          >Name
        </label>
        <input
          class="shadow text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
          id="name"
          type="text"
          placeholder="What is your pet's name?"
          bind:value={formValues.name}
        />
      </div>
      <div class="w-2/4 mt-3">
        <label
          class="flex text-start text-gray-700 text-sm font-bold mb-2"
          for="image"
          >Image
        </label>
        <input
          class="shadow text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
          id="image"
          type="text"
          placeholder="Link to a fine picture of your pet"
          bind:value={formValues.image}
        />
      </div>
      <div class="w-2/4 mt-3">
        <label
          class="flex text-start text-gray-700 text-sm font-bold mb-2"
          for="age"
          >Age
        </label>
        <input
          class="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
          id="age"
          type="text"
          placeholder="How old is your pet? e.g (2 months)"
          bind:value={formValues.age}
        />
      </div>
      <div class="w-2/4 mt-3">
        <label
          class="flex text-start text-gray-700 text-sm font-bold mb-2"
          for="type"
          >Type
        </label>
        <input
          class="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
          id="type"
          type="text"
          placeholder="What type of pet? cat, dog, etc."
          bind:value={formValues.type}
        />
      </div>
      <div class="w-2/4 mt-3">
        <label
          class="flex text-start text-gray-700 text-sm font-bold mb-2"
          for="location"
          >Location
        </label>
        <input
          class="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
          id="location"
          type="text"
          placeholder="Where is your pet located?"
          bind:value={formValues.location}
        />
      </div>
      <div class="w-2/4 mt-3">
        <label
          class="flex text-start text-gray-700 text-sm font-bold mb-2"
          for="funfact"
          >Fun Fact
        </label>
        <input
          class="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sfpro"
          id="funfact"
          type="text"
          placeholder="Tell us a fun fact about your pet"
          bind:value={formValues.funfact}
        />
      </div>
      <div class="w-2/4 mt-3">
        <label
          class="flex text-start text-gray-700 text-sm font-bold mb-2"
          for="lookingfor"
        >
          Looking for?
        </label>
        <div class="relative">
          <select
            class="block appearance-none text-xs w-full bg-gray-200 border font-sfpro border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lookingfor"
            bind:value={formValues.lookingFor}
          >
            <option>Friedship</option>
            <option>Romance</option>
            <option>Play date</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              ><path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              /></svg
            >
          </div>
        </div>
      </div>

      <button
        class="mt-10 bg-appaccent hover:bg-appaccentdark text-black w-52 h-14 font-pumpkin py-2 px-4 rounded-xl"
        type="submit"
        on:click={handleSubmit}
      >
        Submit
      </button>
    </form>
  </div>
</section>
