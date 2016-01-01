import React from 'react';

export default class ProductsList extends React.Component {
  render() {
    return (
      <div id='products-list'>
        {
          this.props.products.map((product, id) => {
            return(
              <div className='products-list-item' data-id={id} key={id}>
                {product.name}
              </div>
            );
          })
        }
      </div>
    );
  }
}
