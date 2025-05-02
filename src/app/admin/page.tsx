import { notFound } from 'next/navigation';


export default function AdminPage() {
    // only render this page in local (development) environment
    if (process.env.NODE_ENV !== 'development') {
        notFound();
    }

    return (
        <div>
            <h1>Admin Console (Dev Only)</h1>
            {/* …your admin UI… */}
        </div>
    );
}