"use client";

import useHashPath from '@/hooks/useHashPaths';
import Link from 'next/link'
// import { useParams, usePathname, useSearchParams, useRouter } from 'next/navigation'

const ClientLink = ({ children, href, classNames}: {children: React.ReactNode; href: string; classNames?: string }) => {
    // const pathname = usePathname();
    // const searchParams = useSearchParams();
    // const params = useParams();
    // const router = useRouter();
    const hashPathId = useHashPath();
    const hashHref = href.startsWith('#') ? href : `#${href}`;
    const actualPathname = hashHref === "" ? hashPathId : `#${hashPathId}`;
    console.log({hashHref, hashPathId});
  return (
    <Link 
        href={href} 
        className={`p-2 ${classNames} ${
            hashHref === actualPathname ? " border-b-blue-600": "hover:border-b-blue-600"
        }`}
        onClick={() => (window.location.href = hashHref)}
        >
        {children}
    </Link>
  )
}

export default ClientLink