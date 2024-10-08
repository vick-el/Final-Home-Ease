import PaymentService from "../../service/paymentService.js";

const paymentInstance = new PaymentService();

export const startPayment = async(req, res) => {
    try{
        const response = await paymentInstance.startPayment(req.body);
        res.status(201).json({status: "Success", data: response});
    }catch(error){
        res.status(500).json({status: "Failed", message: error.message});
    }
}
export const createPayment = async(req, res) => {
    try{
        const response = await paymentInstance.createPayment(req.query);
        res.status(201).json({status: "Success", data: response});
    }catch(error){
        res.status(500).json({status: "Failed", message: error.message});
    }
}
export const getPayment = async(req, res) => {
    try{
        const response = await paymentInstance.paymentReceipt(req.body);
        res.status(201).json({status: "Success", data: response});
    }catch(error){
        res.status(500).json({status: "Failed", message: error.message})
    }
}