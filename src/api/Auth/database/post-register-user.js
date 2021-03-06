import {
  UserType,
  UserStatus,
  UserIsSeller,
} from '../../../shared/helpers/constant';

const bcrypt = require('bcrypt');
const db = require('../../../../models');

export async function registerUser(buyer) {
  const hash = await bcrypt.hash(buyer.password, 10);
  const data = await db.Buyers.create({
    email: buyer.email,
    password: hash,
    type: UserType.BUYER,
    status: UserStatus.ACTIVE,
    address: buyer.address,
    fullname: buyer.fullname,
    isSeller: UserIsSeller.None,
    plusPoint: 1,
    minusPoint: 0,
  });
  return data;
}
