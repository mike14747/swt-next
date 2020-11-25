import { useContext } from 'react';
import SettingsContext from '../../../context/settingsContext';

import ReactHtmlParser from 'react-html-parser';

const JoinFun = () => {
    // const { text_box_heading: textBoxHeading = 'join the fun', text_box_text: textBoxText = 'some text... blah, blah, blah' } = useContext(SettingsContext);
    const settings = useContext(SettingsContext);

    return (
        <div className="join-dropdown" data-toggle="dropdown">
            {settings &&
                <>
                    {settings.text_box_heading &&
                        <div className="join-heading">
                            {settings.text_box_heading} +
                        </div>
                    }
                    {settings.text_box_text &&
                        <div className="join-dropdown-content">
                            {ReactHtmlParser(settings.text_box_text)}
                        </div>
                    }
                </>
            }


            <style jsx>{`
                .join-heading {
                    padding: 10px 5px;
                    text-align: center;
                    margin-bottom: auto;
                    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                    font-style: italic;
                    color: #333333;
                    font-size: 1rem;
                    font-weight: bolder;
                    background-color: rgba(213, 239, 244, 0.7);
                }
                
                .join-dropdown {
                    position: relative;
                    display: inline-block;
                }
                
                .join-dropdown-content {
                    text-align: left;
                    display: none;
                    position: absolute;
                    background-color: rgba(243, 227, 192, 0.9);
                    min-width: 250px;
                    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                    z-index: 1;
                    margin: 0;
                    padding: 0.50rem;
                }
                
                .join-dropdown:hover .join-dropdown-content {
                    display: block;
                }
                
                @media (max-width: 767.98px) {
                    .join {
                        font-size: .75rem;
                    }
                    .join-heading {
                        font-size: .85rem;
                    }
                }
            `}</style>
        </div>

    );
};

export default JoinFun;
