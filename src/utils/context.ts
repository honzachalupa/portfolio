import { createContext } from "react";

export interface IContext {}

export const initialContext: IContext = {};

export const Context = createContext<IContext>(initialContext);
