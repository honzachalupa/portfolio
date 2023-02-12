import moment from "moment";
import { IJob } from "../../../types/cms";
import { MarkdownRenderer } from "../../MarkdownRenderer";

interface IProps {
    jobs: IJob[];
}

export const ViewMobile: React.FC<IProps> = ({ jobs }) => (
    <div className="hide-scrollbar -mx-5 snap-x snap-mandatory overflow-x-scroll md:hidden">
        <div className={`flex w-[${jobs.length * 90}vw] float-left`}>
            {jobs.map(
                ({ id, title, description, client, dateFrom, dateTo }) => (
                    <article
                        key={id}
                        className="w-[90vw] snap-start pl-5 last:pr-5"
                    >
                        <header>
                            {client!.logo && (
                                <img
                                    src={client!.logo.url}
                                    alt={`${client!.name} icon`}
                                    className="mb-3 w-32 object-contain"
                                />
                            )}

                            <h3 className="text-xl font-semibold text-white">
                                {title} @{" "}
                                <a
                                    href={client!.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-rose-600"
                                >
                                    {client!.name}
                                </a>
                            </h3>

                            <p className="mt-2 font-mono text-sm">
                                {moment(dateFrom).format("MMMM YYYY")} -{" "}
                                {dateTo
                                    ? moment(dateTo).format("MMMM YYYY")
                                    : "Present"}
                            </p>
                        </header>

                        <div className="mt-5 rounded-md bg-[#112240] px-7 py-5 shadow-custom">
                            <MarkdownRenderer>
                                {description.markdown}
                            </MarkdownRenderer>
                        </div>
                    </article>
                )
            )}
        </div>
    </div>
);
