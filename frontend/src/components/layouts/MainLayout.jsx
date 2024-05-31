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
                <li>
                    <Link to ="/stateexample">Compteur</Link> 
                </li>
                <li>
                    <Link to ="/form">Form</Link> 
                </li>
            </ul>

            {children}

            <div className="footer">
                <p>Footer</p>
            </div>
        </>
    );
};

export default MainLayout;