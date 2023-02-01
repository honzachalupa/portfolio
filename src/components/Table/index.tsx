import { ReactNode } from "react";

interface IProps<T> {
    columns: {
        id: string;
        label: string;
        renderer?: (item: T) => string | number | ReactNode;
    }[];
    items: T[] | undefined;
}

export const Table = <T,>({ columns, items }: IProps<T>) => {
    const trClassName = "";

    return (
        <table>
            <thead>
                <tr className={trClassName}>
                    {columns.map(({ id, label }) => (
                        <th key={id}>{label}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {items?.map((item, i) => (
                    <tr key={i} className={trClassName}>
                        {columns.map(({ id, renderer }) => (
                            <td key={id}>
                                {/*
                                // @ts-ignore */}
                                {renderer ? renderer(item) : item[id]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
