import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./index.scss";

const DayNightToggle = (props) => {

    const [toggleState, setToggleState] = useState(props.defaultsNight || false)

    useEffect(() => {
        if(props.onChange){
            props.onChange(toggleState)
        }
    }, [toggleState])

    return (
        <div className={"toggleWrapper " + (props.className || '')}>
            <input type="checkbox" className="dn" id="dn" defaultChecked={toggleState} onChange={event => setToggleState(event.target.checked)}/>
            <label htmlFor="dn" className="toggle">
                <span className="toggle__handler">
                    <span className="crater crater--1"></span>
                    <span className="crater crater--2"></span>
                    <span className="crater crater--3"></span>
                </span>
                <span className="star star--1"></span>
                <span className="star star--2"></span>
                <span className="star star--3"></span>
                <span className="star star--4"></span>
                <span className="star star--5"></span>
                <span className="star star--6"></span>
            </label>
        </div>
    )
}

DayNightToggle.propTypes = {
    defaultsNight: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default DayNightToggle;