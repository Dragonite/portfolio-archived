const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.haolin.dev',
  title: "Haolin Wu's Portfolio",
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Haolin',
  role: 'Full Stack Engineer',
  description:
    "I'm highly motivated and deeply passionate about technology and its future. With my experience in the software development industry, alongside my tertiary teaching experience, I am committed to making an impact in creating change through application of my knowledge and skills.",
  resume: 'resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/haolin-wu-222188160/',
    github: 'https://github.com/dragonite',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'UWA Pharmacy',
    description:
      "A case study website written to manage, create and teach the University of Western Australia's pharmacy students a variety of scenarios during their placements.",
    stack: ['Django', 'Python', 'HTML5', 'SASS', 'Bootstrap'],
    image: 'case.png',
    sourceCode: 'https://github.com/320011/case',
  },
  {
    name: 'Whitehat',
    description:
      "A Discord bot and REST API Framework written in both JavaScript and Django for the the University of Western Australia's Ethical Hacking Club to manage events and other administrative tasks. Additionally, uses API webhooks to deliver event messages through user forms as an alternative.",
    stack: ['JavaScript', 'Python', 'Webhooks', 'JQuery', 'Django', 'REST API'],
    sourceCode: 'https://github.com/Dragonite/whitehat',
    image: 'whitehat.png'
  },
  {
    name: 'Wombat',
    description:
      'An algorithm and machine learning model designed to read tabular data and forms, while ingesting data from other sources, and produce machine readable data for visualisation and processing through a web application.',
    stack: ['Python', 'Tensorflow', 'OCR', 'Table Detection'],
    image: 'wombat.png'
  },
  {
    name: 'Fishing Tracker',
    description:
      'A website built using Flask to record and visualise the most popular fish and places within the Perth region, while surveying users on their experiences.',
    stack: ['Flask', 'Python', 'CSS', 'HTML5'],
    sourceCode: 'https://github.com/Dragonite/fishing',
    image: 'fishing.png'
  },
  {
    name: 'Farming Calculator',
    description:
      'A Discord bot written in TypeScript to calculate the next breeding tick of an animal within RuneScape, an online MMO. It uses cronjobs to broadcast and send push notifications to a user.',
    stack: ['cron', 'TypeScript'],
    sourceCode: 'https://github.com/varrock/anachronia',
    image: 'farming.png'
  },
  {
    name: 'Macro Builder',
    description:
      'A versatile keyboard macro built on top of AutoHotKey and Image Recognition, to perform tasks depending on the conditions of screen regions.',
    stack: ['AHK', 'Image Recognition'],
    sourceCode: 'https://github.com/Dragonite/imagesearch',
    image: 'macrobuilder.png'
  },
]

const skills = [
  'Python',
  'Django',
  'Flask',
  'CI/CD',
  'TDD',
  'HTML5',
  'CSS',
  'SASS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Java',
  'Swift',
  'Git',
  'AWS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'haolin97@gmail.com',
}

export { header, about, projects, skills, contact }
