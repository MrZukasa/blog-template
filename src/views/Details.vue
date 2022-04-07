<template>
  <div v-if="error">
      {{ error }}
  </div>
  <div v-if="post">
      <p class=" text-gray-300 text-3xl mt-10 mb-6 inline-block ">{{ post.title }}</p>
      <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from '../composable/getPost'

export default {
    props: ['id'],
    setup(props){
        let {post,error,load} = getPost(props.id)
        load()
        return {post,error}
    }
}
</script>

<style>

.pre {
    @apply inline-block ml-32 mr-32 text-gray-400 italic border-2 rounded-md border-orange-400 
    border-opacity-10 py-4 px-4 shadow-md hover:bg-slate-800 hover:border-orange-600 hover:border-opacity-20 
}

</style>