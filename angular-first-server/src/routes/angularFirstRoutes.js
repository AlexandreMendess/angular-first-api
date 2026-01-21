const { once } = require('events'); // Native Node.js events module
const Product = require('../entities/product');
const { DEFAULT_HEADER } = require('../util/defaultHeader');

const AngularFirstRoutes = ({
    angularFirstService
}) => ({
  "/products:get": async (request, response) => {
    const productsData = await angularFirstService.products();

    response.writeHead(200, DEFAULT_HEADER);
    setTimeout(() => {
      response.write(
        JSON.stringify({
          results: productsData,
        }),
      );
    }, 12000);
    
    return response.end();
  },

  "/createProducts:post": async (request, response) => {
    const data = await once(request, "data");
    const item = JSON.parse(data);
    const product = new Product(item);

    const createdProduct = await angularFirstService.newProduct(product);

    response.writeHead(201, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        id: createdProduct.id,
        success: "Product created with success!!",
      }),
    );

    return response.end();
  },
});

module.exports = AngularFirstRoutes;
