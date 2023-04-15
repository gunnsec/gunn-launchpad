import {ReactNode} from 'react';
import {RxExternalLink} from 'react-icons/rx';


export default function Resource(props: {name: string, children: ReactNode, href?: string}) {
    return (
        <div className="basis-96 flex-grow relative px-5 py-3.5 rounded-lg border border-gray-400 hover:border-gray-600 dark:border-gray-500 dark:hover:border-gray-400 transition-[border] duration-200">
            {props.href && (
                <a href={props.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0"/>
            )}

            <h5 className="flex gap-1.5 items-center font-bold mb-1">
                {props.name}
                {props.href && <RxExternalLink className="pb-0.5" />}
            </h5>
            <p className="text-secondary dark:text-secondary-dark text-sm">{props.children}</p>
        </div>
    )
}

export const chartering = [
    <Resource name="Club charter application" href="https://docs.google.com/forms/d/e/1FAIpQLSclwY3TNU4tkiHAStb9HZ-ZW83iOC-aibjyb0k-YTFNexsRIA/viewform">
        Charter application for a Spring 2023 club. Clubs already chartered in Fall do not need to recharter.
    </Resource>,
    <Resource name="Club advisor availability list" href="https://drive.google.com/file/d/1dHt4OTTS_u_LSbocKiXHAIudg27hiA6-/view?usp=sharing">
        List of teachers potentially able to supervise a new club.
    </Resource>
]

export const events = [
    <Resource name="Club event / fundraiser request form" href="https://docs.google.com/forms/d/e/1FAIpQLSfXaavKezsSY_i-OTcyE9mH9-XGrUYWzrYF6yo1_EgZwj5GXQ/viewform">
        Request to host a school event or club fundraiser. Must be completed 2 weeks before the date
        of the event.
    </Resource>,
    <Resource name="Facility request form" href="https://docs.google.com/forms/d/e/1FAIpQLSdPtxIMV1Ai6bnhJf6FkOm9Bq1BRWCJWLyHCwzf1qsbGnaRWQ/viewform">
        Request facility (tables, chairs, bleachers) or tech setup for an event hosted at a Gunn venue.
    </Resource>,
    <Resource name="Reimbursement request form" href="https://www.gunnsec.org/uploads/1/2/3/2/123265564/reimbursement_request.pdf">
        Reimburse club purchases made by individuals with funds from the club account. Print, fill out, and submit to the
        SAO no later than one month after the purchase was made.
    </Resource>,
    <Resource name="Purchase request form" href="https://www.gunnsec.org/uploads/1/2/3/2/123265564/purchase_request_form.pdf">
        Request to purchase item(s) using club funds. Club minutes where the purchase was approved need to be attached to
        the form. Print, fill out, and submit to the SAO two weeks prior to the purchase date.
    </Resource>,
    <Resource name="Cash box request form" href="https://www.gunnsec.org/uploads/1/2/3/2/123265564/cash_box_request_1.pdf">
        Request a cash box for a club fundraiser. Print, fill out, and submit to the SAO two days prior to pick-up.
    </Resource>,
    <Resource name="Titan webstore">
        For non-physical fundraisers{/* TODO: reword */}, email <a href="mailto:lhall@pausd.org" className="text-grapefruit hover:underline">lhall@pausd.org</a>{' '}
        to request the fundraiser item be added to the Titan Webstore.
    </Resource>,
    <Resource name="SEC sound system">
        Email <a href="mailto:lhall@pausd.org" className="text-grapefruit hover:underline">lhall@pausd.org</a>{' '}
        to request to use the SEC sound system (speakers and microphones) for an event.
    </Resource>
]

export const publicity = [
    <Resource name="Schoology updates">
        Email <a href="mailto:lhall@pausd.org" className="text-grapefruit hover:underline">lhall@pausd.org</a>{' '}
        to request a blurb on Schoology in the Student Activities Weekly Update.
    </Resource>,
    <Resource name="Gunn SEC Instagram">
        [...] {/* TODO */}
    </Resource>,
    <Resource name="SAC postermaking supplies">
        Email <a href="mailto:lhall@pausd.org" className="text-grapefruit hover:underline">lhall@pausd.org</a>{' '}
        to request to use the SAC's paint markers and butcher paper for on-campus advertising. See Gunn's{' '}
        <a href="https://drive.google.com/file/d/1A0bsQgqN8bqXcI-dBvRc7BGtgcT8XFwm/view?usp=sharing" target="_blank" rel="noopener noreferrer"  className="text-grapefruit hover:underline">poster guidelines</a>.
    </Resource>
]
