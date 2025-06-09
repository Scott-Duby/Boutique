import { useMutation } from "@tanstack/react-query";
import axios from "axios";


interface IScrapeProps {
    username: string,
    unsoldOnly: boolean
}

export const useScrapedData = (
) => useMutation({
    mutationKey: ["getScrapedData"],
    mutationFn: async (values: IScrapeProps) => {
        const { data } = await axios.get(`http://127.0.0.1:5000/scrape/${values.username}?unsoldOnly=${values.unsoldOnly}`, {timeout: 500000, withCredentials: false});
        console.log(data.listings)
        return data.listings;
    }
})