const _ = require('lodash');

export function serializeProducts(product) {
  const data = {
    id: _.get(product, 'id', ''),
    productName: _.get(product, 'productName', ''),
    imgUrl: _.get(product, 'imgUrl', ''),
    currentPrice: _.get(product, 'currentPrice', 1),
    buyNowPrice: _.get(product, 'buyNowPrice', 1),
    endAt: _.get(product, 'endAt', _.now()),
    createdBy: _.get(product, 'createdBy', ''),
    updatedBy: _.get(product, 'updatedBy', ''),
  };
  return data;
}

export function serializeAllProducts(products) {
  const data = [];
  products.forEach((product) => {
    data.push(serializeProducts(product));
  });
  return data;
}
