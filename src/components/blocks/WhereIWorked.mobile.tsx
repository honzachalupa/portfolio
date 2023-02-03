import moment from "moment";
import { Database } from "../../../supabase/types";
import { ListItemWithIcon } from "../List";

interface IProps {
    data: Database["public"]["Tables"]["jobs"]["Row"][];
}

export const ViewMobile: React.FC<IProps> = ({ data }) => (
    <div className="hide-scrollbar -mx-5 snap-x snap-mandatory overflow-x-scroll md:hidden">
        <div className={`flex w-[${data.length * 90}vw] float-left`}>
            {data.map(
                ({
                    id,
                    clientName,
                    clientUrl,
                    jobTitle,
                    jobDescription,
                    projectNames,
                    dateFrom,
                    dateTo,
                }) => (
                    <article
                        key={id}
                        className="w-[90vw] snap-start pl-5 last:pr-5"
                    >
                        <header>
                            <h3 className="text-xl font-semibold text-white">
                                {jobTitle} @{" "}
                                <a
                                    href={clientUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-rose-600"
                                >
                                    {clientName}
                                </a>
                            </h3>

                            <p className="mt-2 font-mono text-sm">
                                {moment(dateFrom).format("MMMM YYYY")} -{" "}
                                {dateTo
                                    ? moment(dateTo).format("MMMM YYYY")
                                    : "Present"}
                            </p>
                        </header>

                        <div className="mt-5 rounded-md bg-[#112240] px-7 py-5 leading-7 shadow-custom">
                            <ul>
                                {jobDescription?.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            {projectNames && projectNames.length > 0 && (
                                <h4 className="mb-3 mt-6 text-white">
                                    Projects
                                </h4>
                            )}

                            <ul>
                                {projectNames?.map((item) => (
                                    <ListItemWithIcon key={item}>
                                        {item}
                                    </ListItemWithIcon>
                                ))}
                            </ul>
                        </div>
                    </article>
                )
            )}
        </div>
    </div>
);
