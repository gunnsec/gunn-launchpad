import Head from 'next/head';
import Section from '../components/Section';
import {chartering, events, publicity, fundraising, sec} from '../components/Resource';
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
                <p className="mb-6">
                    A (non-exhaustive) collection of resources to help lift your project off the ground!
                    With entries from Gunn SEC, PTSA, the City of Palo Alto, and potentially beyond.
                </p>
                <p>
                    Check out <a href="https://gunnsec.org/" target="_blank" rel="noopener noreferrer" className="text-grapefruit hover:underline">gunnsec.org</a>{' '}
                    for a more exhaustive list of resources from SEC. Reach out and let us know about additional resources!
                </p>
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

            <Section name="Direct from SEC" id="sec">
                <Resources>
                    {Object.values(sec)}
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
