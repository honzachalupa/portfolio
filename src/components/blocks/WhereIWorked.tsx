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
            jobDescription: string[];
            projects?: string[];
            dateFrom: string;
            dateTo: string | undefined;
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
                jobDescription: [
                    "Project I had the opportunity to work on was an interactive learning solution for elementary schools. It was developed on green-field and I was the only developer there.",
                    "The goal of the application is to make learning more engaging and fun for students, by incorporating elements of play and interactivity into the learning process. The application was built using React, Firebase and many more newest technologies.",
                ],
                projects: ["Názorná výuka"],
                dateFrom: moment("1.3.2022").format(),
                dateTo: undefined,
            },
            {
                id: "vodafone",
                client: {
                    name: "Vodafone a.s.",
                    url: "https://www.vodafone.cz/",
                },
                jobTitle: "React Developer",
                jobDescription: [
                    "For four years I've worked on development of a lead management tool for retail colleagues using React (and Java on back-end side). My role focused on the React side, implementing user interface features and ensuring a smooth user experience. The application offered an easy-to-use interface for managing leads, including the ability to view, add, edit and delete leads, as well as filter and search.",
                ],
                projects: [
                    "Leads",
                    "Orders",
                    "Messages",
                    "Household",
                    "Outages",
                    "Administration",
                ],
                dateFrom: moment("1.5.2019", "D.M.YYYY").format(),
                dateTo: undefined,
            },
            {
                id: "softec",
                client: {
                    name: "Softec s.r.o.",
                    url: "https://www.softec.cz/",
                },
                jobTitle: "React Developer",
                jobDescription: ["TODO"],
                projects: [
                    "Českomoravská stavební spořitelna - Insurance pricing calculator",
                    "Česká pojišťovna - Client zone",
                ],
                dateFrom: moment("1.3.2018", "D.M.YYYY").format(),
                dateTo: moment("1.5.2019", "D.M.YYYY").format(),
            },
            {
                id: "finnology",
                client: { name: "Finnology s.r.o.", url: "" },
                jobTitle: "Front-End Developer",
                jobDescription: [
                    "Development of web-applications React. HTML and (S)CSS is matter of course.",
                ],
                projects: ["Chytrý Honza", "Fingo"],
                dateFrom: moment("1.12.2017", "D.M.YYYY").format(),
                dateTo: moment("1.2.2018", "D.M.YYYY").format(),
            },
            {
                id: "actum",
                client: { name: "Actum s.r.o.", url: "" },
                jobTitle: "Front-End Developer",
                jobDescription: [
                    "Development of web-applications in both pure JavaScript and React. HTML and (S)CSS is matter of course.",
                    "Long-term development for Innogy (RWE) company on-site in Essen, Germany.",
                    "Shorter-term cooperation with companies Makro (Metro), Raiffeisenbank, Komerční bank and more.",
                ],
                projects: ["innogy Product Finder", "innogy Intranet"],
                dateFrom: moment("1.9.2016", "D.M.YYYY").format(),
                dateTo: moment("1.11.2017", "D.M.YYYY").format(),
            },
            {
                id: "allianz",
                client: { name: "Allianz Pojišťovna a.s.", url: "" },
                jobTitle: "JavaScript Developer",
                jobDescription: [
                    "Creating and maintaining BPM processes in IBM's TeamWorks platform. Working with Oracle databases.",
                ],
                dateFrom: moment("1.3.2015", "D.M.YYYY").format(),
                dateTo: moment("1.8.2016", "D.M.YYYY").format(),
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
                                "w-full whitespace-nowrap py-2 text-left font-mono text-sm",
                                {
                                    "text-rose-600": id === selectedItemId,
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
                                    className="text-rose-600"
                                >
                                    {selectedItem.client.name}
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
                                {selectedItem.jobDescription?.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            {selectedItem.projects &&
                                selectedItem.projects.length > 0 && (
                                    <h4 className="mb-3 mt-6 text-white">
                                        Projects
                                    </h4>
                                )}

                            <ul>
                                {selectedItem.projects?.map((item) => (
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
    );
};
