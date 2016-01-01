import React          from 'react';
import should         from 'should';
import jsdom          from 'mocha-jsdom';
import TestUtils      from 'react-addons-test-utils';
import ProductsList   from '../components/products';


describe('Products list component test', function(){
  jsdom();

  it('Should render  list of products', function(){

    const products = [{
      name: 'Test product 1',
    }];

    const productsList = TestUtils.renderIntoDocument(<ProductsList products={products} />);
    const listItems = TestUtils.scryRenderedDOMComponentsWithClass(productsList, 'products-list-item');
    listItems.should.have.lengthOf(1);
    listItems[0].should.not.be.empty;
    listItems[0].textContent.should.be.equal('Test product 1');
  });
});
