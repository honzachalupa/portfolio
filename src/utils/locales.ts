export const checkMatchingLocales = (
    nextLocales: string[],
    cmsLocales: string[]
) => {
    nextLocales = nextLocales.sort();
    cmsLocales = cmsLocales.sort();

    if (nextLocales.toString() !== cmsLocales.toString()) {
        console.error(
            `Locales doesn't match between CMS (${cmsLocales.join()}) and Next (${nextLocales.join()})`
        );
    }
};
