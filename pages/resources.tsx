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
                    {Object.values(fundraising)}
                </Resources>
            </Section>

            <Section name="Publicity" id="publicity">
                <Resources>
                    {Object.values(publicity)}
                </Resources>
            </Section>

            <Section name="Club chartering" id="club-chartering">
                <Resources>
                    {Object.values(chartering)}
                </Resources>
            </Section>

            <Section name="Club events and fundraisers" id="club-events-fundraisers">
                <Resources>
                    {Object.values(events)}
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
