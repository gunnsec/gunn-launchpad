import Head from 'next/head';
import Link from 'next/link';
import Section from '../components/Section';
import {chartering, events, publicity} from '../components/Resource';


export default function Home() {
    return (
        <main>
            <Head>
                <title>Gunn Launchpad</title>
                <meta name="description" content="An SEC initiative to launch events, apps and initiatives into reality." />
            </Head>

            <section className="container text-center">
                <h1 className="text-7xl font-bold mb-6">Gunn Launchpad</h1>
                <p>
                    Launchpad is an SEC program that partners with motivated individuals or clubs to <em>launch</em>{' '}
                    their events, apps, or initiatives into reality{/* TODO: wording */}.
                </p>
            </section>

            {/* TODO: do something about this resources-preview section? does it belong here? */}
            <Section>
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                    {chartering}
                    {events.slice(0, 2)} {/* TODO: better way of handling this */}
                    {publicity.slice(0, 2)}
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
