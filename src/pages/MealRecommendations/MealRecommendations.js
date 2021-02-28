import React from 'react';
import { Checkbox, Input, TextArea } from 'semantic-ui-react';
import TableWrapper from '../../components/TableWrapper';
import useMealRecommendations from '../../services/hooks/useMealRecommendations';

export default function MealRecommendations() {
    const [mealRecommendations, updateMealRecommendation] = useMealRecommendations();

    console.log(mealRecommendations)
    return <TableWrapper
    columnNames={[
      "Id",
      "Message",
      "City",
      "Active"
    ]}
    content={mealRecommendations.map((recommendation) => [
        recommendation.id,
        recommendation.message,
        recommendation.city_name,
        <Checkbox toggle checked={recommendation.active === 1} onChange={()=>updateMealRecommendation({...recommendation, active:recommendation.active === 0})}/>
        ])}
  />
}