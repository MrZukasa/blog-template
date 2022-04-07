<template>

  <div class="home inline-block items-center mt-8">
    <label class=" text-4xl shadow-md ">Home</label>
    <PostList :posts="posts"/>
    <div v-if="error" class="mt-3 text-red-600"> {{error}} </div>
  </div>

</template>

<script>
import PostList from '../components/PostList.vue'           
import { ref } from 'vue'


export default {
  name: 'Home',
  components: { PostList },
  setup()  {
    let posts = ref([])
    let error = ref(null)

    let load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')                                            //aspetta che il fetch sia finito
        if (!data.ok){
          throw Error('Nessun dato disponibile')
        }
        posts.value = await data.json()
      }
      catch (e) {
        error.value = e.message
        console.error(error.value)
      }
    }

    load()

    return { posts,error }
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