import API from "./api";
import { toast } from "react-toastify";

export const fetchCar = async (id?: number) => {
  try {
    let response = await API.get(`getCars`);

    if (response.status === 200) {
      return response.data.cars;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
    throw new Error();
  } catch (error) {
    toast.error(`Erro ${error}`);
    return false;
  }
};
