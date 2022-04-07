import {ref} from 'vue'

const getPost = (id) => {
    let post = ref(null)
    let error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts/' + id)
            if (!data.ok){
                throw Error('Qualcosa è andato storto...')
            }
            post.value = await data.json()
        } catch (e) {
            error.value = e.message            
        }
    }
    return {post, error, load}
}

export default getPost