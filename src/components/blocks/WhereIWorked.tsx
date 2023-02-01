import cx from "classnames";
import moment from "moment";
import { useMemo, useState } from "react";
import { ListItemWithIcon } from "../List";

export const WhereIWorkedBlock: React.FC = () => {
    const [selectedItemId, setSelectedItemId] = useState<string>("edhance");

    const whereIWorkedItems = useMemo<
        {
            id: string;
            client: {
                name: string;
                url: string;
            };
            jobTitle: string;
            dateFrom: string;
            dateTo: string | undefined;
            listItems: string[];
        }[]
    >(
        () => [
            {
                id: "edhance",
                client: {
                    name: "Edhance s.r.o.",
                    url: "httpw://www.edhance.cz/",
                },
                jobTitle: "Full-stack Developer",
                dateFrom: moment("1.3.2022").format(),
                dateTo: undefined,
                listItems: [
                    "Project: Názorná výuka - Project I had the opportunity to work on was an interactive learning solution for elementary schools. It was developed on green-field and I was the only developer there. The goal of the application is to make learning more engaging and fun for students, by incorporating elements of play and interactivity into the learning process. The application was built using React, Firebase and many more newest technologies.",
                ],
            },
            {
                id: "vodafone",
                client: {
                    name: "Vodafone a.s.",
                    url: "https://www.vodafone.cz/",
                },
                jobTitle: "React Developer",
                dateFrom: moment("1.5.2019", "D.M.YYYY").format(),
                dateTo: undefined,
                listItems: [
                    "Project: Backoffice Tools application - I developed a lead management tool for retail colleagues using React (and Java on back-end side). My role focused on the React side, implementing user interface features and ensuring a smooth user experience. The application offered an easy-to-use interface for managing leads, including the ability to view, add, edit and delete leads, as well as filter and search.",
                ],
            },
            {
                id: "softec",
                client: {
                    name: "Softec s.r.o.",
                    url: "https://www.softec.cz/",
                },
                jobTitle: "React Developer",
                dateFrom: moment("1.3.2018", "D.M.YYYY").format(),
                dateTo: moment("1.5.2019", "D.M.YYYY").format(),
                listItems: [
                    "Project: Českomoravská stavební spořitelna - Kalkulačka (Progressive Web Application)",
                    "Project: Česká pojišťovna - Client zone",
                ],
            },
            {
                id: "finnology",
                client: { name: "Finnology s.r.o.", url: "" },
                jobTitle: "Front-End Developer",
                dateFrom: moment("1.12.2017", "D.M.YYYY").format(),
                dateTo: moment("1.2.2018", "D.M.YYYY").format(),
                listItems: [
                    "Development of web-applications React. HTML and (S)CSS is matter of course.",
                ],
            },
            {
                id: "actum",
                client: { name: "Actum s.r.o.", url: "" },
                jobTitle: "Front-End Developer",
                dateFrom: moment("1.9.2016", "D.M.YYYY").format(),
                dateTo: moment("1.11.2017", "D.M.YYYY").format(),
                listItems: [
                    "Development of web-applications in both pure JavaScript and React. HTML and (S)CSS is matter of course.",
                    "Long-term development for Innogy (RWE) company on-site in Essen, Germany.",
                    "Shorter-term cooperation with companies Makro (Metro), Raiffeisenbank, Komerční bank and more.",
                ],
            },
            {
                id: "allianz",
                client: { name: "Allianz Pojišťovna a.s.", url: "" },
                jobTitle: "JavaScript Developer",
                dateFrom: moment("1.3.2015", "D.M.YYYY").format(),
                dateTo: moment("1.8.2016", "D.M.YYYY").format(),
                listItems: [
                    "Creating and maintaining BPM processes in IBM's TeamWorks platform. Working with Oracle databases.",
                ],
            },
        ],
        []
    );

    const selectedItem = useMemo(
        () =>
            whereIWorkedItems.find(({ id }) => id === selectedItemId) ||
            whereIWorkedItems[0],
        [whereIWorkedItems, selectedItemId]
    );

    return (
        <section className="py-36">
            <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
                Where I&apos;ve worked
            </h2>

            <div className="flex">
                <div className="mr-10 basis-0">
                    {whereIWorkedItems.map(({ id, client }) => (
                        <button
                            key={id}
                            className={cx(
                                "w-full whitespace-nowrap py-2 text-left",
                                {
                                    "text-emerald-500": id === selectedItemId,
                                }
                            )}
                            onClick={() => setSelectedItemId(id)}
                        >
                            {client.name}
                        </button>
                    ))}
                </div>

                {selectedItem && (
                    <article>
                        <header>
                            <h3 className="text-xl font-semibold text-white">
                                {selectedItem.jobTitle} @{" "}
                                <a
                                    href={selectedItem.client.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-emerald-500"
                                >
                                    {selectedItem.client.name}
                                </a>
                            </h3>

                            <p className="mt-2 text-sm">
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

                        <ul className="mt-5">
                            {selectedItem.listItems.map((item) => (
                                <ListItemWithIcon key={item} className="mb-3">
                                    {item}
                                </ListItemWithIcon>
                            ))}
                        </ul>
                    </article>
                )}
            </div>
        </section>
    );
};
