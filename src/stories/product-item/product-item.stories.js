import React from 'react';
import ProductItem from './product-item';

export default {
  title: 'ProductItem',
};

export const ProductItemStory = () => (
  <ProductItem
    style={{ width: 150 }}
    ImageComponent={() => (
      <img
        style={{ width: 150 }}
        src={'https://cf.shopee.tw/file/d2cebdeaccb320cc755a734d9de14c23'}
        onClick={() => {
          alert('我點了圖片');
        }}
      />
    )}
		title={123}
    href={
      'https://shopee.tw/%E3%80%90%E5%85%8D%E9%81%8B%E7%8F%BE%E8%B2%A8%E3%80%91%E5%8E%9F%E8%A3%9D%E6%AD%A3%E5%93%81%20Apple%20airpods%20pro%203%E4%BB%A3%20%E5%85%A8%E6%96%B0%E6%9C%AA%E6%8B%86%20%E7%84%A1%E7%B7%9A%E8%97%8D%E7%89%99%E8%80%B3%E6%A9%9F%20%20%E4%BF%9D%E5%9B%BA%E4%B8%80%E5%B9%B4%20%E9%80%81%E4%BF%9D%E8%AD%B7%E6%AE%BC%20%E5%BA%8F%E8%99%9F%E5%8F%AF%E6%9F%A5-i.134134200.17030500731'
    }
    price={99}
    priceDes={' 搜此商品'}
    title={'充電盤三合一無線充電器FOD蘋果耳機手機手表充電器apple watch 充電快充airpods無線充電盤'}
  />
);

export const ProductItemWithNoPriceDecStory = () => (
  <ProductItem
    style={{ width: 150 }}
    ImageComponent={() => (
      <img
        style={{ width: 150 }}
        src={'https://cf.shopee.tw/file/d2cebdeaccb320cc755a734d9de14c23'}
        onClick={() => {
          alert('我點了圖片');
        }}
      />
    )}
    href={
      'https://shopee.tw/%E3%80%90%E5%85%8D%E9%81%8B%E7%8F%BE%E8%B2%A8%E3%80%91%E5%8E%9F%E8%A3%9D%E6%AD%A3%E5%93%81%20Apple%20airpods%20pro%203%E4%BB%A3%20%E5%85%A8%E6%96%B0%E6%9C%AA%E6%8B%86%20%E7%84%A1%E7%B7%9A%E8%97%8D%E7%89%99%E8%80%B3%E6%A9%9F%20%20%E4%BF%9D%E5%9B%BA%E4%B8%80%E5%B9%B4%20%E9%80%81%E4%BF%9D%E8%AD%B7%E6%AE%BC%20%E5%BA%8F%E8%99%9F%E5%8F%AF%E6%9F%A5-i.134134200.17030500731'
    }
    price={99}
    title={'充電盤三合一無線充電器FOD蘋果耳機手機手表充電器apple watch 充電快充airpods無線充電盤'}
  />
);
export const EmptyProductItemStory = () => <ProductItem />;

ProductItemStory.storyName = '正常';
ProductItemWithNoPriceDecStory.storyName = '無價格描述';
EmptyProductItemStory.storyName = '全空值';
