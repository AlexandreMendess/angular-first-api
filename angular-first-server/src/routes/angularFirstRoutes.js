const AngularFirstRoutes = ({
    angularFirstService
}) => ({
  "/products:get": async (request, response) => {
    const productsData = await angularFirstService.products();

    response.write(
      JSON.stringify({
        results: productsData,
      }),
    );
    return response.end();
  },

  "/createProducts:post": async (request, response) => {
    const data = await once(request, "data");
    const item = JSON.parse(data);
    const product = new Product(item);

    const id = await heroService.create(hero);

    response.writeHead(201, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        id,
        success: "User created with success!!",
      }),
    );

    return response.end();
  },
});

module.exports = AngularFirstRoutes;
