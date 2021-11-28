import React, { PureComponent } from 'react';

class MyLogo extends PureComponent<{}> {

    render() {
        return (
            <div className="container flex flex-row-reverse">
                <div className="logo-container grid grid-cols-2 gap-1 border-3 p-5 m-3 mr-32 shadow-lg rounded-xl bg-gray-500 text-red-100">
                    <div className="initials h-10 font-extrabold text-5xl underline">AB</div>
                    <div>
                        <div className="first-name pr-5">
                            HISHEK
                        </div>
                        <div className="first-name pr-5">
                            ARVE
                        </div>
                    </div>
                </div>
                SINCE 06-12-1999
            </div>
        )
    }
}

export default MyLogo;