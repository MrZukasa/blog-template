<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" class="post"/>
      </div>
  </div>
</template>

<script>
import {onMounted, onUnmounted, onUpdated} from 'vue'
import SinglePost from '../components/SinglePost.vue'

export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        console.log(props.posts)
        onMounted(()=> console.log('componente montato'))
        onUnmounted(()=> console.log('componente smontato'))
        onUpdated(()=> console.log('componente aggiornato'))
    }
}
</script>

<style>
.post {
    @apply text-xl mt-6 py-4 px-4 rounded-2xl hover:border hover:border-opacity-20
    hover:shadow-md hover:border-orange-400
}
</style>