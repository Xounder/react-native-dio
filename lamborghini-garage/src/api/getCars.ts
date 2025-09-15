import axios from "axios";
import { CAR_API_BASE_URL } from "../constants/car";
import { CarModel } from "../components/CardView/props";

interface ApiResponse {
  cars: CarModel[]
}

async function getCarData(id: number) {
  try{
    const response = await axios.get<ApiResponse>(CAR_API_BASE_URL);
    const carData = response.data.cars.find((car) => car.id === id) || null;
    
    return carData;
  } catch (e) {
    console.log("Erro ao buscar dados da api:", e);
  }
}

export default getCarData;