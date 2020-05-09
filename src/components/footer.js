"use strict"
import React from 'react';

class Footer extends React.Component{
    render(){
      
        return(
            <footer className="footer text-center">
                <div className="conatiner">
                    <p className="footer-text"><h1>Created with Magic by Team-NOOBs</h1></p>
                    <p className="footer-text"><h2>Team Members:-</h2></p>
                    <p className="footer-text"><h3><ul>
                        <li>Makrand Lokhande (Macky)</li>
                        <li>Aniket Shinde</li>
                        <li>Surabhi Kanade</li>
                        <li>Vaishnavi Jadhav</li>
                        </ul>
                        </h3>
                    </p>

                </div>
            </footer>
        );
    }
}
export default Footer;