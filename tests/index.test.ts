import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { SpeciesRegistry, CaptureFormula } from "../src/archetype";

describe("P0K3-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(2);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const reg = new SpeciesRegistry();
reg.register("emberpaw", 30, 6);
expect(reg.stats("emberpaw")).toEqual({ hp: 30, atk: 6 });
const c = new CaptureFormula();
let hits = 0;
for (let i = 0; i < 100; i++) if (c.attempt(0.9)) hits++;
expect(hits).toBeGreaterThan(80);
  });
});
