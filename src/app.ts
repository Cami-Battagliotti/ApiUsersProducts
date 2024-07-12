import {
  allProducts,
  idProducts,
  productsDescription,
} from "./controllers/product";
import { allUsers, idUsers, usersEmail } from "./controllers/user";
import { Messages } from "./utils/messages";

export async function endpoints(mensaje) {
  const mensajeCliente = mensaje.toString();
  const objetoJs = JSON.parse(mensajeCliente);
  if (objetoJs.path == "products") {
    const dameLaData = await allProducts();
    const productsJson = JSON.stringify(dameLaData);
    return productsJson;
  } else if (objetoJs.path == "products/id") {
    const productId = await idProducts(objetoJs.id);
    const productJson = JSON.stringify(productId);
    return productJson;
  } else if (objetoJs.path == "products/description") {
    const productDescription = await productsDescription(objetoJs.description);
    const productJson = JSON.stringify(productDescription);
    return productJson;
  } else if (objetoJs.path == "users") {
    const user = await allUsers();
    const userJson = JSON.stringify(user);
    return userJson;
  } else if (objetoJs.path == "users/id") {
    const userId = await idUsers(objetoJs.id);
    const userJson = JSON.stringify(userId);
    return userJson;
  } else if (objetoJs.path == "users/email") {
    const userEmail = await usersEmail(objetoJs.email);
    const userJson = JSON.stringify(userEmail);
    return userJson;
  } else {
    const message = JSON.stringify(Messages.BAD_REQUEST);
    return message;
  }
}
