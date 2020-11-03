import React, {useState} from 'react';
import {Row, Col} from 'reactstrap';
import Display from "./Display";
import ButtonArkon from "./Button";
const ClockArkon = () =>{
    const [time, setTime] = useState({
        hour:0,
        minutes:0,
        seconds: 0
    });
    const {seconds, minutes, hour}= time;

    const [inter, setInter]=useState()
    const [stateClock, setStateClock] = useState(0);
    /*
    InitState = 0,
    Start = 1
    Paused = 2
    * */

    const startClock = () =>{
       start();
       setStateClock(1);
       setInter(setInterval(start, 1000));

    }
    const stopClock = () =>{
        clearInterval(inter)
        setStateClock(2)
    }
    const resetClock = () =>{
        clearInterval(inter)
        setStateClock(0)
        setTime({seconds: 0 , minutes: 0, hour: 0})

    }
    let updateSeconds = seconds, updateMinutes = minutes , updateHour = hour;

    const start= () =>{
        if(updateMinutes ===60){
            updateHour++;
            updateMinutes=0;
        }

        if(updateSeconds=== 60){
            updateMinutes++;
            updateSeconds=0;
        }
        updateSeconds++;
        return setTime({seconds: updateSeconds , minutes: updateMinutes, hour: updateHour})
    }
    return(
        <>
            <Row>
                <Col sm={12}>
                    <Display time={time}/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <ButtonArkon startClock={startClock} status={stateClock} stopClock={stopClock} />
                </Col>
            </Row>
        </>
    )


}
export default ClockArkon;