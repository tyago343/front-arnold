export interface Indoor {
  name: string;
  phase: string;
  humidity: number;
  temperature: number;
  ph: number;
  ec: number;
  fansStatus: boolean;
  waterPumpStatus: boolean;
}

export const IndoorMock: Indoor = {
  name: "Mocked Indoor",
  phase: "Mocked Phase",
  humidity: 0,
  temperature: 0,
  ph: 0,
  ec: 0,
  fansStatus: false,
  waterPumpStatus: false,
};
export function indoorBuilder(data: Partial<Indoor>): Indoor {
  return { ...IndoorMock, ...data };
}
