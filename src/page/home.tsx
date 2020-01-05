import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Title } from "../component";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledCounter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  grid-gap: 10px;
  margin-top: 100px;
  flex: 1;
  mix-blend-mode: difference;
  color: white;
  filter: grayscale(1) contrast(9);

  @media (max-width: 570px) {
    grid-template-columns: repeat(1, minmax(50px, 1fr));
    margin-top: 40px;
  }
`;

const Count = styled.div`
  text-align: center;
`;
const Value = styled.div`
  font-size: 50px;
  font-weight: 200;
`;
const Label = styled.div``;

const getDays = (date: number[]) => moment(date).diff(moment(), "days");
const getHours = (date: number[]) =>
  moment.duration(moment(date).diff(moment()), "milliseconds").hours();
const getMinutes = (date: number[]) =>
  moment.duration(moment(date).diff(moment()), "milliseconds").minutes();
const getSeconds = (date: number[]) =>
  moment.duration(moment(date).diff(moment()), "milliseconds").seconds();

const useTimer = (date: number[]) => {
  const [days, setDays] = React.useState(getDays(date));
  const [hours, setHours] = React.useState(getHours(date));
  const [minutes, setMinutes] = React.useState(getMinutes(date));
  const [seconds, setSeconds] = React.useState(getSeconds(date));
  const timer = React.useRef<null | any>(null);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      setDays(getDays(date));
      setHours(getHours(date));
      setMinutes(getMinutes(date));
      setSeconds(getSeconds(date));
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return [days, hours, minutes, seconds];
};

const Counter = ({ date }: { date: number[] }) => {
  const [hours, days, minutes, seconds] = useTimer(date);

  return (
    <StyledCounter>
      <Count>
        <Value>{days}</Value>
        <Label>Jours</Label>
      </Count>
      <Count>
        <Value>{hours}</Value>
        <Label>Heures</Label>
      </Count>
      <Count>
        <Value>{minutes}</Value>
        <Label>Minutes</Label>
      </Count>
      <Count>
        <Value>{seconds}</Value>
        <Label>Secondes</Label>
      </Count>
    </StyledCounter>
  );
};

export const Home = () => {
  return (
    <Container>
      <Title>Titre</Title>
      <Counter date={[2020, 6, 20, 14, 0, 0]} />
    </Container>
  );
};
