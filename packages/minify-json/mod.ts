import { readFileSync, writeFileSync } from "node:fs";

// Read and parse the city.json file
const cityJsonPath = "./city.json";
const cityJson = JSON.parse(readFileSync(cityJsonPath, "utf-8"));
const allCities = cityJson.city.flatMap((group: any) => group.list);
const result: any[] = [];
allCities.forEach((element: any) => {
  if (
    !result.find(
      (item) =>
        item.name === element.name &&
        item.code === item.code &&
        item.label === item.label
    )
  ) {
    result.push(element);
  }
});
// Remove duplicate cities based on name and code

// Minify the JSON by converting it back to a string
const minifiedJson = JSON.stringify(result);

// Write the minified JSON to cities.mini.json
const outputPath = "./cities.mini.json";
writeFileSync(outputPath, minifiedJson, "utf-8");

console.log(`Minified JSON has been saved to ${outputPath}`);
