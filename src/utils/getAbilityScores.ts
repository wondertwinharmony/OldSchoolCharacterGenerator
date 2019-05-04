import Roll from "roll";

export const getAbilityScores = () => {
  const roller = new Roll();
  const abilityScores: number[] = [];
  for (let i = 0; i <= 5; i++) {
    abilityScores.push(roller.roll("3d6").result);
  }
  return abilityScores;
};
