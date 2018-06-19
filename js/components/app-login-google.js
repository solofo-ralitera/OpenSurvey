Vue.component('app-login-google', {
    template: `
        <section class="sw100">
            <!--div id="signin-google"></div-->
            <a href="#"
                id="btn-google-login"
                class="display-inline-block sw100 btn-social btn-google">
                <span class="fa fa-google"></span>
                Sign in with Google
            </a>
        </section>
    `,
    data: function () {
        return {};
    },
    created: function() {
        this.init();
    },
    methods: {
        init: function() {
            if (typeof gapi === 'undefined') {
                window.setTimeout(() => {
                    this.init();
                }, 100);
                return false;
            }
            gapi.load('auth2', () => {
                // Retrieve the singleton for the GoogleAuth library and set up the client.
                const auth2 = gapi.auth2.init({
                    client_id: '288925975530-utb8d799vt06ft93j03anb6a35t4003h.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                    // Request scopes in addition to 'profile' and 'email'
                    //scope: 'additional_scope'
                });
                auth2.attachClickHandler('btn-google-login', {},
                    (googleUser) => {
                        this.login(googleUser);
                    }, (error) => {
                        console.error(JSON.stringify(error, undefined, 2));
                    });
            });
        },
        login: function (googleUser) {
            let profile = googleUser.getBasicProfile();
            console.log(profile);
            let idToken = googleUser.getAuthResponse().id_token;
            console.log("ID Token: " + idToken);
        }
    }
});