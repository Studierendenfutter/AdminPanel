import { useEffect, useState } from "react";
import getMealRecommendations from "../backend/getMealRecommendations";
import putMealRecommendation from "../backend/putMealRecommendation";

export default function useMealRecommendations() {
  const [mealRecommendations, setMealRecommendations] = useState([]);

  const fetch = async () => {
    const mr = await getMealRecommendations();
    setMealRecommendations(mr.mealRecommendations);
  };

  useEffect(() => {
    fetch();
  }, []);

  async function updateMealRecommendation(updatedRecommendation) {
    fetch();
    return;
  }

  return [mealRecommendations, updateMealRecommendation];
}
