const R_DASHBOARD = Vue.component('app-dashboard', {
    template: `
        <section class="padding_top_3">
            <header class="flex_h-center">
                <h3>DASHBOARD</h3>
            </header>
            <app-dashboard-event-new v-on:itemAdded="reloadList"></app-dashboard-event-new>
            <app-dashboard-event-list :reload="itemAdded"></app-dashboard-event-list>
        </section>
    `,
    data() {
        return {
            itemAdded: null
        };
    },
    created() {
        if (!Auth.getters.isLogged) {
            this.$router.push({ path: 'home' });
        }
    },
    methods: {
        reloadList(item) {
            this.itemAdded = item;
        }
    }
});