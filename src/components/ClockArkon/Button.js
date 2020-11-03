import React from 'react';
import {Button} from  'reactstrap';

const ButtonArkon = ({startClock, stopClock, status}) =>{
    return(
        <>
        {
            (status === 0) ?
            <Button onClick={startClock}>Start</Button>
            : ""

        }
        {
            status ===1 ?
            <>
              <Button onClick={stopClock}>Stop</Button>
              <Button onClick={stopClock}>Resart</Button>
            </>
            :""
        }
            {
                status ===2 ?
                    <>
                        <Button onClick={stopClock}>Resume</Button>
                        <Button onClick={stopClock}>Resart</Button>
                    </>
                    :""
            }
        </>

    )
}
export default ButtonArkon;