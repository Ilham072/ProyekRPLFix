import React from "react";
import './Header.css';


const HeaderAdmin = ({user = false}) => {
    let data = [];
    if (!user) {
        data = JSON.parse(localStorage.getItem('user'));
    } else {
        data = user
    }
    return(
        <header className="header-container">
                <h1><b>Digitalisasi Data Sumber Daya Alam</b></h1>
            <div className="btn">
<<<<<<< HEAD
                <div className="profilAdmin">
=======
                <div>
>>>>>>> fd6f78e359b91d8cf1c8e32bb39aafce10dbb7f2
                    <p>{data[0]}</p>
                    <p>{data[1]}</p>
                </div>
            </div>
        </header>
    )
}
export default HeaderAdmin;