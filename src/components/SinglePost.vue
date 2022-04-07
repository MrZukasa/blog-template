<template>
 <div class="post">
     <p class="text-xl">{{post.title}}</p>
     <p class=" text-sm ">{{ snippet }}</p>
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