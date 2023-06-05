import React from 'react';

function HeaderContent({ title }) {
    return (
        <div className="flex justify-between p-8">
            <p className="text-3xl font-bold">{title}</p>
            <p>logout</p>
        </div>
    );
}

export default HeaderContent;
