import { useEffect, useState } from 'react';
import { Stack, Grid } from "@mui/material";
import styled from "@emotion/styled"
import Link from 'next/link';

const Timer = () => {
    const [timerFinished, setTimerFinished] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const targetDate = new Date("February 15, 2022 09:29:59");
        //const targetDate = new Date("February 14, 2021 13:47:30");

        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            const d = Math.floor(diff / (1000 * 24 * 60 * 60));
            setDays(d);

            const h = Math.floor(diff / (1000 * 60 * 60) % 24);
            const m = Math.floor(diff / (1000 * 60) % 60);
            const s = Math.floor(diff / 1000 % 60);

            setHours(h);
            setMinutes(m);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setTimerFinished(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (timerFinished) {
        return (
            <TimerContainer>
                {TimerFinishedButtons()}
            </TimerContainer>
        );
    } else {
        return (
            <div className="timer">
                <TimerContainer>
                    <TimerDiv>
                        <TimerNumber>
                            {days} : {hours} : {minutes} : {seconds}
                        </TimerNumber>
                    </TimerDiv>
                </TimerContainer>
            </div>)
    }
}

export default Timer;

const TimerFinishedButtons = () => {
    return (
        <div className="btn-group">
            <Link href="/ponencias" passHref legacyBehavior><button id="ponencias">¡Mira nuestras ponencias!</button></Link>
            <Link href="#app-section" passHref legacyBehavior><button id="app">¡Descarga nuestra app!</button></Link>
            <Link href="#twitch" passHref legacyBehavior><button id="mesas">¡Siguenos en directo!</button></Link>
        </div>
    );
}
//Styled Components
const TimerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;
const TimerDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
z-index: 2;
background-color: #FF645F;
border: 3px solid white;
border-radius: 6px;
padding-left: 1rem;
padding-right: 1rem;
max-width: 90vw;
min-width: 20vw;
`;

const TimerElement = styled.div`
text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  min-width: 20%;
  max-width: 24%;

  *,
  *:before,
  *:after { box-sizing: border-box; }
  `;
const TimerNumber = styled.span`
    font-size: 5.4vw;
    color: white;
    @media screen and (min-width: 1080px) {
        body {
           font-size: 5vw;
           color: white;
        }
    
`;

const TimerLabel = styled.span`
    color: white;
    font-size: 2.5vw;
    `;