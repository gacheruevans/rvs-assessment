"use client";
import React,{
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect
} from 'react'

type DataType = {
  id: number,
  slots: number,
  title: string,
  description: string,
}[];

interface ServicesContextProps {
  data: DataType;
  loading: boolean;
  error: string | null;
};

const ServicesContext = createContext<ServicesContextProps | undefined>(undefined);

export const useServicesData = () => {
  const context = useContext(ServicesContext);
  if(!context){
    throw new Error('useServicesData must be used within a RequestsProvider');
  }
  return context;
};

interface ProviderProps {
  children: ReactNode;
}

export const ServicesProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<DataType>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState< string | null>(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_API_URL}/services`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <ServicesContext.Provider value={{data, loading, error}}>
      {children}
    </ServicesContext.Provider>
  );
};