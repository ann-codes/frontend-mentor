import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

import { ROUTE_LINKS } from '../routes/RouteList';

export default function SneakyNav() {
    const mappedLinks = Object.keys(ROUTE_LINKS).map(level => (
        <Fragment key={level}>
            {ROUTE_LINKS[level].map(({ linkLabel, urlPath }) => (
                <li key={urlPath}>
                    <Link to={`challenges/${level}/${urlPath}`}>{linkLabel}</Link>
                </li>
            ))}
        </Fragment>
    ));

    return (
        <Popover className="absolute top-0 left-0">
            {({ open }) => (
                <>
                    <Popover.Button className={`opacity-${open ? '100' : '25'} hover:opacity-100`}>⭐️</Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-0"
                        enterTo="opacity-100 translate-y-1"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-1"
                        leaveTo="opacity-0 translate-y-0"
                    >
                        <Popover.Panel className="relative z-10 left-6">
                            <ul className="bg-slate-50 py-2 px-4">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                {mappedLinks}
                            </ul>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}
