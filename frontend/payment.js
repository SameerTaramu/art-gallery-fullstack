document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (paymentMethod) {
        const paymentMethodValue = paymentMethod.value;
        document.getElementById('message').innerText = `Thank you, ${name}! Your payment via ${paymentMethodValue} has been received.`;
    } else {
        document.getElementById('message').innerText = 'Please select a payment method.';
    }
});

