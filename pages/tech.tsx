import Head from 'next/head';
import MockPage from '../components/MockPage';
import Section from '../components/Section';


export default function Tech() {
    return (
        <div className="pt-28">
            <Head>
                <title>Tech Initiative | Gunn Launchpad</title>
            </Head>

            <section className="flex flex-col items-center mb-12">
                <h1 className="text-7xl font-bold mb-6 text-center">Tech Initiative</h1>
                <button className="font-medium py-2 px-4 rounded bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 shadow-md shadow-red-700">
                    Register now
                </button>
            </section>

            <div className="relative container lg:max-w-[58rem]">
                <MockPage />

                <div className="relative bg-white dark:bg-midnight rounded-lg shadow-lg w-96 z-10 mx-auto">
                    <div className="flex gap-2 p-2 border-b border-gray-100/20">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-lime-500" />
                    </div>
                    <div className="flex flex-col gap-3 py-3 px-4 font-light">
                        <div className="h-20 bg-gray-300/40 dark:bg-gray-300/10 rounded-lg animate-pulse" />
                        <p>
                            Tech Initiative is a collaboration between SEC and student programmers, creators, and
                            innovators.
                        </p>
                        <p>
                            Through this partnership, ___.
                        </p>
                        <p className="mb-2">See our currently chartered projects <a>here</a>.</p>
                    </div>
                </div>

                <MockPage right />
            </div>

            <section className="-mt-24 pt-36 pb-8 my-4 bg-gray-100 dark:bg-dark">
                <div className="container">
                    aaa
                </div>
            </section>
        </div>
    )
}
