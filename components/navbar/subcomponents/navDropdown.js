import PropTypes from 'prop-types';

export default function NavDropdown({ buttonText, listItems, urlPrefix }) {
    return (
        <div className="navdropdown" data-toggle="dropdown">
            <div className="navdropbtn">{buttonText}</div>
            <div className="navdropdown-content">
                {listItems.map(item => (
                    <div className="item" key={item.id}>
                        <a href={urlPrefix + item.href}>{item.text}</a>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .navdropbtn {
                    background-color: #d5eff4;
                    color: #006699;
                    padding: 0.3rem 0.5rem;
                    margin: 0 0.3rem;
                    font-size: 1rem;
                    border: 1px #999999 solid;
                    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                }
                
                .navdropbtn:hover {
                    background-color: #f3e3c0;
                    color: #cc0000;
                }
                
                .navdropdown {
                    position: relative;
                    display: inline-block;
                }
                
                .navdropdown-content {
                    text-align: left;
                    display: none;
                    position: absolute;
                    background-color: #f3e3c0;
                    min-width: 200px;
                    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                    z-index: 1;
                    margin: 0 0 0 -50px;
                }
                
                .navdropdown-content a {
                    color: #cc0000;
                    padding: 1rem 0.5rem;
                    text-decoration: none;
                    display: block;
                }
                
                .navdropdown-content a:hover {
                    background-color: #d5eff4;
                    color: #006699;
                    text-decoration: none;
                }
                
                .navdropdown:hover .navdropdown-content {
                    display: block;
                }
                
                .navdropdown:hover .navdropbtn {
                    background-color: #f3e3c0;
                    color: #cc0000;
                }
                
                .item {
                    border-top: 1px #cccccc solid;
                    border-right: 1px #cccccc solid;
                    border-left: 1px #cccccc solid;
                }
            `}</style>
        </div>
    );
}

NavDropdown.propTypes = {
    buttonText: PropTypes.string,
    urlPrefix: PropTypes.string,
    listItems: PropTypes.array,
};
