import React from 'react';
import PropTypes from "prop-types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Button = ({clickHandler, icon}) =>{
    return(
        <button className="btn" onClick={clickHandler}>
            <FontAwesomeIcon
                icon={icon}
                style={{ fontSize: '1.0rem' }}/>
        </button>
    )
}
Button.propTypes={
    clickHandler:PropTypes.func.isRequired
}
export default Button;