import { Route, Routes } from 'react-router-dom';
import { ReactNode } from 'react';

import Home from '../pages/Home';
import ProductPreviewCard from '../challenges/components/ProductPreviewCard/ProductPreviewCard';
import RockPaperScissorsGame from '../challenges/apps/RockPaperScissorsGame/RockPaperScissorsGame';
import IpAddressTracker from '../challenges/apps/IpAddressTracker/IpAddressTracker';
import ExpensesChart from '../challenges/components/ExpensesChart/ExpensesChart';

export interface RouteInfo {
    linkLabel: string;
    urlPath: string;
    element: ReactNode;
}

export interface Routes {
    [key: string]: RouteInfo[];
}

export const ROUTE_LINKS: Routes = {
    advanced: [
        {
            linkLabel: 'Rock Paper Scissors Game',
            urlPath: 'rock-paper-scissors-game',
            element: <RockPaperScissorsGame />,
        },
    ],
    intermediate: [
        {
            linkLabel: 'Ip Address Tracker',
            urlPath: 'ip-address-tracker',
            element: <IpAddressTracker />,
        },
    ],
    junior: [
        {
            linkLabel: 'Expenses Chart',
            urlPath: 'expenses-chart',
            element: <ExpensesChart />,
        },
    ],
    newbie: [
        {
            linkLabel: 'Product Preview Card',
            urlPath: 'product-preview-card',
            element: <ProductPreviewCard />,
        },
    ],
};

export default function RouteList() {
    const mappedRoutes = Object.keys(ROUTE_LINKS).map(level => (
        <Route key={level} path={level}>
            {ROUTE_LINKS[level].map(({ urlPath, element }) => (
                <Route key={urlPath} path={urlPath} element={element} />
            ))}
        </Route>
    ));

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="challenges">{mappedRoutes}</Route>
            </Routes>
        </>
    );
}
