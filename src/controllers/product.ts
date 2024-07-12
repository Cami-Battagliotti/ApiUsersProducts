import { getAll, getById, getByDescription } from "../models/product";
import { Messages } from "../utils/messages";

class ProductController {
  async getAll() {
    return await getAll();
  }
  async getById(id: number | string) {
    if (!id) {
      return Messages.MISSING_DATA;
    } else if (typeof id != "number" || typeof id != "string") {
      return Messages.BAD_REQUEST;
    }
    return await getById(id);
  }

  async getByDescription(description: string) {
    if (!description) {
      return Messages.MISSING_DATA;
    } else if (typeof description != "string") {
      return Messages.BAD_REQUEST;
    }
    return await getByDescription(description);
  }
}

const products = new ProductController();

const {
  getAll: allProducts,
  getById: idProducts,
  getByDescription: productsDescription,
} = products;

export { allProducts, idProducts, productsDescription };
