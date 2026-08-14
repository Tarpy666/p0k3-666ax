// P0K3-666AX — clean-room creature-collection. Deterministic by construction.
// Inspiration (mechanics only, not source material): creature collection conventions (catch, train, battle)
// Target engine for the render layer: web (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { SpeciesRegistry, CaptureFormula } from "./archetype";

export const SPEC = "creature collection conventions (catch, train, battle)";
export const MODULES = [{ id: "SpeciesRegistry", name: "P0K3-666AX :: SpeciesRegistry" }, { id: "CaptureFormula", name: "P0K3-666AX :: CaptureFormula" }];
export { seededRandom };
