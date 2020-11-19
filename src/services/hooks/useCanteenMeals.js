import { useEffect, useState } from "react";
import getCanteenMeals from "../backend/getCanteenMeals";

export default function useCanteenMeals(canteenId, filter = {}) {
  const [canteenMeals, setCanteenMeals] = useState();

  useEffect(() => {
    async function fetch() {
      const canteens = await getCanteenMeals(canteenId, filter);
      setCanteenMeals(canteens);
    }
    fetch();
  }, []);

  return [canteenMeals];
}
