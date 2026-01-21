class AngularFirstService {
    constructor({
        angularFirstRepository
    }) {
        this.angularFirstRepository = angularFirstRepository;
    }

    products() {
        return this.angularFirstRepository.products();
    }

    newProduct(product) {
        return this.angularFirstRepository.createProduct(product);
    }
}

module.exports = AngularFirstService;