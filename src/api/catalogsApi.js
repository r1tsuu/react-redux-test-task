import {
    client
} from "./api";

export const catalogsApi = {
    fetchAll: async() => {
        return await client.get("catalog");
    },
};