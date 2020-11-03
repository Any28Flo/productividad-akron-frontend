import React from 'react';

const Display = props =>{
    const { time :{hour, minutes, seconds}} = props

    return (
        <>
            <span>{hour  >= 10 ? hour : `0${hour}` }</span>&nbsp;:&nbsp;
            <span>{minutes  >= 10 ? minutes : `0${minutes}` }</span>&nbsp;:&nbsp;
            <span>{seconds  >= 10 ? seconds : `0${seconds}` }</span>
        </>
    )
}
export default Display