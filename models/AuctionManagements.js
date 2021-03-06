module.exports = (sequelize, DataTypes) => {
  const AuctionManagements = sequelize.define(
    'AuctionManagements',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        field: 'id',
      },
      buyerId: {
        type: DataTypes.UUID,
        field: 'buyer_id',
      },
      sellerId: {
        type: DataTypes.UUID,
        field: 'seller_id',
      },
      productId: {
        type: DataTypes.UUID,
        field: 'product_id',
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
      },
      endAt: {
        type: DataTypes.DATE,
        field: 'end_at',
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
      },
    },
    {
      tableName: 'auction_managements',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  );

  AuctionManagements.associate = (models) => {
    AuctionManagements.belongsTo(models.Products, {
      as: 'products',
      foreignKey: 'productId',
    });
    AuctionManagements.belongsTo(models.Buyers, {
      as: 'buyers',
      foreignKey: 'buyerId',
    });
    AuctionManagements.belongsTo(models.Buyers, {
      as: 'seller',
      foreignKey: 'sellerId',
    });
    AuctionManagements.hasMany(models.AuctionHistories, {
      as: 'auctionHistories',
      foreignKey: 'auctionId',
    });
    AuctionManagements.hasMany(models.Ratings, {
      as: 'auction',
      foreignKey: 'auctionId',
    });
    AuctionManagements.hasMany(models.Reminders, {
      as: 'reminder',
      foreignKey: 'auctionId',
    });
  };

  return AuctionManagements;
};
