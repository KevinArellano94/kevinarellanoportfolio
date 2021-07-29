import { Link } from 'react-router-dom';

function NavigationBar()
{
    return (
        <nav>
            <input class = "menu-btn" type = "checkbox" id = "menu-btn" />
            <label class = "menu-icon" for = "menu-btn">
                <span class = "nav-icon"></span>
            </label>
            
            <ul class = "menu">
                <li>
                    <a href = "/">Portfolio</a>
                </li>
            </ul>

            <ul className = "menu">
                <Link to = "/">
                    <li>
                        <a href = "/">Home</a>
                    </li>
                </Link>
                <Link to = "/experiences">
                    <li>
                        <a href = "/">Experiences</a>
                    </li>
                </Link>
            </ul>

            <a href = "/" class = "hey">Kevin Arellano</a>            
        </nav>
    )
}

export default NavigationBar;