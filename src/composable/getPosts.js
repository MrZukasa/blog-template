import { ref } from 'vue'

const getPosts = ()=>{
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
    return { posts, error , load }
}

export default getPosts