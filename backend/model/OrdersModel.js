const {model} = require('mongoose');

const {OdersSchema} = require('../schemas/OrdersSchema');

const OrdersModel = new model('orders',OdersSchema);    

module.exports = {OrdersModel};