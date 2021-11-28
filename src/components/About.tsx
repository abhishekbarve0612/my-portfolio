import React, { PureComponent } from 'react';
import ItemTags from './ItemTags';


class About extends PureComponent<{}> {

    render() {
        return (
            <div className="about-me grid mx-auto w-2/3 p-3">
                <div className="my-name text-3xl py-3">Abhishek Barve</div>
                <div className="my-profile text-xl py-2">Web Developer | Software Developer | A Life Time Learner</div>
                <hr className="my-4" />
                <div className="my-interests">
                    The things which I like most are:
                    <ul className="list-disc ml-12">
                        <li>
                        New Anything (Might be new learning, project, assignment, places, etc.)
                        </li>
                        <li>
                        Finishing anything that I started
                        </li>
                        <li>
                        Proving my worth, to people around me to make them see me as a valuable asset
                        </li>
                        <li>
                        A feeling of progress
                        </li>
                    </ul>
                    &amp; the things which I hate most are:
                    <ul className="list-disc ml-12">
                        <li>
                        Feeling of being in an oblivion
                        </li>
                        <li>
                        Me being selfish jerk or sore loser sometimes
                        </li>
                        <li>
                        Feeling of my life not in my control
                        </li>
                        <li>
                        Just letting time pass by
                        </li>
                    </ul>
                </div>
                <hr className="my-4" />
                <div className="i-know">
                    <span className="text-3xl uppercase">I know: </span>
                    <table className="table-fixed">
                        <tbody>
                            <tr>
                                <td className="w-1/5">
                                    <span className="text-2xl">Language</span>
                                </td>
                                <td className="w-1/5">
                                    <span className="text-xl"> --&gt; </span>
                                </td>
                                <td className="w-3/5 py-3">
                                    <div className="flex flex-row-reverse flex-wrap gap-2">
                                        <ItemTags
                                            tags={['Java', 'Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL']}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/5">
                                    <span className="text-2xl">Libraries</span>
                                </td>
                                <td className="w-1/5">
                                    <span className="text-xl"> --&gt; </span>
                                </td>
                                <td className="w-3/5 py-3">
                                    <div className="flex flex-row-reverse flex-wrap gap-2">
                                        <ItemTags
                                            tags={['React', 'Redux', 'Reactstrap', 'VX', 'Enzyme', 'Cypress', 'Numpy', 'Pandas']}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/5">
                                    <span className="text-2xl">Frameworks</span>
                                </td>
                                <td className="w-1/5">
                                    <span className="text-xl"> --&gt; </span>
                                </td>
                                <td className="w-3/5 py-3">
                                    <div className="flex flex-row-reverse flex-wrap gap-2">
                                        <ItemTags
                                            tags={['Django', 'Bootstrap', 'TailwindCSS', 'Flask']}
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        )
    }
}

export default About;