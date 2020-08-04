import * as Joi from '@hapi/joi';

export const productAuctionSchema = Joi.object({
  productName: Joi.string().required(),
  imgURL: Joi.string(),
  currentPrice: Joi.number(),
  buyNowPrice: Joi.number(),
  endAt: Joi.date(),
  description: Joi.string()
    .empty('')
    .pattern(/^[a-zA-Z]+/),
});

export const bidProductAuctionSchema = Joi.object({
  id: Joi.string().required(),
  price: Joi.number().required(),
});
