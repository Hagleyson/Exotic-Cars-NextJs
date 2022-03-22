import API from "./api";

export const fetchCar = async (id?: number) => {
  try {
    let response = await API.get(`getCars${id ? `?id=${id}` : ""}`);
    if (response.status === 200) {
      return response.data.cars;
    }
    if (response.status === 204) {
      throw new Error("No content");
    }
    if (response.status === 404) {
      throw new Error("Unavailable server");
    }

    throw new Error();
  } catch (error) {
    return { hasError: true, msg: String(error) };
  }
};
