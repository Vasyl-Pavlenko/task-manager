import { Responsibility } from "@/types";

export const getInitialValuesResponsibilities = (responsibilities: Responsibility[]) => {
  return responsibilities.reduce((values, responsibility) => {
    values[responsibility.name] = [];
    return values;
  }, {} as { [key: string]: string[] });
};
