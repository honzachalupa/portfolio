import { createContext } from "react";

export interface ILocalization {
    defaultLocale: string;
    locale: string;
    locales: string[];
}

export interface IContext {
    localization: ILocalization;
}

export const initialContext: IContext = {
    localization: {
        defaultLocale: "",
        locale: "",
        locales: [],
    },
};

export const Context = createContext<IContext>(initialContext);
