import * as _ from 'lodash';

const db = require('../../../../models');

const { Op } = db.Sequelize;

// get data of auction + products with JOIN
export async function getAllAuctions() {
  try {
    const auctions = await db.AuctionManagements.findAll({
      include: [
        {
          model: db.Products,
          as: 'products',
        },
      ],
      where: {
        endAt: {
          [Op.gt]: _.now(),
        },
      },
    });
    return auctions;
  } catch (error) {
    console.log(error);
    return null;
  }
}
