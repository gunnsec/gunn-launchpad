import Head from 'next/head';
import Section from '../components/Section';
import { BsChevronDown } from 'react-icons/bs';
import { ReactNode } from 'react';
import { events, fundraising, publicity } from '../components/Resource';


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
                <Banner num={1} name="Planning Support" description="Run your idea by SEC to get feedback and help with logistics.">
                    COMING SOON LOL!
                </Banner>
                <Banner num={2} name="Fundraising & Materials" description="Get what you need to make your idea a reality.">
                    {[fundraising.ptsa, fundraising.stfparking,
                    events.facilities, events.sound]}
                </Banner>
                <Banner num={3} name="Publicize" description="Get word out there!">
                    {[publicity.publicity, publicity.poster_supplies, publicity.schoology]}
                </Banner>
                <Banner num={4} name="To the moon!" description="See your dream lift off!">
                    examples of this working here.
                </Banner>
            </Section>

            {/* <Section name="Motivation" id="motivation">
                <p>___.</p>
            </Section> */}

            {/* ... */}
        </main>
    )
}


function Banner(props: { num: number, name: string, description: string, children: ReactNode }) {
    return (
        <div>
            <h1>{props.num}</h1>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                {props.children}
            </div>
        </div>
    )
}