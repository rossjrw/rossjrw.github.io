export type State = {
  projects: ProjectList
}

export type ProjectList = {
  [id: number]: Project
}

export type Project =  {
  name: string
  date: number[][]
  tags: Tag[]
  tech?: Technology[]
  desc: string
  link: ProjectLink[]
  image?: ProjectImage[]
}

type ProjectLink = {
  name: string
  href: string
}

type ProjectImage = {
  type: "main" | "logo" | "mobile"
  href: string
}

type Tag =
  // Project status - must have exactly 1
  | "completed"
  | "working"
  | "unfinished"
  | "abandoned"
  // Other tags
  | "utility"

type Technology =
  // Language
  | "Python" | "PHP" | "Vimscript" | "FORTRAN"
  | "JavaScript" | "TypeScript" | "CoffeeScript"
  // Frameworks
  | "Vue.js" | "AngularJS" | "jQuery"
  // Build tools
  | "Gulp.js" | "Webpack" | "GitHub Actions"
  // Miscellaneous
  | "CSS" | "SVG" | "Regex" | "Spreadsheets"
  // Even more miscellaneous
  | "Fiction"

export type TechnologyColours = {
  [tech in Technology]: string
}

export type Shape = "3" | "4" | "5" | "6"
