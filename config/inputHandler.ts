import rl from "./readlineConfig";

export const askQuestion = (query: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
};

export const closeInput = (): void => {
  rl.close();
};
