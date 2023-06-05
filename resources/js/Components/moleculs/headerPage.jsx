import React from 'react';
import BtnLogout from '../atoms/BtnLogout';
import ResponsiveNavLink from '../ResponsiveNavLink';
import { Link } from '@inertiajs/react';
// import BtnLogout from "../atoms/btnLogout";

function HeaderPage({ title }) {
    return (
        <div className="pt-7 w-full pb-14 h-max  flex  justify-between text-4xl font-bold">
            {/* //todo: input search */}
            <div className="pl-20 ">{title}</div>

            {/* //todo: logout  */}

            <Link method="post" href={route('logout')} as="button">
                <BtnLogout />
            </Link>
        </div>
    );
}

export default HeaderPage;
