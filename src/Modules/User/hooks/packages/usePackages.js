import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

export const usePackages = () => {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await axiosInstance.get('packages/'
                    // { withCredentials: true, }
                );
                setPackages(res?.data?.data);
            } catch (error) {
                setError(true)
                console.error("Auth check failed:", error);
            } finally {
                setLoading(false)
            }
        };

        fetchPackages();
    }, []);

    return { packages, setPackages, loading, error }

}