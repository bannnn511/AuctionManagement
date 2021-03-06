import { responseSuccess } from '../../shared/helpers';
import { serializeProducts, serializeAllProducts } from './product.serialize';
import {
  getAllProductsBusiness,
  getProductByIdBusiness,
  updateProductCurrentPriceBusiness,
  updateProductDetailBusiness,
} from './business';
import { createNewProductBusiness } from './business/createNewProductBusiness';

export async function getProducts(req, res, next) {
  try {
    const data = await getAllProductsBusiness(req, res);
    const serializedData = serializeAllProducts(data);
    responseSuccess(res, serializedData);
  } catch (error) {
    next(error);
  }
}

export async function getProductsById(req, res, next) {
  try {
    const data = await getProductByIdBusiness(req, res);
    const serializedProduct = serializeProducts(data);
    responseSuccess(res, serializedProduct);
  } catch (error) {
    next(error);
  }
}

/*
 * Create new Product
 * Start a cronjob to check when auction ended
 * update buyerId for auction if there was a bid
 */
export async function createNewProduct(req, res, next) {
  try {
    const data = await createNewProductBusiness(req, res);
    const serializedData = serializeProducts(data);
    responseSuccess(res, serializedData);
  } catch (error) {
    next(error);
  }
}

/*
 * Bidding action
 * New price must be higher than current price
 * When succeed create a history for the bidding transaction
 */
export async function updateProductPrice(req, res, next) {
  try {
    const data = await updateProductCurrentPriceBusiness(req, res);
    const serializedData = serializeProducts(data);
    responseSuccess(res, serializedData);
  } catch (error) {
    next(error);
  }
}

/*
 * Update product detail
 * Request should only be sent by who created this product
 * Update auction detail field for endAt and desciption if exists
 */
export async function updateProductDetail(req, res, next) {
  try {
    const data = await updateProductDetailBusiness(req, res);
    const serializedData = serializeProducts(data);
    responseSuccess(res, serializedData);
  } catch (error) {
    next(error);
  }
}
