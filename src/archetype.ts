import { seededRandom } from "./rng";

export class SpeciesRegistry {
  private s = new Map<string, { hp: number; atk: number }>();
  register(name: string, hp: number, atk: number): void { this.s.set(name, { hp, atk }); }
  stats(name: string): { hp: number; atk: number } | undefined { return this.s.get(name); }
}
export class CaptureFormula {
  constructor(private readonly rng: () => number = seededRandom(11)) {}
  attempt(baseRate: number): boolean { return this.rng() < baseRate; }
}