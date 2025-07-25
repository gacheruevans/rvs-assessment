"use client";
import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect
} from 'react'

type DataType = {
  id: number,
  volunteerId: number,
  serviceId: number,
  status: string,
}[];

interface ApplicationsContextProps {
  data: DataType;
  loading: boolean;
  error: string | null;
}

const ApplicationsContext = createContext<ApplicationsContextProps | undefined>(undefined);

export const useApplicationsData = () => {
  const context = useContext(ApplicationsContext);
  if(!context) {
    throw new Error('useApplicationsData must be used within a ApplicationsProvider');
  }
  return context;
}

interface ProviderProps{
  children: ReactNode;
}

export const ApplicationsProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<DataType>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_API_URL}/volunteerApplications`);
        if(!response.ok){
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

  return(
    <ApplicationsContext.Provider value={{data, loading, error}}> 
      {children}
    </ApplicationsContext.Provider>
  );
};
