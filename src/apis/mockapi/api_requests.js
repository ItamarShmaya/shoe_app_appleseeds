import mockapi from "./mockapi";

export const getShoesData = async (type) => {
  const { data } = await mockapi.get(`/${type}`);
  return data;
};

export const getShoeData = async (type, id) => {
  const { data } = await mockapi.get(`/${type}/${id}`);
  return data;
};

export const updateShoeData = async (type, id, body) => {
  const response = await mockapi.put(`/${type}/${id}`, body);
  return response;
};

export const createShoeEntry = async (type, body) => {
  const response = await mockapi.post(`/${type}`, body);
  return response;
};

export const deleteShoeData = async (type, id) => {
  const response = await mockapi.delete(`/${type}/${id}`);
  return response;
};
