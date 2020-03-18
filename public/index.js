document.getElementById("purchase-button").addEventListener("click", openStripe);

const stripePublicKey = "pk_test_sFvLvDgfnPEj24xYpv5rLWF800qOoD28jA";

const stripeHandler = StripeCheckout.configure({
    key: stripePublicKey,
    locale: "en",
    token: function(token) {
        axios.post("/purchase", {token: token.id}).then((response) => {
            console.log(response.data);
        });
    }
});

function openStripe() {
    stripeHandler.open({
        amount: 100
    });
}