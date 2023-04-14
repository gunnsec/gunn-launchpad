import Head from 'next/head';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import {chartering, events, publicity} from '../components/Resource';


export default function Home() {
    return (
        <main>
            <Head>
                <title>Resources | Gunn Launchpad</title>
                <meta name="description" content="Quick links to forms and resources for Gunn clubs and events." />
            </Head>

            <section className="container mb-12">
                <h1 className="text-4xl font-bold mb-6">All resources</h1>
                <p>___.</p>
            </section>

            <Section>
                <SectionHeader id="club-chartering">Club chartering</SectionHeader>
                <div className="grid grid-cols-2 gap-6">
                    {chartering}
                </div>
            </Section>

            <Section>
                <SectionHeader id="club-events-fundraisers">Club events and fundraisers</SectionHeader>
                <div className="grid grid-cols-2 gap-6">
                    {events}
                </div>
            </Section>

            <Section>
                <SectionHeader id="publicity">Publicity</SectionHeader>
                <div className="grid grid-cols-2 gap-6">
                    {publicity}
                </div>
            </Section>

            <Section>
                <SectionHeader id="funding">Funding</SectionHeader>
                <div className="grid grid-cols-2 gap-6">
                    {/* TODO */}
                </div>
            </Section>
        </main>
    )
}
