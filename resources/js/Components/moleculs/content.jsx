import React from 'react';
import Container from './container';
// import Navside from './navside'
import Sidebar from './Sidebar';

function Content({ children,props }) {
    return (
        <div className="flex justify-center bg-blue-50">
            {/* <div className=" h-screen w-screen absolute left-[-1400px] flex items-end">
                <div className="bg-blue-200 h-20 w-full -end"></div>
            </div> */}

            <Container>
                <div className="flex">
                    <Sidebar props={props} />
                    <div className="w-full">{children}</div>
                </div>
            </Container>
        </div>
    );
}

export default Content;
