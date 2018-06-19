const router = new VueRouter({
    routes: [
        { path: '/', component: R_HOME },
        { path: '/login', component: R_LOGIN }
    ]
});

new Vue({
    el: '#app',
    router: router,
    data: function() {
        return {
            isLoading : true
        };
    },
    created : function() {

    },
    mounted : function() {
        this.$nextTick(function () {
            this.isLoading = false;
        });
    }
});

// Vue.use(Vuex);