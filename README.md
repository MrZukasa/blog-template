# Composition API 🛎️
### Options API
è il modo col quale usiamo vue per fare componenti che sarà di tipo:
```javascript
export default {
    data(){
	    return{
            books: [],
            showAddBookForm: true
        }
    },
    methods: {
        addbook(title, author){
            this.books.push({ title, author })
        }
    },
    computed: {
        formattedBooks(){
            return this.books.map(book => {
                return `${book.title} is written by ${book.author}`
            })
        }
    },
    mounted(){
        fetch('myapi.com/books')
            .then(res => res.json())
            .then(data => this.books = data)
    }
}
```
quando usiamo il modo ***Composition API*** usiamo qualcosa tipo:

```js
export default {
    setup(){

        // data

        // methods

        // computed

        // lifecycle hooks
    }
}
```
questo modo si usa solo in vue 3 ed è molto più snello, infatti nell'esempio sopra, per formattare i dati sono necessari 3 passaggi diversi, il `data()` con l'inizializzazione dell'array `books: []`, la `computed:` per formattare l'aray e poi durante il `mounted()` il fetch dell dato dal nostro endpoint.
Questo rende il componente più difficile da seguire in termini di logica.  
Con il modo Composition API è possibile raggruppare tutta la logica insieme in una funzione chiamata setup.  
E' possibile creare delle funzioni riutilizzabili semplicemente importandole `import getPosts from './getPosts'` e poi dichiarandole con `const data = getPosts()`.  
E' possibile combinare i due modi Composition API e Options API nella stessa applicazione.  
Per utilizzare questo modo dobbiamo creare il progetto con alcune modifiche.

### Composition API Basics ⛱️

Il progetto viene creato cosi:
![project](https://i.ibb.co/9cTyQmQ/Capture.png)

