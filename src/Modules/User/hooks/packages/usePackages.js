import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

export const usePackages = () => {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchPackages();
    }, [])

    const fetchPackages = async () => {
        setLoading(true);
        setError(false);
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

    return { packages, setPackages, loading, error, refetch: fetchPackages }

}