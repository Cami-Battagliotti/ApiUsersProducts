import { API_URL } from "../constants";

async function getData(path: string) {
  const response = await fetch(API_URL + path);
  const data = await response.json();
  return data;
}

export { getData };
