import { Technology, TechnologyColours } from "@/types"

const techColours: TechnologyColours = {
  Python: "#3572a5",
  PHP: "#4f5d95",
  VimScript: "#199f4b",
  FORTRAN: "#4d41b1",
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  CoffeeScript: "#244776",
  "Vue.js": "#2c3e50",
  AngularJS: "#e42939",
  jQuery: "#7acef4",
  "Gulp.js": "#cf4647",
  Webpack: "#8ed6fb",
  "GitHub Actions": "#2088ff",
  CSS: "#563d7c",
  SVG: "#ffb13b",
  Regex: "black",
  Spreadsheets: "#0f9d58",
  Fiction: "mediumpurple",
  Terraform: "#623ce4",
}

export function techColour(tech: Technology): string {
  return techColours[tech]
}
