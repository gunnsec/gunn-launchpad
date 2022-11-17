import Head from 'next/head';
import Link from 'next/link';
import {IoMdCloseCircle} from 'react-icons/io';


export default function PageNotFound() {
    return (
        <div className="h-screen fixed inset-0 flex items-center justify-center">
            <Head>
                <title>404 | Gunn Launchpad</title>
                <meta name="description" content="Page not found." />
            </Head>

            <main className="relative pl-14">
                <IoMdCloseCircle className="absolute left-0 top-2 text-5xl text-grapefruit" />
                <h1 className="font-bold text-7xl underline decoration-grapefruit mb-4">404.</h1>
                <p>Your requested page was not found.</p>
                <Link href="/"><a className="font-medium hover:underline">Return to home →</a></Link>
            </main>
        </div>
    )
}
