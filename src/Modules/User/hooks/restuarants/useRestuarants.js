import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

export const useRestuarants = () => {

    const [restuarants, setRestuarants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchRestuarants();
    }, [])

    const fetchRestuarants = async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await axiosInstance.get('restuarants/'
                // { withCredentials: true, }
            );
            setRestuarants(res?.data?.data);
        } catch (error) {
            setError(true)
            console.error("Auth check failed:", error);
        } finally {
            setLoading(false)
        }
    };

    return { restuarants, setRestuarants, loading, error, refetch: fetchRestuarants }

}