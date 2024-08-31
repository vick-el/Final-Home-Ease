import request from 'request';
import Payment from '../backend/models/paymentModel.js';
import _ from 'lodash';
import paystack from '../utils/payment.js'; 

const { initializePayment, verifyPayment } = paystack();

class PaymentService{
    startPayment(data) {
        return new Promise(async (resolve, reject) => {
            try{
                const form = _.pick(data, ['amount', 'email', 'full_name']);
                form.metadata = {
                    full_name : form.full_name
                }
                form.amount *= 100;

                initializePayment(form, (error, body) => {
                    if(error) {
                        reject(error.message)
                    }
                    const response = JSON.parse(body);

                    return resolve(response);
                });
            }catch(error){
                error.source = 'Start Payment Service';
                return reject (error);
            }
        })
    }
    createPayment(req){
        const ref = req.query.refernce;
        if (ref==null){
            return reject({code:400, msg: 'No reference passed in query!'});
        }
        return new Promise(async (resolve, reject) => {
            try {
                verifyPayment(ref, (error, body) => {
                    if(error) {
                        reject(error.message)
                    }
                    const response = JSON.parse(body);

                    const {refernce, amount, status} = response.data;
                    const {email} = response.data.customer;
                    const full_name = response.data.metadata.full_name;
                    const newPayment = {reference, amount, email, full_name, status};
                    const payment = Payment.create(newPayment);

                    return resolve (payment)
                })
            } catch (error){
                error.source = 'Create Payment Service';
                return reject(error)
            }
        })
    }

    paymentReceipt(body){
        return new Promise (async (resolve, reject) => {
            try {
                const reference = body.reference;
                const transaction = Payment.findOne({reference: reference});
                return resolve(transaction);
            }catch(error){
                error.source = 'Payment Receipt';
                return reject(error)
            }
        })
    }
}
export default PaymentService;