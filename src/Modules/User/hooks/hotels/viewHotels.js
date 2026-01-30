import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

export const useHotels = (id) => {

    const [hotels, setHotels] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const res = await axiosInstance.get(`hotels/${id}`
                    // { withCredentials: true, }
                );
                setHotels(res?.data?.data);
            } catch (error) {
                setError(true)
                console.error("Auth check failed:", error);
            } finally {
                setLoading(false)
            }
        };

        fetchHotels();
    }, []);

    return { hotels, setHotels, loading, error }

}