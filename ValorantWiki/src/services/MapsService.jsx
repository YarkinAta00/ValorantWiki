import axios from "axios";

export const getMaps = async () => {
    try {
        const response = await axios.get(`https://valorant-api.com/v1/maps?language=tr-TR`);
        const mapData = response.data.data;
        return mapData;
    } catch (error) {
        console.error('Error fetching map data:', error);
        throw error;
    }
}
export const getMapsById = async (uuid) => {
    try {
        const response = await axios.get(`https://valorant-api.com/v1/maps/${uuid}?language=tr-TR`);
        const mapData = response.data.data;
        return mapData;
    }
    catch (error) {
        console.error('Error fetching map data:', error);
        throw error;
    }
};
