import cx from "classnames";
import moment from "moment";
import { useMemo, useState } from "react";
import { Database } from "../../../supabase/types";
import { ContentBlockFadeIn } from "../ContentBlockFadeIn";
import { ListItemWithIcon } from "../List";

interface IProps {
    data: Database["public"]["Tables"]["jobs"]["Row"][];
}

export const WhereIWorkedBlock: React.FC<IProps> = ({ data }) => {
    const [selectedItemId, setSelectedItemId] = useState<string>("edhance");

    const selectedItem = useMemo(
        () => data.find(({ id }) => id === selectedItemId) || data[0],
        [data, selectedItemId]
    );

    return (
        <ContentBlockFadeIn>
            <section className="mx-auto max-w-[60vw] py-36">
                <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
                    Where I&apos;ve worked
                </h2>

                <div className="flex">
                    <div className="mr-10 basis-0">
                        {data.map(({ id, clientName }) => (
                            <button
                                key={id}
                                className={cx(
                                    "w-full whitespace-nowrap py-2 text-left font-mono text-sm hover:text-white",
                                    {
                                        "text-rose-600": id === selectedItemId,
                                    }
                                )}
                                onClick={() => setSelectedItemId(id)}
                            >
                                {clientName}
                            </button>
                        ))}
                    </div>

                    {selectedItem && (
                        <article>
                            <header>
                                <h3 className="text-xl font-semibold text-white">
                                    {selectedItem.jobTitle} @{" "}
                                    <a
                                        href={selectedItem.clientUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-rose-600"
                                    >
                                        {selectedItem.clientName}
                                    </a>
                                </h3>

                                <p className="mt-2 font-mono text-sm">
                                    {moment(selectedItem.dateFrom).format(
                                        "MMMM YYYY"
                                    )}{" "}
                                    -{" "}
                                    {selectedItem.dateTo
                                        ? moment(selectedItem.dateTo).format(
                                              "MMMM YYYY"
                                          )
                                        : "Present"}
                                </p>
                            </header>

                            <div className="mt-5 rounded-md bg-[#112240] px-7 py-5 leading-7 shadow-custom">
                                <ul>
                                    {selectedItem.jobDescription?.map(
                                        (item) => (
                                            <li key={item}>{item}</li>
                                        )
                                    )}
                                </ul>

                                {selectedItem.projectNames &&
                                    selectedItem.projectNames.length > 0 && (
                                        <h4 className="mb-3 mt-6 text-white">
                                            Projects
                                        </h4>
                                    )}

                                <ul>
                                    {selectedItem.projectNames?.map((item) => (
                                        <ListItemWithIcon key={item}>
                                            {item}
                                        </ListItemWithIcon>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    )}
                </div>
            </section>
        </ContentBlockFadeIn>
    );
};
