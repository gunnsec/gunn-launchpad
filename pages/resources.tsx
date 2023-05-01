import Head from 'next/head';
import Section from '../components/Section';
import {chartering, events, publicity, fundraising} from '../components/Resource';
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

            <Section name="Fundraising" id="fundraising">
                <Resources>
                    {fundraising}
                </Resources>
            </Section>

            <Section name="Publicity" id="publicity">
                <Resources>
                    {publicity}
                </Resources>
            </Section>

            <Section name="Club chartering" id="club-chartering">
                <Resources>
                    {chartering}
                </Resources>
            </Section>

            <Section name="Club events and fundraisers" id="club-events-fundraisers">
                <Resources>
                    {events}
                </Resources>
            </Section>
        </main>
    )
}

// TODO: naming
function Resources(props: {children: object|ReactNode}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {typeof props.children == 'object' ? Object.values(props.children) : props.children}
        </div>
    )
}
