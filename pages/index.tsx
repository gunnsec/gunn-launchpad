import Head from 'next/head';
import Section from '../components/Section';
import {chartering, events, publicity} from '../components/Resource';


export default function Home() {
    return (
        <main>
            <Head>
                <title>Gunn Launchpad</title>
                <meta name="description" content="___." />
            </Head>

            <section className="container text-center">
                <h1 className="text-7xl font-bold mb-6">Gunn Launchpad</h1>
                <p>___.</p>
            </section>

            <Section>
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                    {chartering}
                    {events.slice(0, 2)} {/* TODO: better way of handling this */}
                    {events[events.length - 1]}
                    {publicity}
                </div>
            </Section>

            <Section name="Motivation" id="motivation">
                <p>___.</p>
            </Section>

            {/* ... */}
        </main>
    )
}
