import { createAuth0 } from '@auth0/auth0-vue';

export const auth0 = createAuth0({
    domain: "dev-14utcje1ixpmbxfb.us.auth0.com",
    clientId: "jPZE32LHcnq2rCwcHZ3eQDzpTzQ7neCn",
    authorizationParams: {
        redirect_uri: window.location.origin
    }
})

