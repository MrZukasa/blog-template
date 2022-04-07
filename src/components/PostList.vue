<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" class="text-xl mt-4"/>
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