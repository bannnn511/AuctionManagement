module.exports = (sequelize, DataTypes) => {
  const AuctionManagement = sequelize.define(
    'AuctionManagement',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        field: 'id',
      },
      buyerID: {
        type: DataTypes.UUID,
        field: 'buyer_id',
      },
      sellerID: {
        type: DataTypes.UUID,
        field: 'seller_id',
      },
      auctionID: {
        type: DataTypes.UUID,
        field: 'auction_id',
      },
      productId: {
        type: DataTypes.UUID,
        field: 'product_id',
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
      },
    },
    {
      tableName: 'auctionManagements',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  );

  AuctionManagement.associate = (models) => {
    AuctionManagement.belongsTo(models.Products, {
      as: 'products',
      foreignKey: 'product_id',
    });
    AuctionManagement.belongsTo(models.Buyers, {
      as: 'buyers',
      foreignKey: 'buyer_id',
    });
    AuctionManagement.belongsTo(models.Buyers, {
      as: 'seller',
      foreignKey: 'seller_id',
    });
    AuctionManagement.hasMany(models.AuctionHistory, {
      as: 'auctionHistory',
      foreignKey: 'product_id',
    });
    AuctionManagement.hasMany(models.Rating, {
      as: 'auction',
      foreignKey: 'auction_id',
    });
  };

  return AuctionManagement;
};
