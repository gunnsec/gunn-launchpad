import Head from 'next/head';


export default function Home() {
    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
            <Head>
                <title>Gunn Launchpad</title>
                <meta name="description" content="___." />
            </Head>

            <div className="bg-white rounded-lg p-6 w-52">
                <h1 className="text-xl font-bold text-black">Tech Initiative</h1>
            </div>
        </div>
    )
}
