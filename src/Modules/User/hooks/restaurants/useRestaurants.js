import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

export const useRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const fetchRestaurants = async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await axiosInstance.get('restaurants/'
                // { withCredentials: true, }
            );
            console.log("This is api", res?.data)
            setRestaurants(res?.data?.data);
        } catch (error) {
            setError(true)
            console.error("Auth check failed:", error);
        } finally {
            setLoading(false)
        }
    };

    return { restaurants, setRestaurants, loading, error, refetch: fetchRestaurants }

}