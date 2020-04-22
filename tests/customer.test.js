const CustomerController= require('../src/customer.controller');
const CustomerService = require('../src/customer.service');

describe('Customer Tests', () => {
  it('testing equality of customer object', () => {
    const customer = {
      id: '1',
      name: 'cust1',
      age: 34
    }
    const customerService = new CustomerService();
    const customerController = new CustomerController(customerService);
    
    expect(customerController.getCustomer()).toEqual(customer);
  })
  
  it('Customer Controller test using mock', () => {
     const customer = {
      id: '1',
      name: 'cust1',
      age: 35
    }
    
    const customerService = new CustomerService();
    jest.spyOn(customerService, 'getCustomer').mockImplementation(() => {
      return {
         id: '1',
      name: 'cust1',
      age: 35
      }
    });
    const customerController = new CustomerController(customerService);
    
    expect(customerController.getCustomer()).toEqual(customer);
    
  })
  
  
})