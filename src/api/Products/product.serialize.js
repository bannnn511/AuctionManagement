import * as _ from 'lodash';

export function serializeProducts(product) {
  const data = {
    id: _.get(product, 'id', ''),
    productName: _.get(product, 'productName', ''),
    imgURL: _.get(product, 'imgURL', ''),
    currentPrice: _.get(product, 'currentPrice', 1),
    buyNowPrice: _.get(product, 'buyNowPrice', 1),
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

export function serializeBidProduct(product) {
  return {
    id: _.get(product, 'id'),
    price: _.get(product, 'price'),
    updatedBy: _.get(product, 'updatedBy', ''),
  };
}
