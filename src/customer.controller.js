const CustomerService = require('./customer.service');
// const customerService = new CustomerService();

class CustomerController {
  constructor( customerService){
    this.customerService = customerService;
  }
  
   getCustomer ()  {
      return this.customerService.getCustomer();
  }
  
}


module.exports = CustomerController;