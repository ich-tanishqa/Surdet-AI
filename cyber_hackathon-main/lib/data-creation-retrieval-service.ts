import { database } from "./database";

export const createData = async (url: string, email: string, description: string) => {
    await database.report.create({
        data: {
            url,
            email,
            description,
        }
    });

    console.log("URL reported successfully!");
}


export const retrieveData = async () => {
    const allReports = await database.report.findMany(
        {
            orderBy: {
                createdAt: "asc"
            }
        }
    );
    return allReports;
}