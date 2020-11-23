import PropTypes from 'prop-types';

export default function NavButton({ url, buttonText }) {
    return (
        <div className="navbutton">
            <a href={url}><div className="navbtn">{buttonText}</div></a>
            <style jsx>{`
                .navbtn {
                    background-color: #d5eff4;
                    color: #006699;
                    padding: 0.3rem 0.5rem;
                    margin: 0 0.3rem;
                    font-size: 1rem;
                    border: 1px #999999 solid;
                    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                }
                
                .navbtn:hover {
                    background-color: #f3e3c0;
                    color: #cc0000;
                }
                
                .navbutton a:hover {
                    text-decoration: none !important;
                }
                
                .navbutton {
                    position: relative;
                    display: inline-block;
                }
            `}</style>
        </div>
    );
}

NavButton.propTypes = {
    buttonText: PropTypes.string,
    url: PropTypes.string,
};
