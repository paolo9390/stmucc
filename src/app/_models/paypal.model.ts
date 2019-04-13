export interface PaymentURL {
    redirectUrl: string;
}

export interface PaymentJSON {
    intent: string;
    payer: {
        payer_method: string;
    };
    redirect_urls: {
        return_url: string;
        cancel_url: string;
    };
    transactions: any[];

}

// var create_payment_json = {
//     "intent": "sale",
//     "payer": {
//         "payment_method": "paypal"
//     },
//     "redirect_urls": {
//         "return_url": "http://localhost:8080/api/paypal/success",
//         "cancel_url": "http://localhost:8080/api/paypal/cancel"
//     },
//     "transactions": [{
//         "item_list": {
//             "items": [{
//                 "name": "Donation",
//                 "sku": "001",
//                 "price": "10.00",
//                 "currency": "GBP",
//                 "quantity": 1
//             }]
//         },
//         "amount": {
//             "currency": "GBP",
//             "total": "10.00"
//         },
//         "description": "This is a donation."
//     }]
// };