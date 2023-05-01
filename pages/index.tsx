import Head from 'next/head';
import Link from 'next/link';
import Section from '../components/Section';
import { BsChevronCompactDown, BsChevronDown } from 'react-icons/bs';


export default function Home() {
    return (
        <main>
            <Head>
                <title>Gunn Launchpad</title>
                <meta name="description" content="An SEC initiative to launch events, apps and initiatives into reality." />
            </Head>

            <section className="text-center h-screen relative top-[-11rem] flex ">
                <div className="absolute opacity-30 left-0 top-0 -z-10 h-full w-full">
                    <img src="/launch_light.jpg" className="dark:hidden h-full w-full object-cover"/>
                    <img src="/launch_dark.jpg" className="hidden dark:block h-full w-full object-cover" />
                </div>
                <div className="m-auto">
                    <h1 className="text-7xl font-bold mb-6">Gunn Launchpad</h1>
                    <p>
                        Launch your ideas, events, or apps into reality with the help of Gunn SEC.
                    </p>
                </div>
                <a className="text-3xl absolute bottom-0 w-full pb-16">
                    <BsChevronDown className="m-auto animate-bounce" />
                </a>
            </section>

            {/* TODO: do something about this resources-preview section? does it belong here? */}
            <Section>
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                </div>
                <Link href="/resources" className="block text-center text-secondary dark:text-secondary-dark hover:underline">
                    View all SEC resources here →
                </Link>
            </Section>

            <Section name="Motivation" id="motivation">
                <p>___.</p>
            </Section>

            {/* ... */}
        </main>
    )
}
