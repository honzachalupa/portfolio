import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode, useContext } from "react";
import { config } from "../../../config";
import { TidioChat } from "../../components/TidioChat";
import { Context } from "../../utils/context";

interface IProps {
    headline?: string;
    children: ReactNode;
}

export const LayoutPrimary: React.FC<IProps> = ({ headline, children }) => {
    const { user } = useContext(Context);

    const router = useRouter();

    const title = [headline, config.appName].filter(Boolean).join(" | ");

    return (
        <div className="px-[150px]">
            <Head>
                <title>{title}</title>

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            {children}

            <TidioChat />
        </div>
    );
};
