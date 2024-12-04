export interface Indoor {
  name: string;
  phase: string;
  humidity: number;
  temperature: number;
}

export const IndoorMock: Indoor = {
  name: "Mocked Indoor",
  phase: "Mocked Phase",
  humidity: 0,
  temperature: 0,
};
