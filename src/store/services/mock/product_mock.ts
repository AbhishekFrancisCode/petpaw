import mockData from "../../../../public/json/info.json";

export const getProduct = () => {
  return mockData || null;
};

export const getProductById = (id: string) => {
  return mockData.find((user) => user.id === Number(id)) || null;
};
