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
Per utilizzare questo modo dobbiamo creare il progetto con alcune accortezze.

### Composition API Basics ⛱️

Il progetto viene creato cosi:
![project](https://i.ibb.co/9cTyQmQ/Capture.png)

Le variabili settate nella sezione `setup()` non sono accessibili in scrittura dal `<template>` al contrario delle variabili settate con il modo `Option API` per esempio:
```js
data() {
    return {
        age: 40
    }
}
```
in questo caso sono dichiarte come variabili reattive, mentre cosi:
```js
setup(){
    let age = 30
    return {
        age
    }
}
```
non è reattiva, quindi non soggetta al cambio di stato nel `<template>`

## Template Refs in Composition API 🦝
per rendere una variabile accessibile dal `<template>` dobbiamo per prima cosa dichiararla `const p = ref` ed assegnarla ad una riferimento inserendolo nel tag che ci serve ad esempio `<p ref="p">Ciao</p>`, quindi importarne poi il riferimento con `import { ref } fro 'vue'`.
Per far si che il valore di p venga restituito al template, va aggiunto al return.

## Uso delle Refs per rendere le variabili reattive 😊
nel caso si voglia rendere una variabile reattiva basterà dichiarare ad esempio `let name = ref('Mario')` e poi restituire `name` nel return della funzione.  
Nel `<template>` basterà richiamare `{{name}}`.

## Refs vs Reactive 🐯
in caso volessimo fare un ***oggetto*** componente reattivo (e non solo una variabile come nel caso precedente), basterà fare `import {reactive} from 'vue'` ed utilizzare il componente come proprietà di un componente padre.
Per esempio `{{ oggettone.name }}`, per la visualizzazione e per la riassegnazione dei valori basterà fare una funzione con all'interno `oggettone2.age = 45`, in quanto è possibile aggedere direttamente al valore senza passare per il metodo `value` come era necessario fare per la modalità ref, che era `oggetone.value.age = 40`.  
Un contro del reactive è che non posso usarlo per le variabili con ***primitive value*** come ad esempio `nome = reactive('Luigi')`, se uso questa modalità non riuscirò più ad aggiornare il valore di `nome`.

## Computed Values 🍰
Per iniziare dobbiamo dichiarare la variabile ad esempio `let name = computed()` ed importarla `import { computed } from 'vue'`.
L'idead generale è quella di usare le computed per passare valori più complessi di una singola variabile.
Solitamente si usa per una logica più importante

## Watch & watchEffect 🏝️
Questo tipo di procedure si usa per monitorare il cambio di un singolo valore, come per gli altri metodi va importato con `import {watch} from 'vue'`.
La funzione viene poi creata cosi: 
```js
watch(nomeVariabile, () => {
      //codice
    })
```
Con la funzione `watchEffect` invece, posso vedere quando il `watch` viene istanziato nella pagina per la prima volta.
```js
watchEffect(()=>{
      //codice qui
    })
```
caso in qui si introduca anche il valore che voglio osservare, ad esempio
```js
watchEffect(()=>{
      console.log('watchEffect',nomeVariabile.value)
    })
```
otterò il richiamo della funzione ad ogni cambiamento della variabile `nomeVariabile`, sono due modi per fare la stessa cosa.
Questi metodi sono molto usati con i database.
E' possibile assegnare i valori dei watch all'interno di vaibili `let variabile = watch(//codice qui)`

>***NOTA*** i componenti vanno istanziati nel HTML con `<nomeComponente />`, importati nello script `import nomeComponente from '../components/nomeComponente.vue'` ed incluso nello script con `components: { SinglePost },`

## Usare le props nel setup() 🦧
Il modo classico per usare le props è `:props='props'` all'interno del tag e `props['variabile'],` dopo l'export default, mentre all'interno del `setup()` si farà `setup(props)`.  
All'interno del `setup()` è possibile elaborare il dato passato con la `props` per poi utilizzarlo nuovamente all'interno dei `<template>`.

## Lifecycle Hooks 🏤
All'interno del `setup()` si usano cosi `onMounted()`, `onUnmounted()`, `onUpdated()`.
Al posto di fare `mounted(){ //codice }`.