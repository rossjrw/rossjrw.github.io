export type State = {
  projects: Project[]
}

export type Project =  {
  name: string
  size: 'small' | 'normal' | 'big'
  date: number[][]
  tags: Tag[]
  tech?: Technology[]
  desc: string
  back?: Colours
  fore?: 'light' | 'dark'
  links: ProjectLink[]
  images?: ProjectImage[]
}

type ProjectLink = {
  name: string
  href: string
  colour?: 'green' | 'blue' | 'black'
}

export type ProjectImageFunc = 'main' | 'logo' | 'mobile' | 'back' | 'oblique'

export type ProjectImage = {
  func: ProjectImageFunc
  href: string
  fallback?: boolean
}

type Tag =
  // Project status - must have exactly 1
  | "completed"
  | "working"
  | "unfinished"
  | "abandoned"
  // Other tags
  | "utility"

export type Technology =
  // Language
  | "Python" | "PHP" | "VimScript" | "FORTRAN"
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

export type Colours = [Colour, Colour, Colour, Colour]

type Colour = string | [number, number, number]
