module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    'Rating',
    {
      userID: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        field: 'user_id',
      },
      ratedUserId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        field: 'rated_user_id',
      },
      productID: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        field: 'product_id',
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
      },
      point: {
        type: DataTypes.INTEGER,
        field: 'point',
      },
    },
    {
      tableName: 'ratings',
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    }
  );
  return Rating;
};
