import React from 'react';

import './product-item.scss';

const ProductItem = ({
  style = {},
  id = '',
  title = '',
  price = '-',
  priceDes = '',
  href = '',
  ImageComponent = null,
  onClickPrice = () => {},
}) => (
  <div style={style}>
    {ImageComponent?.()}
    <div class='prod_info'>
      <h5 class='prod_name'>
        <a href={href} _id={id} target='_blank' rel='noreferrer'>
          {title}
        </a>
      </h5>
      <ul
        class='price_box'
        onClick={() => {
          onClickPrice(title);
        }}
      >
        <li>
          <span class='price'>
            $<span class='value'>{`${price}${priceDes}`}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default ProductItem;
