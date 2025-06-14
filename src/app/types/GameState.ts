export type Game = {
  playerId?: string;
  currentStage: number;
  choices: number[];
  completed: boolean;
};
