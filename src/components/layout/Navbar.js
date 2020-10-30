import React from 'react';
import {Nav} from 'reactstrap';
import {Link} from "react-router-dom";

const Navbar = ({routes, history}) =>{

    return(
        <Nav>
            {
                routes.map(({redirect, path, icon, name},index)=>{
                    if(redirect) return null;
                    return(
                        <li key={index}>
                            <Link
                                replace={true}
                                to ={'/dashboard' + path}
                            >
                            <span>{name}</span>
                            </Link>
                        </li>
                    )
                })
            }

        </Nav>
    )
}
export default Navbar