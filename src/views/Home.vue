<template>

  <div class="home inline-block items-center mt-8">
    <label class=" text-4xl shadow-md ">Home</label>
    <div class=" mt-4">
      <input type="text" v-model="search" class="ricerca">
      <p class="text-xl text-gray-400">valore cercato: {{search}}</p>
    </div>    
    <div v-for="name in matchingnames" :key="name">
      <p class=" text-xl mt-2 ">{{name}}</p>
    </div>
    <button @click="handleClick" class="btn btn-orange mt-3"> Stop </button>
  </div>

</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup()  {
    // let name = computed(()=>{
    //   return 'Yoshi'
    // })  
    // return { name }
    let search = ref('')
    let names = ref(['mario', 'luigi', 'yoshi','toad','bowser','peach'])
    
    let stopWatch = watch(search, () => {
      console.log('watch')
    })

    let stopWatchEffect = watchEffect(()=>{
      console.log('watchEffect',search.value)
    })

    let matchingnames = computed(()=>{
      return names.value.filter((name)=>name.includes(search.value))
    })

    let handleClick = ()=>{
      stopWatch()
      stopWatchEffect()
    }

    return { names, search, matchingnames, handleClick }
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

.ricerca {
  @apply bg-slate-400 border-slate-800 border-2 rounded-md text-gray-600
   hover:border-orange-600 leading-tight appearance-none py-2 px-4 w-96
}
.ricerca:focus {
  @apply outline-none border-orange-400 text-gray-900
}

</style>