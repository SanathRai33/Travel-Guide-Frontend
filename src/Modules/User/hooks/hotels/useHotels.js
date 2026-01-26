import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

export const useHotels = () => {

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchHotels();
    }, [])

    const fetchHotels = async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await axiosInstance.get('hotels/'
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

    return { hotels, setHotels, loading, error, refetch: fetchHotels }

}