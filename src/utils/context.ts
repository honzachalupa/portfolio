import { createContext } from "react";

export interface IContext {
    user: any;
}

export const initialContext: IContext = {
    user: null,
};

export const Context = createContext<IContext>(initialContext);
