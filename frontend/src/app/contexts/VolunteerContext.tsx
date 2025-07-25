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
    name: string;
    email: string;
    contact?: string;
}[];

interface VolunteerContextProps {
    vdata: DataType;
    vloading: boolean;
    verror: string | null;
}
const VolunteerContext = createContext<VolunteerContextProps | undefined>(undefined);

export const useData = () => {
    const context = useContext(VolunteerContext);
    if (!context) {
        throw new Error('useData must be used within a VolunteerProvider');
    }
    return context;
};

interface ProviderProps {
    children: ReactNode;
}

export const VolunteerProvider = ({ children }: ProviderProps) => {
    const [vdata, setData] = useState<DataType>([]);
    const [vloading, setLoading] = useState<boolean>(true);
    const [verror, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_API_URL}/volunteers`);
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
        <VolunteerContext.Provider value={{ vdata, vloading, verror }}>
            {children}
        </VolunteerContext.Provider>
    );
}