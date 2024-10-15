import './Navbar.css';

function Navbar() {
    return(
        <div className="navbar">
            <ul>
                <li><a href="/">Docs</a></li>
                <li><a href="/browse">Browse</a></li>
            </ul>
        </div>
    )
}

export default Navbar;