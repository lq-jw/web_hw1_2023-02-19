import { useQuery } from "react-query";
import { getImgs } from "../api";

export const useImgs = () => {
    const { data, isLoading } = useQuery([], getImgs);
    return { data, isLoading };
};