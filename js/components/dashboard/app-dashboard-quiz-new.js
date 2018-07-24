Vue.component('app-dashboard-quiz-new', {
    template: `
        <section class="padding_05_1 flex_h-center">
            <input autocorrect="off" 
                    autocapitalize="off" 
                    name="quiz" 
                    type="text" 
                    aria-label="Enter quiz name" 
                    placeholder="Enter quiz name" 
                    autocomplete="off"
                    v-model.trim="quizname"
                    class="flex-1"
                    @input="change"
                    @keydown="add($event)"
                    autofocus />
            <span
                role="button"
                tabindex="0"
                class="pointer primary join-button v-align-center h-align-center padding_0_1"
                @click="add()">
                Create Quiz
            </span>
        </section>
    `,
    props: {
        event: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            quizname: ''
        };
    },
    methods: {
        add(evt) {
            if(evt && evt.keyCode !== 13) return;
            if (!this.quizname) return false;
            const http = new Http();
            http.send('/quiz', 'POST', {
                event: this.event,
                name: this.quizname
            }).then((response) => {
                this.quizname = '';
                this.$router.push({
                    name: 'eventquizitem',
                    params: {
                        event: this.event,
                        quiz: response._id,
                    }
                });
            }).catch(function(err) {

            });
        },
        change() {
            this.$emit('change', this.quizname);
        }
    }
});
