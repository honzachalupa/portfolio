export const translations = {
    otherLanguage: {
        cs: 'English',
        en: 'Česky'
    },
    introduction: {
        cs: 'Úvod',
        en: 'Introduction'
    },
    projects: {
        cs: 'Projekty',
        en: 'Projects'
    },
    photography: {
        cs: 'Fotografie',
        en: 'Photography'
    },
    cooperation: {
        cs: 'Spolupráce',
        en: 'Cooperation'
    },
    aboutMe: {
        cs: 'O mně',
        en: 'About Me'
    },
    aboutMeContent: {
        cs: 'Jsem Front-End Developer z Prahy. Jsem Front-End Developer z Prahy. Jsem Front-End Developer z Prahy. Jsem Front-End Developer z Prahy. Jsem Front-End Developer z Prahy. Jsem Front-End Developer z Prahy.',
        en: 'I\'m 24 years old Front-End Developer based in Prague, Czech Republic. I\'m 24 years old Front-End Developer based in Prague, Czech Republic. I\'m 24 years old Front-End Developer based in Prague, Czech Republic. I\'m 24 years old Front-End Developer based in Prague, Czech Republic. I\'m 24 years old Front-End Developer based in Prague, Czech Republic.'
    },
    latestProject: {
        cs: 'Nejnovější projekt',
        en: 'Latest project'
    }
};

export const getTranslatedTexts = (language) => {
    const filtered = {};

    Object.keys(translations).forEach(key => {
        filtered[key] = translations[key][language];
    });

    return filtered;
};
