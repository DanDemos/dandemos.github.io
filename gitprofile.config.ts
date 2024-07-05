// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dandemos', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'DoMaLoG',
          description:
            'Domalog is perfect for turning experiences into value, breaking out of your shell and unlocking your potential. Not only can you easily take and review notes, You can also organize your thinking based on the gap between your peers" perspectives.We will continue to evolve in order to overcome the barriers of taste together with you.',
          imageUrl:
            'https://domalog.fun/images/fav-icon.png',
          link: 'https://domalog.fun/',
        },
        {
          title: 'Myanmar Polestar',
          description:
            'Myanmar Polestar  is a fully Myanmar owned Destination Management(DMC) and MICE Management Company, first established in 2001. With an office of 30 staff based in Yangon',
          imageUrl:
            'https://www.myanmarpolestar.com/dist/front/img/logo1.png',
          link: 'https://www.myanmarpolestar.com/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Dan Demo',
    description: 'Dan Demo Code Repository',
    imageURL: 'https://avatars.githubusercontent.com/u/98115956?v=4',
  },
  social: {
    linkedin: 'kaung-mon-soe-aba827218',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '22034361/dan-demo', // example: '1/jeff-atwood'
    skype: '',
    telegram: '+959989002021',
    website: 'https://dandemo.website/',
    phone: '+959989002021',
    email: 'dandemo14613@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'CSS',
    'Tailwind',
    'JavaScript',
    'ReactNative.js',
    'React.js',
    'PHP',
    'Laravel',
    'Node.js',
    'Nest.js',
    'MySQL',
    'Git',
  ],
  experiences: [
    {
      company: 'Innovix Solutions',
      position: 'Team Lead Senior React Native Developer',
      from: 'February 2023',
      to: 'Present',
      companyLink: 'https://innovix-solutions.com/',
    },
    {
      company: 'Host Myanmar',
      position: 'Full Stack Team Lead Senior Developer',
      from: 'November 2022',
      to: 'February 2023',
      companyLink: 'https://hostmyanmar.net/',
    },
    {
      company: 'Myanmar Polestar',
      position: 'Frontend Developer & UI/UX Designer',
      from: 'August 2022',
      to: 'November 2022',
      companyLink: 'https://www.facebook.com/myanmarpolestartours/',
    },
    {
      company: 'MMIT Innovation',
      position: 'Frontend Developer',
      from: 'February 2022',
      to: 'August 2022',
      companyLink: '',
    },
    {
      company: 'Myan Pro Solutions',
      position: 'System Administrator ',
      from: 'August 2020',
      to: 'July 2021',
      companyLink: 'https://myanprosolutions.com/',
    },
  ],
  certifications: [
    {
      name: 'Advanced React',
      body: 'Meta Front-End Developer Professional Certificate',
      year: 'January 2024',
      link: 'https://coursera.org/share/af10fee9828b3404ebe7db4b04965b7f',
    },
    {
      name: 'Programming with JavaScript',
      body: 'Meta Front-End Developer Professional Certificate',
      year: 'January 2024',
      link: 'https://www.coursera.org/share/2aa7cdda57f60d34cbd759672619da9c',
    },
    {
      name: 'Introduction to Front-End Development',
      body: 'Meta Front-End Developer Professional Certificate',
      year: 'January 2024',
      link: 'https://www.coursera.org/share/c4db327cede4000b3a9296c7c877827f',
    },
  ],
  educations: [
    {
      institution: 'University of Greenwich ',
      degree: 'Bachelor of Science',
      from: '2019',
      to: '2020',
    },
    {
      institution: 'Scottish Qualifications Authority',
      degree: 'Higher National Diploma',
      from: '2017',
      to: '2019',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'halloween',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
