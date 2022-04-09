// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: '',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: '',
  onDelete: 'CASCADE', //double check this
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    //model: ,
    unique: false,
  },
  as: ''
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    //model: ,
    unique: false,
  },
  as: ''
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
