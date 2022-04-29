/* Vue Email List */

/* Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/


const app = new Vue ({
    el:'#app',
    data : {
        emails: [],
    },
    methods: {},
    mounted() {
        for (let i = 0; i < 20; i++) { // aumentato le email generate per rendere più visibile lo "pseudo-caricamento" di v-else
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.emails.push(response.data.response)
                console.log(this.emails);
            })
        }
    }
})