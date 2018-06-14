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
    cooperationContent: {
        cs: 'Považuji se sice za v celku univerzálního programátora, avšak mé schopnosti v oblasti back-endu či UX jsou značně omezené. Občas by se mi hodilo, kdyby někdo tu mojí one-man-show doplnil.<br /><br />Pokud by ses chtěl(a) podílet na mých projektech a myslíš, že by si dobře doplnil oblasti, ve kterých sám tápu, tak dej vědět. Do tvého portfolia se Ti to určitě bude hodit.',
        en: 'I consider myself as quite universal programmer, regardless my abilities in Back-End or UX is not that great how I wish them to be. Sometimes I would use someone more experienced in those techniques.<br /><br />If you would like to join me on my projects as Back-End Developer or UX Designer I would be really pleased.'
    },
    aboutMe: {
        cs: 'O mně',
        en: 'About Me'
    },
    aboutMeContent: {
        cs: 'Jsem Front-End Developer z Prahy. Jsem Front-End Developer z Prahy. Jsem Front-End Developer z Prahy. Jsem Front-End Developer z Prahy. Jsem Front-End Developer z Prahy. Jsem Front-End Developer z Prahy.',
        en: 'I\'m 24 years old Front-End Developer based in Prague, Czech Republic. Since most of designs were provided by the client, my goal was to make some under-the-hood features and learn all of the static HTML markup to move. Since most of designs were provided by the client, my goal was to make some under-the-hood features and learn all of the static HTML markup to move.'
    },
    latestProjects: {
        cs: 'Nejnovější projekty',
        en: 'Latest projects'
    },
    viewMore: {
        cs: 'Prohlédnout',
        en: 'View more'
    },
    backToProjectsList: {
        cs: 'Všechny projekty',
        en: 'Projects list'
    },
    allRightsReserved: {
        cs: 'Všechna práva vyhrazena.',
        en: 'All rights reserved.'
    },
    allRightsReservedName: {
        cs: 'Jan Chalupa',
        en: 'Jan "Honza" Chalupa'
    }
};

export const getTranslatedTexts = (language) => {
    const filtered = {};

    Object.keys(translations).forEach(key => {
        filtered[key] = translations[key][language];
    });

    return filtered;
};
