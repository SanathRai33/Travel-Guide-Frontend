import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

export const useRestaurants = (id) => {

    const [restaurants, setRestaurants] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const res = await axiosInstance.get(`restaurants/${id}`
                    // { withCredentials: true, }
                );
                setRestaurants(res?.data?.data);
            } catch (error) {
                setError(true)
                console.error("Auth check failed:", error);
            } finally {
                setLoading(false)
            }
        };

        fetchRestaurants();
    }, []);

    return { restaurants, setRestaurants, loading, error }

}