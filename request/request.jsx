// const url = "http://localhost:3000";
const url = process.env.NEXTAUTH_URL;
export const Allproduct = async () => {
  const res = await fetch("/api/products");
  return await res.json();
};

export const Singleproduct = async (productId) => {
  const res = await fetch(`${url}/api/products/${productId}`);
  return await res.json();
};

export const Categoryproduct = async (category) => {
  const res = await fetch(`${url}/api/products/category/${category}`);
  return await res.json();
};

export const Order = async () => {
  const res = await fetch(`${url}/api/order`);
  return await res.json();
};
