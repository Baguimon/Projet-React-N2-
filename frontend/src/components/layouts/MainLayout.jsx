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
<<<<<<< HEAD
                    <Link to ="/form">Créer un Cours</Link> 
=======
                    <Link to ="/form">Form</Link> 
>>>>>>> 5d2e0f2ffc88d4403c91b2758f9fd6d4e1462ce0
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