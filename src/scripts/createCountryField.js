import countries from "../data/countries.json";
import { createSelectField } from "./form-utils";

export default function createCountryField() {
  return createSelectField(
    "country",
    countries,
    "Please select your country..."
  );
}
