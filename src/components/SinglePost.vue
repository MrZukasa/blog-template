<template>
 <div class="post">
     <router-link :to="{name: 'Details', params: { id: post.id }}">
        <p class="title">{{post.title}}</p>
     </router-link>
     <p class=" text-sm text-gray-400 italic ">{{ snippet }}</p>
     <span v-for="tag in post.tags" :key="tag">
         #{{ tag }}
     </span>
 </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['post'],
    setup(props){
        let snippet = computed(()=>{
            return props.post.body.substring(0,100)+'...'
        })
        return {snippet}
    }
}
</script>

<style>
.title {
    @apply text-xl hover:bg-orange-200 hover:bg-opacity-5 hover:text-gray-50 inline-block rounded-3xl px-3 py-1 
}
</style>