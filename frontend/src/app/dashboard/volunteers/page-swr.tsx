"use client";
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Volunteers =  () => {
    const { data, error, isLoading } = useSWR(
        process.env.NEXT_PUBLIC_JSON_API_URL
        + '/volunteers', 
        fetcher
    );
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Volunteers</h1>
        <table className="min-w-full bg-transparent">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">ID</th>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((volunteer: {id:string; name:string; contact:string}) => (
                    <tr key={volunteer.id}>
                        <td className="py-2 px-4 border-b">{volunteer.id}</td>
                        <td className="py-2 px-4 border-b">{volunteer.name}</td>
                        <td className="py-2 px-4 border-b">{volunteer.contact}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Volunteers