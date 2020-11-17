import { compress } from "compress-tag"
import { Project } from "@/types"

export const projects: Project[] = [
  {
    name: "Faux Coffee Shop",
    date: [[2017]],
    tags: ["completed"],
    tech: ["JavaScript", "AngularJS"],
    desc: compress`
      A tool and font I use to help me remember a handwritten neograph I
      designed, which was visually inspired by the [Coffee Shop
      Code](https://redd.it/5rzi22).  I use it for writing notes, when it's
      something personal that I don't want others to read. So why is it
      open source?
    `,
    links: [
      { name: "check it out", href: "/neograph" }
    ],
    images: [
      { type: "main", href: "neograph.png" }
    ]
  },
  {
    name: "The Pipeworks",
    date: [[2016], [2017]],
    tags: ["completed"],
    tech: ["Spreadsheets", "Fiction"],
    desc: compress`
      A multiplayer board game hosted on Google Sheets. Played with 11 players
      and lasted for a month, once in 2016 and again in 2017, though it could
      handle more.

      Players are split into teams, with some players embedded into other teams
      as spies. Betrayal is encouraged. Could be played either team-vs-team or
      cooperatively against the board and host, depending on how player-player
      relations develop.
    `,
    back: [[40, 40, 40], [191, 144, 0], [40, 40, 40], [40, 40, 40]],
    links: [
      { name: "board", href: "https://docs.google.com/spreadsheets/d/1G0XCT7KVrhxvwK1Tv-7TBZiYjiwX9NlSijeQNuWlEec/edit?usp=sharing" },
      { name: "rules", href: "https://docs.google.com/document/d/1Dwu1WJfo7OCM7y66ucyw6y37SK-96s2T4UIwTDTBZaQ/edit?usp=sharing" }
    ],
    images: [
      { type: "main", href: "pipeworks-board.png" },
      { type: "logo", href: "pipeworks-logo.png" }
    ]

  },
  {
    name: "SCP-3939",
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
      { type: "main", href: "3939.png" }
    ]
  },
  {
    name: "SCP-3211",
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

      Written on a spreadsheet and compiled to JavaScript.
    `,
    back: [[250, 250, 250], [245, 245, 245], [240, 240, 240], [243, 87, 87]],
    links: [
      { name: "check it out", href: "http://scp-wiki.net/scp-3211" }
    ],
    images: [
      { type: "main", href: "3211.png" }
    ]
  },
  {
    name: "Text gradient generator",
    date: [[2018]],
    tags: ["completed"],
    tech: ["JavaScript", "AngularJS"],
    desc: compress`
      An online tool for making a smooth colour gradient across a line of text.
      Outputs BBCode. Useful for both of the people who still use BBCode.
    `,
    back: ["#db8e5a", "#31acfa", "#333", "#333"],
    links: [
      { name: "check it out", href: "/text-gradient" }
    ],
    images: [
      { type: "main", href: "gradient.png" }
    ]
  },
  {
    name: "Black Highlighter",
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
    links: [
      { name: "check it out", href: "https://github.com/Nu-SCPTheme/Black-Highlighter" }
    ],
    images: [
      { type: "main", href: "bhl-desktop.png" },
      { type: "mobile", href: "bhl-mobile.png" },
      { type: "logo", href: "black-highlighter-logo.svg" }
    ]
  },
  {
    name: "Regex Series Replace",
    date: [[2020]],
    tags: ["completed", "utility"],
    tech: ["TypeScript", "Vue.js", "Webpack"],
    desc: compress`
      A tool for applying a series of regex find-and-replace rules to a block
      of text. Configured rules can be exported and imported with URL
      arguments.

      Made because I got sick of having to type out the same rules again and
      again when I have to make a series of replacements that I've already made
      before.
    `,
    links: [
      { name: "check it out", href: "/series-replace" }
    ],
    images: [
      { type: "main", href: "regex-series-replace.png" }
    ]
  },
  {
    name: "SCUTTLE API wrapper",
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
    links: [
      { name: "check it out", href: "https://github.com/rossjrw/rossjrw" }
    ],
    images: [
      { type: "main", href: "ur.png" }
    ]
  },
  {
    name: "TARS",
    date: [[2019]],
    tags: ["working"],
    tech: ["Python"],
    desc: compress`
      An IRC bot originally built for automating social media posts for SCP
      Wiki staff, but mostly used as a Markov Chain generator for making
      almost-real sentences.
    `,
    links: [
      { name: "check it out", href: "/tars/help" }
    ]
  },
  {
    name: "Gallifreyo",
    date: [[2017, 2018], [2020]],
    tags: ["working"],
    tech: ["TypeScript", "Vue.js", "Webpack", "SVG"],
    desc: compress`
      A Gallifreyan translator, based on a language made by fans of Doctor Who.
    `,
    links: [
      { name: "check it out", href: "/gallifreyo" }
    ],
    images: [
      { type: "main", href: "gallifreyo.png" }
    ]
  },
  {
    name: "rossjrw.com",
    date: [[2020]],
    tags: ["working"],
    tech: ["Vue.js", "TypeScript", "Webpack"],
    desc: compress`
      A place where all of my projects are listed, and little else. There's
      also no semblance of personal information or contact details. Overall,
      a very useful site.
    `,
    back: [[224, 166, 52], [223, 190, 106], [131, 131, 131], [0, 0, 0]],
    links: [
      { name: "check it out", href: "https://rossjrw.com" }
    ],
    images: [
      { type: "main", href: "website.png" }
    ]
  },
  {
    name: "Maitreya.aic",
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
    links: [
      { name: "check it out", href: "/maitreya" }
    ],
    images: [
      { type: "main", href: "maitreya.png" },
      { type: "logo", href: "maitreya-logo.png" }
    ]
  },
  {
    name: "Automafia",
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
      { type: "main", href: "automafia.png" }
    ]
  }
]
