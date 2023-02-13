import { gql } from "@apollo/client";
import config from "../../../config";
import { Page } from "../../types/cms";
import { apollo } from "../../utils/apollo";

export const getAll = async () => {
    try {
        const { data } = await apollo.query<{ pages: Page[] }>({
            query: gql`
                query {
                    pages {
                        localizations(includeCurrent: true) {
                            locale
                        }
                    }
                }
            `,
        });

        console.log(data.pages);

        return data.pages.reduce((acc, value) => {
            // @ts-ignore
            value?.localizations?.forEach(({ locale }) => {
                if (!acc.includes(locale)) {
                    acc.push(locale);
                }
            });

            return acc;
        }, [] as string[]);
    } catch (e) {
        return [config.localization.defaultLocale];
    }
};

export const CMSLocalesActions = {
    getAll,
};
