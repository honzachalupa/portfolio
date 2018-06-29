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
        cs: 'Jsem Front-End Developer z Prahy. V posledních letech se zaměřuji primárně na React JS. Díky mnoha projektům, na kterých jsem se podílel, mám však přesah také do Back-End Developmentu. To však není to, čemu bych se chtěl primárně věnovat.',
        en: 'I\'m 25 years old Front-End Developer based in Prague, Czech Republic. For the past few years I\'m mainly focusing on React JS. Still, thank to all those project I participate on, I have also some experience in Back-End Development. Nevertheless my main focus is the Front-End.'
    },
    letsChat: {
        cs: 'Prohoďme pár slov...',
        en: 'Let\'s chat...'
    },
    sendMeAnEmail: {
        cs: 'Napište mi',
        en: 'Send me an e-mail'
    },
    callMe: {
        cs: 'Zavolejte mi',
        en: 'Call me'
    },
    latestProjects: {
        cs: 'Nejnovější projekty',
        en: 'Latest projects'
    },
    viewMore: {
        cs: 'Prohlédnout',
        en: 'View more'
    },
    showMore: {
        cs: 'Zobrazit více',
        en: 'View more'
    },
    moreProjects: {
        cs: 'Více projektů',
        en: 'More projects'
    },
    backToProjectsList: {
        cs: 'Všechny projekty',
        en: 'All projects'
    },
    personal: {
        cs: 'Osobní',
        en: 'Personal'
    },
    inCooperation: {
        cs: 'Ve spolupráci',
        en: 'In cooperation'
    },
    allRightsReserved: {
        cs: 'Všechna práva vyhrazena.',
        en: 'All rights reserved.'
    },
    allRightsReservedName: {
        cs: 'Jan Chalupa',
        en: 'Jan "Honza" Chalupa'
    },
    webApps: {
        cs: 'Webové aplikace',
        en: 'Web apps'
    },
    nativeApps: {
        cs: 'Nativní aplikace',
        en: 'Native apps'
    },
    allApps: {
        cs: 'Všechny aplikace',
        en: 'All apps'
    },
    filteredBy: {
        cs: 'Filtrováno podle',
        en: 'Filtered by'
    }
};

export const getTranslatedTexts = (language) => {
    const filtered = {};

    Object.keys(translations).forEach(key => {
        filtered[key] = translations[key][language];
    });

    return filtered;
};
