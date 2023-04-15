import Head from 'next/head';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import {chartering, events, publicity} from '../components/Resource';
import {ReactNode} from 'react';


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
                <Resources>
                    {chartering}
                </Resources>
            </Section>

            <Section>
                <SectionHeader id="club-events-fundraisers">Club events and fundraisers</SectionHeader>
                <Resources>
                    {events}
                </Resources>
            </Section>

            <Section>
                <SectionHeader id="publicity">Publicity</SectionHeader>
                <Resources>
                    {publicity}
                </Resources>
            </Section>

            <Section>
                <SectionHeader id="funding">Funding</SectionHeader>
                <Resources>
                    {/* TODO */}
                </Resources>
            </Section>
        </main>
    )
}

// TODO: naming
function Resources(props: {children: ReactNode}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {props.children}
        </div>
    )
}
