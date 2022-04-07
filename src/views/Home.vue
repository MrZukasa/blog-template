<template>

  <div class="home inline-block items-center mt-8">
    <label class=" text-5xl shadow-md italic">Home</label>
    <div v-if="posts.length" class="text-orange-400">
      <PostList :posts="posts"/>
    </div>
    <div v-else-if="error" class="mt-3 text-red-600"> {{error}} </div>
    <div v-else class=" text-3xl text-gray-300">Loading...</div>
  </div>

</template>

<script>
import PostList from '../components/PostList.vue'           
// import { ref } from 'vue'
import getPosts from '../composable/getPosts'


export default {
  name: 'Home',
  components: { PostList },
  setup()  {
    // let posts = ref([])
    // let error = ref(null)

    // let load = async () => {
    //   try {
    //     let data = await fetch('http://localhost:3000/posts')                                            //aspetta che il fetch sia finito
    //     if (!data.ok){
    //       throw Error('Nessun dato disponibile')
    //     }
    //     posts.value = await data.json()
    //   }
    //   catch (e) {
    //     error.value = e.message
    //     console.error(error.value)
    //   }
    // }
    // load()
    const { posts, error, load } = getPosts()                                                                 //invoke della mia funzione
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