import { replaceAccentedCharacters } from "@honzachalupa/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Database } from "../../../supabase/types";
import { ProjectActions } from "../../actions/project";
import { Form } from "../Form";
import { Table } from "../Table";
import { getImageUrl, uploadImage } from "./ProjectsList.utils";

interface IFormData {
    name: string;
    description: string;
    topicsList: string;
    url: string;
    image: FileList;
}

export const ProjectsList: React.FC = () => {
    const { data: projects, refetch: refetchProjects } = useQuery(
        ["projects"],
        ProjectActions.search
    );

    const { mutate: addProject } = useMutation(
        (payload: Database["public"]["Tables"]["projects"]["Insert"]) =>
            ProjectActions.create(payload),
        {
            onSuccess: () => refetchProjects(),
        }
    );

    const handleAddProject = async ({
        topicsList,
        image,
        ...formData
    }: IFormData) => {
        const id = replaceAccentedCharacters(formData.name)
            .replace(/\s/g, "-")
            .toLowerCase();

        await uploadImage(id, image[0]);
        const imageUrl = await getImageUrl(id, image[0]);

        addProject({
            ...formData,
            id,
            topics: topicsList.split(","),
            imageUrl,
        });
    };

    return (
        <>
            <Table
                columns={[
                    {
                        id: "name",
                        label: "Name",
                    },
                    {
                        id: "description",
                        label: "Description",
                    },
                    {
                        id: "topics",
                        label: "Topics",
                    },
                    {
                        id: "url",
                        label: "URL",
                    },
                    {
                        id: "imageUrl",
                        label: "Image",
                        renderer: ({ name, imageUrl }) => (
                            <a
                                href={imageUrl}
                                target="_blank"
                                className="group relative cursor-pointer underline"
                                rel="noreferrer"
                            >
                                Hover for preview
                                <Image
                                    src={imageUrl}
                                    alt={name}
                                    fill
                                    className="hidden !h-[200px] !w-[400px] group-hover:block"
                                />
                            </a>
                        ),
                    },
                ]}
                items={projects}
            />

            <Form
                inputs={[
                    {
                        id: "name",
                        label: "Name",
                        isRequired: true,
                    },
                    {
                        id: "description",
                        label: "Description",
                        isRequired: true,
                    },
                    {
                        id: "topicsList",
                        label: "Topics (separated by comma)",
                        placeholder: "Example: React.js, Next.JS, TypeScript",
                        isRequired: true,
                    },
                    {
                        id: "url",
                        label: "URL",
                    },
                    {
                        id: "image",
                        label: "Image URL",
                        type: "file",
                        isRequired: true,
                    },
                ]}
                buttonLabel="Add project"
                onSubmit={handleAddProject}
            />
        </>
    );
};
