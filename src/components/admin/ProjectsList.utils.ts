import { buckets, supabase } from "../../utils/supabase";

const getFileName = (id: string, fileExtension: string) =>
    `${id}.${fileExtension}`;

export const uploadImage = async (id: string, image: File) => {
    const fileExtension = image.type.split("/")[1];
    const fileName = getFileName(id, fileExtension);

    const { error } = await supabase.storage
        .from(buckets.projectImages)
        .upload(fileName, image);

    if (error) {
        throw new Error(error.message);
    }
};

export const getImageUrl = async (id: string, image: File) => {
    const fileExtension = image.type.split("/")[1];
    const fileName = getFileName(id, fileExtension);

    const {
        data: { publicUrl },
    } = supabase.storage.from(buckets.projectImages).getPublicUrl(fileName);

    return publicUrl;
};
