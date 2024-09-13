paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '50.00'
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago realizado con éxito. Ahora puedes enviar tu consulta.');
            document.querySelector('#consultation-form').style.display = 'block';
        });
    },
    onError: function(err) {
        console.error('Error en el pago:', err);
    }
}).render('#paypal-button-container');
