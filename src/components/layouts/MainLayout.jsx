import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
    return (
        <>
            <ul>
                <li>
                    <Link to ="/">Home</Link> 
                </li>
                <li>
                    <Link to ="/course">Cours</Link> 
                </li>
                <li>
                    <Link to ="/coursesindex">Liste des Cours</Link> 
                </li>
            </ul>

            {children}

            <div>
                <p>Footer</p>
            </div>
        </>
    );
};

export default MainLayout;