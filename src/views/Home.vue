<template>

  <div class="home inline-block items-center mt-8">
    <label class=" text-4xl shadow-md ">Home</label>
    <PostList :posts="posts" v-if="showPosts"/>                              <!-- istanzio il componente e ne bindo il posts-->
    <div>
      <button @click="showPosts = !showPosts" class="btn btn-orange mt-3">Toggle</button>
      <button @click="posts.pop()" class="btn btn-orange mt-3 ml-3">Cancella un post</button>
    </div>
  </div>

</template>

<script>
import PostList from '../components/PostList.vue'           //importo il componente
import { ref } from 'vue'


export default {
  name: 'Home',
  components: { PostList },                                 //includo il componente
  setup()  {
    let posts = ref([
      { title: 'Welcome to the blog', body: 'Lorem ipsum dolor sit amet. Aut rerum eius a esse sequi in illo saepe ad molestias praesentium et magnam ipsa. Cum internos rerum ex voluptas exercitationem ex asperiores asperiores ut deleniti Quis ut aperiam odit aut voluptas dolorem. Qui harum voluptatibus et totam debitis et exercitationem galisum id assumenda possimus qui nulla asperiores. Et esse obcaecati qui galisum neque eum error natus ut temporibus optio. Et quod galisum aut molestiae cumque et nemo pariatur sit obcaecati minus. Id quaerat internos est tenetur fugiat ex eius eius et amet possimus et reprehenderit eaque in mollitia quia. Qui aperiam voluptas ut dignissimos nihil et adipisci inventore eos sunt aliquam quo fuga perferendis. Sit soluta quis qui velit sapiente et placeat modi sed temporibus galisum? Sed nisi error ut distinctio odit non aspernatur optio quo laborum laudantium.', id: 1},
      { title: 'top 5 css tips', body: 'Lorem ipsum dolor sit amet. Aut rerum eius a esse sequi in illo saepe ad molestias praesentium et magnam ipsa. Cum internos rerum ex voluptas exercitationem ex asperiores asperiores ut deleniti Quis ut aperiam odit aut voluptas dolorem. Qui harum voluptatibus et totam debitis et exercitationem galisum id assumenda possimus qui nulla asperiores. Et esse obcaecati qui galisum neque eum error natus ut temporibus optio. Et quod galisum aut molestiae cumque et nemo pariatur sit obcaecati minus. Id quaerat internos est tenetur fugiat ex eius eius et amet possimus et reprehenderit eaque in mollitia quia. Qui aperiam voluptas ut dignissimos nihil et adipisci inventore eos sunt aliquam quo fuga perferendis. Sit soluta quis qui velit sapiente et placeat modi sed temporibus galisum? Sed nisi error ut distinctio odit non aspernatur optio quo laborum laudantium.', id: 2}
    ])
    let showPosts = ref(true)
    return { posts,showPosts }
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