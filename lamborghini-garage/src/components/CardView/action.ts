import getCarData from "../../api/getCars";
import { CarModel } from "./props";

export async function loadCarData(id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>){
  try {
    const response = await getCarData(id);
    
    if (response){
      setCarData(response);
    }
  } catch (e) {
    console.log("Erro ao buscar dados da api:", e);
    setCarData(null);
  }
}

export async function handlePreviousCar(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) {
  try{
    let response = null;
    
    if (carData && carData.id === 1){
      response = await getCarData(carData.id - 1);
    }

    if (response) {
      setCarData(response);
    }
  } catch (e) {
    console.log("Erro ao buscar dados da api:", e);
  }
}

export async function handleNextCar(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) {
  try{
    let response = null;

    if (carData && carData.id < 10){
      response = await getCarData(carData.id + 1);
    }

    if (response) {
      setCarData(response);
    }
  } catch (e) {
    console.log("Erro ao buscar dados da api:", e);
  }
}
