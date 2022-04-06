<template>

  <div class="home inline-block items-center">
    <p class=" text-4xl bold font-bold mt-4 ">
      <label class="shadow-md">Home</label>
    </p>
    <!-- <p ref="p" class=" text-2xl mt-4 "> -->
    <p class=" text-2xl mt-4 ">
      Sono {{ oggettone.name }} ed ho {{ oggettone.age }} anni
    </p>

    <div class="mt-4">
      <button @click="handleClick" class="btn btn-orange mr-2">cliccami</button>
      <button @click="oggettone.age++" class="btn btn-orange">+1</button>
    </div>

    <div class=" mt-4 ">
      <label class="text-xl mr-2">Nome</label>
      <input type="text" v-model="oggettone.name" class="nome">
    </div>
  </div>

</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Home',
  setup()  {

    //this.$refs.     <= questo non si usa qui dentro
    // const p = ref(null)
    let oggettone = ref({ name: 'Mario', age: 35 })
    // let name = ref('Mario')
    // let age = ref(35)
    let handleClick = () => {
      oggettone.value.age = 40
    }

    // const handleClick = () => {
    //   if (name.value=='Mario') {
    //     name.value = 'Luigi'
    //     age.value = 30
    //   }
    //   else {
    //     name.value = 'Mario'
    //     age.value = 35
    //   }
    // }

    // return { name, age, handleClick }                 // tutto quello che esce da qui è disponibile nel html sopra, quindi nel template
    return { oggettone, handleClick }
  }
}

</script>

<style>

.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-orange {
  @apply bg-orange-400 text-stone-100 shadow-md;
}
.btn-orange:hover {
  @apply bg-orange-600;
}

body {
  @apply bg-slate-700
}

p, label {
  @apply text-stone-300 font-sans
}

.nome {
  @apply bg-slate-400 border-slate-800 border-2 rounded-md text-gray-600
   hover:border-orange-600 leading-tight appearance-none py-2 px-4 w-96
}
.nome:focus {
  @apply outline-none border-orange-400 text-gray-900
}

</style>