import cx from "classnames";
import moment from "moment";
import { useMemo, useState } from "react";
import { TJob } from "../../actions/job";
import { ListItemWithIcon } from "../List";

interface IProps {
    jobs: TJob[];
}

export const ViewDesktop: React.FC<IProps> = ({ jobs }) => {
    const [selectedItemId, setSelectedItemId] = useState<string>("edhance");

    const selectedItem = useMemo(
        () => jobs.find(({ id }) => id === selectedItemId) || jobs[0],
        [jobs, selectedItemId]
    );

    return (
        <div className="hidden md:flex">
            <div className="mr-10 basis-0">
                {jobs.map(({ id, client }) => (
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
                        {client.name}
                    </button>
                ))}
            </div>

            {selectedItem && (
                <article>
                    <header className="flex flex-row justify-between">
                        <div>
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
                        </div>

                        {selectedItem.client.logo && (
                            <img
                                src={`data:image/svg+xml,${encodeURIComponent(
                                    selectedItem.client.logo
                                )}`}
                                alt={`${selectedItem.client.name} icon`}
                                className="w-32 object-contain"
                            />
                        )}
                    </header>

                    <div className="mt-5 rounded-md bg-[#112240] px-7 py-5 shadow-custom">
                        <ul>
                            {selectedItem.jobDescription?.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
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
    );
};
