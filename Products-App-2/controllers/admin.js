const Product = require('../models/product');

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    res.redirect('/');
  }
  const productId = req.params.productId;
  Product.findById(productId,product => {
    if (!product) {
      res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
      editing: editMode,
      product:product
    });
  })

};

exports.postEditProduct = (req, res, next) => {
  const productId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;
  const updatedProduct = new Product(productId,updatedTitle,updatedImageUrl,updatedDescription,updatedPrice);
  updatedProduct.save();
  res.redirect('/admin/products');

};

exports.postDeleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.deleteproductbyID(productId).then(()=>{
    res.redirect('/');
  }).catch(err=>{
    console.log(err);
  })
};


exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null,title, imageUrl, description, price);
  product.save().then(()=>{
    res.redirect('/');
  }).catch(err=>{
    console.log(err);
  })
  
};

exports.getProducts = (req, res, next) => {

  Product.fetchAll().then(([rows, rowsData]) => {
    res.render('admin/products', {
      prods: rows,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err => {
    console.log(err);
  })
};
