import net from "net";
const client = net.createConnection({ port: 3000 });

client.on("connect", () => {
  //const data = { path: "users" };
  //const data = { path: "products" };
  // Le agregamos un campo (ej parametro id) que haga referencia al valor que va a tener el path.
  const data = { path: "users/id", id: 7 };
  //const data = { path: "products/id", id: 3 };
  //const data = { path: "users/email", email: "" };
  //const data = { path: "products/description", description: "" };

  const message = JSON.stringify(data);
  client.write(message);
});

client.on("data", (message) => {
  const serverMessage = message.toString();
  const messageJs = JSON.parse(serverMessage);
  console.log(`SERVER SAYS: ${messageJs}`);
});
