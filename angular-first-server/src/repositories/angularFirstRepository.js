const Product = require("../entities/product");

class AngularFirstRepository {
    constructor({
        database
    }) {
        this.database = database;
    }

    async products() {
        const script = "SELECT * from products";
        const { rows } = this.database.query(script);

        return rows.map(row => new Product({
            id: row.id,
            name: row.name,
        }));
    }

    async createProduct(product) {
        const script = `
            INSERT INTO products (name)
            VALUES ($1, $2, $3)
            RETURNING *
        `;

        const values = [product.name];

        const { rows } = await this.database.query(text, values);
        const newRow = rows[0];

        return new User({
          id: newRow.id,
          name: newRow.name,
          email: newRow.email,
          createdAt: newRow.created_at,
        });
    }
}

module.exports = AngularFirstRepository;