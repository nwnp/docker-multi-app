const Sequelize = require("sequelize");

module.exports = class List extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        value: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        modelName: "List",
        tableName: "lists",
      }
    );
  }
  static associate(db) {}
};
