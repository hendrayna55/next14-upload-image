import {prisma} from "@/lib/prisma";

export const getImages = async () => {
    try {
        const result = await prisma.upload.findMany({
            orderBy: {created_at: "desc"}
        });

        return result;
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}

export const getImagesById = async (id:string) => {
    try {
        const result = await prisma.upload.findUnique({
            where: {id}
        });

        return result;
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}