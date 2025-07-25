"use client";
import React, {
    useState,
    createContext,
    useContext,
    useEffect,
    ReactNode
} from 'react'

type DataType = {
    id: number;
    facility: string;
    slots: number;
    serviceId: number;
}[];

interface RequestsContextProps {
    data: DataType;
    loading: boolean;
    error: string | null;
};

const RequestsContext = createContext<RequestsContextProps | undefined>(undefined);

export const useRequestsData = () => {
    const context = useContext(RequestsContext);
    if (!context) {
        throw new Error('useRequestsData must be used within a RequestsProvider');
    }
    return context; 
};

interface ProviderProps {
    children: ReactNode;
}

export const RequestsProvider = ({ children }: ProviderProps) => {
    const [data, setData] = useState<DataType>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_API_URL}/volunteerRequests`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <RequestsContext.Provider value={{ data, loading, error }}>
            {children}
        </RequestsContext.Provider>
    );
};