import { compress } from "compress-tag"
import { Project } from "@/types"

export const projects: Project[] = [
  {
    name: "Faux Coffee Shop",
    size: "small",
    date: [[2017]],
    tags: ["completed"],
    tech: ["JavaScript", "AngularJS"],
    desc: compress`
      A tool and font I use to help me remember a handwritten neograph I
      designed, which was visually inspired by the [Coffee Shop
      Code](https://redd.it/5rzi22). I use it for writing notes, when it's
      something personal that I don't want others to read. So why is it
      open source?
    `,
    links: [
      { name: "check it out", href: "/neograph" }
    ],
    images: [
      { func: "main", href: "neograph.png" }
    ]
  },
  {
    name: "The Pipeworks",
    size: "big",
    date: [[2016], [2017]],
    tags: ["completed"],
    tech: ["Spreadsheets", "Fiction"],
    desc: compress`
      A multiplayer board game hosted on Google Sheets. Played with 11 players
      and lasted for a month, once in 2016 and again in 2017, though it could
      handle more.
      \n\n
      Players are split into teams, with some players embedded into other teams
      as spies. Betrayal is encouraged. Could be played either team-vs-team or
      cooperatively against the board and host, depending on how player-player
      relations develop.
    `,
    back: [[40, 40, 40], [191, 144, 0], [40, 40, 40], [40, 40, 40]],
    fore: "light",
    links: [
      { name: "board", colour: "green", href: "https://docs.google.com/spreadsheets/d/1G0XCT7KVrhxvwK1Tv-7TBZiYjiwX9NlSijeQNuWlEec/edit?usp=sharing" },
      { name: "rules", colour: "blue", href: "https://docs.google.com/document/d/1Dwu1WJfo7OCM7y66ucyw6y37SK-96s2T4UIwTDTBZaQ/edit?usp=sharing" }
    ],
    images: [
      { func: "main", href: "pipeworks/game.webm" },
      { func: "main", href: "pipeworks/board.png", fallback: true },
      { func: "logo", href: "pipeworks/logo.svg" }
    ]
  },
  {
    name: "SCP-3939",
    size: "normal",
    date: [[2018]],
    tags: ["completed"],
    tech: ["Fiction", "Spreadsheets"],
    desc: compress`
      A story published on the SCP Wiki. A multiple-choice adventure 65 pages
      and 19,000 words long. Although the end is always the same, there are
      many paths leading there. You are a disgraced researcher trapped in a
      hell of your own making, trying to find your way out.

      Written on a spreadsheet and compiled into a web-ready format.
    `,
    links: [
      { name: "check it out", href: "http://scp-wiki.net/scp-3939" }
    ],
    images: [
      { func: "main", href: "scp/3939.png" }
    ]
  },
  {
    name: "SCP-3211",
    size: "normal",
    date: [[2018]],
    tags: ["completed"],
    tech: ["Fiction", "JavaScript", "jQuery", "Spreadsheets"],
    desc: compress`
      An article published on the SCP Wiki. Details a fictional entity that
      appears differently for each person who sees it: to emulate this for
      readers, I wrote many versions of the same article and present a random
      one to each reader. I use cookies to ensure that while every reader sees
      a different version, a single reader will only ever see one. The
      article can also only be read once.
      \n\n
      Written on a spreadsheet and compiled to JavaScript.
    `,
    back: [[250, 250, 250], [245, 245, 245], [240, 240, 240], [243, 87, 87]],
    fore: "dark",
    links: [
      { name: "check it out", href: "http://scp-wiki.net/scp-3211" }
    ],
    images: [
      { func: "main", href: "scp/3211.png" }
    ]
  },
  {
    name: "Black Highlighter",
    size: "normal",
    date: [[2019]],
    tags: ["completed"],
    tech: ["CSS", "Gulp.js"],
    desc: compress`
      A CSS theme built to replace the dated theme used by the SCP Wiki, using
      modern web standards and accessibility guidelines. While it was never
      officially adopted, it is currently used on thousands of articles and
      stories across the international SCP community.
    `,
    back: [[100, 46, 44], [100, 3, 15], [66, 66, 72], [66, 66, 72]],
    fore: "light",
    links: [
      { name: "GitHub", colour: "black", href: "https://github.com/Nu-SCPTheme/Black-Highlighter" }
    ],
    images: [
      { func: "main", href: "scp/bhl/desktop.png" },
      { func: "mobile", href: "scp/bhl/mobile.png" },
      { func: "logo", href: "scp/bhl/logo.svg" }
    ]
  },
  {
    name: "Regex Series Replace",
    size: "small",
    date: [[2020]],
    tags: ["completed", "utility"],
    tech: ["TypeScript", "Vue.js", "Webpack"],
    desc: compress`
      A tool for applying a series of regex find-and-replace rules to a block
      of text. Configured rules can be exported and imported with URL
      arguments.
      \n\n
      Made because I got sick of having to type out the same rules again and
      again when I have to make a series of replacements that I've already made
      before.
    `,
    links: [
      { name: "check it out", href: "/series-replace" },
      { name: "GitHub", colour: "black", href: "https://github.com/rossjrw/series-replace" }
    ],
    images: [
      { func: "main", href: "regex-series-replace.png" }
    ]
  },
  {
    name: "SCUTTLE API wrapper",
    size: "normal",
    date: [[2020]],
    tags: ["completed", "utility"],
    tech: ["Python"],
    desc: compress`
      Python wrapper around the API for SCUTTLE, which is a web service that
      scrapes information from Wikidot, primarily for backing up the SCP Wiki.
    `,
    links: [
      { name: "check it out", href: "https://pypi.org/project/python-scuttle" },
      { name: "SCUTTLE", href: "https://github.com/scuttle/scuttle" }
    ]
  },
  {
    name: "Ur",
    size: "normal",
    date: [[2020]],
    tags: ["completed"],
    tech: ["TypeScript", "SVG", "GitHub Actions"],
    desc: compress`
      A massively-multiplayer, asynchronous Royal Game of Ur that anyone with a
      GitHub account can play. The board is the README of the repository.
      Entirely automated with GitHub actions. Players make their moves by
      clicking links on the README, which creates an Issue in the repository,
      which triggers a GitHub action to make the move and update the board
      state. You can play!
    `,
    back: [[243, 186, 124], [206, 143, 75], [175, 111, 43], [106, 58, 0]],
    fore: "light",
    links: [
      { name: "check it out", href: "https://github.com/rossjrw/rossjrw" }
    ],
    images: [
      { func: "main", href: "ur.png" }
    ]
  },
  {
    name: "TARS",
    size: "normal",
    date: [[2019]],
    tags: ["working"],
    tech: ["Python"],
    desc: compress`
      An IRC bot originally built for automating social media posts for SCP
      Wiki staff, but mostly used as a Markov Chain generator for making
      almost-real sentences.
    `,
    links: [
      { name: "check it out", href: "/tars/help" },
      { name: "GitHub", colour: "black", href: "https://github.com/rossjrw/tars" }
    ]
  },
  {
    name: "Gallifreyo",
    size: "normal",
    date: [[2017, 2018], [2020]],
    tags: ["working"],
    tech: ["TypeScript", "Vue.js", "Webpack", "SVG"],
    desc: compress`
      A Gallifreyan translator, based on a language made by fans of Doctor Who.
    `,
    links: [
      { name: "check it out", href: "/gallifreyo" },
      { name: "GitHub", colour: "black", href: "https://github.com/rossjrw/gallifreyo" }
    ],
    images: [
      { func: "main", href: "gallifreyo.png" }
    ]
  },
  {
    name: "rossjrw.com",
    size: "normal",
    date: [[2020]],
    tags: ["working"],
    tech: ["Vue.js", "TypeScript", "Webpack"],
    desc: compress`
      A place where all of my projects are listed, and little else. There's
      also no semblance of personal information or contact details. Overall,
      a very useful site.
    `,
    back: [[224, 166, 52], [223, 190, 106], [131, 131, 131], [0, 0, 0]],
    fore: "light",
    links: [
      { name: "check it out", href: "https://rossjrw.com" },
      { name: "GitHub", colour: "black", href: "https://github.com/rossjrw/rossjrw.github.io" }
    ],
    images: [
      { func: "main", href: "website.png" }
    ]
  },
  {
    name: "Maitreya.aic",
    size: "normal",
    date: [[2018, 2019]],
    tags: ["unfinished"],
    tech: ["Fiction", "CoffeeScript", "AngularJS", "Gulp.js"],
    desc: compress`
      A text adventure game, with vast scope for player agency. You are an
      artificial intelligence built to study a creature that lies beyond
      human comprehension.  How you go about that, and perhaps what exactly you
      discover, is up to you.
    `,
    back: ["#1488cc", "#1a73c6", "#205dbf", "#2b32b2"],
    fore: "light",
    links: [
      { name: "check it out", href: "/maitreya" },
      { name: "GitHub", colour: "black", href: "https://github.com/rossjrw/maitreya" }
    ],
    images: [
      { func: "main", href: "scp/maitreya/maitreya.png" },
      { func: "logo", href: "scp/maitreya/logo.png" }
    ]
  },
  {
    name: "Automafia",
    size: "normal",
    date: [[2016]],
    tags: ["abandoned"],
    tech: ["JavaScript", "AngularJS"],
    desc: compress`
      An attempt to automate Mafia, the social game of lies and betrayal. My
      first ever programming project. Began on a spreadsheet, but quickly grew
      too complex; it was this limitation that prompted me to begin learning
      JavaScript. It doesn't work and was never really a good idea, but the
      code contains fond memories.
    `,
    links: [
      { name: "check it out", href: "https://theyrecoming.neocities.org/mafia/automafia.html" }
    ],
    images: [
      { func: "main", href: "automafia.png" }
    ]
  }
]
