import Head from 'next/head';
import Section from '../components/Section';
import Resource from '../components/Resource';
import SectionHeader from '../components/SectionHeader';


export default function Home() {
    return (
        <main>
            <Head>
                <title>Gunn Launchpad</title>
                <meta name="description" content="___." />
            </Head>

            <section className="container text-center">
                <h1 className="text-7xl font-bold mb-6 text-center">Gunn Launchpad</h1>
                <p>___.</p>
            </section>

            <Section>
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                    <Resource name="Club charter application" href="https://docs.google.com/forms/d/e/1FAIpQLSclwY3TNU4tkiHAStb9HZ-ZW83iOC-aibjyb0k-YTFNexsRIA/viewform">
                        Charter application for a Spring 2023 club. Clubs already chartered in Fall do not need to recharter.
                    </Resource>
                    <Resource name="Club advisor availability list" href="https://drive.google.com/file/d/1dHt4OTTS_u_LSbocKiXHAIudg27hiA6-/view?usp=sharing">
                        List of teachers potentially able to supervise a new club.
                    </Resource>
                    <Resource name="Club event / fundraiser request form" href="https://docs.google.com/forms/d/e/1FAIpQLSfXaavKezsSY_i-OTcyE9mH9-XGrUYWzrYF6yo1_EgZwj5GXQ/viewform">
                        Request to host a school event or club fundraiser. Must be completed 2 weeks before the date
                        of the event.
                    </Resource>
                    <Resource name="Facility request form" href="https://docs.google.com/forms/d/e/1FAIpQLSdPtxIMV1Ai6bnhJf6FkOm9Bq1BRWCJWLyHCwzf1qsbGnaRWQ/viewform">
                        Request facility (tables, chairs, bleachers) or tech setup for an event hosted at a Gunn venue.
                    </Resource>
                    <Resource name="SEC sound system">
                        Email <a href="mailto:lhall@pausd.org" className="text-grapefruit hover:underline">lhall@pausd.org</a>{' '}
                        to request to use the SEC sound system (speakers and microphones) for an event.
                    </Resource>
                    <Resource name="SAC postermaking supplies">
                        Email <a href="mailto:lhall@pausd.org" className="text-grapefruit hover:underline">lhall@pausd.org</a>{' '}
                        to request to use the SAC's paint markers and butcher paper for on-campus advertising. See Gunn's{' '}
                        <a href="https://drive.google.com/file/d/1A0bsQgqN8bqXcI-dBvRc7BGtgcT8XFwm/view?usp=sharing" target="_blank" rel="noopener noreferrer"  className="text-grapefruit hover:underline">poster guidelines</a>.
                    </Resource>
                </div>
            </Section>

            <Section>
                <SectionHeader id="motivation">Motivation</SectionHeader>
                <p>___.</p>
            </Section>

            {/* ... */}
        </main>
    )
}
