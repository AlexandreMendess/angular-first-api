const Product = require("../entities/product");

class AngularFirstRepository {
    constructor({
        database
    }) {
        this.database = database;
    }

    async products() {
        const script = "SELECT * from products";
        const { rows } = await this.database.query(script);

        return rows.map(row => new Product({
            id: row.id,
            name: row.name,
        }));
    }

    async createProduct(product) {
        const script = `
            INSERT INTO products (name)
            VALUES ($1)
            RETURNING *
        `;

        const values = [product.name];

        const { rows } = await this.database.query(script, values);
        const newRow = rows[0];

        return new Product({
          id: newRow.id,
          name: newRow.name,
        });
    }
}

module.exports = AngularFirstRepository;