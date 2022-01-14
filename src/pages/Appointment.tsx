import React from 'react';
import Link from 'react-router';

interface AppointmentType {
  title: string;
  date: Date;
  instruction: string;
  address: string;
}

const AppointmentData: AppointmentType = {
  title: 'Avtale med Medisinsk avdeling til Nordlandssykehuset',
  date: new Date(2022, 6, 10, 10, 30),
  instruction: 'Se innkallingsbrev',
  address: 'Behandlingsområde K3 i 3. etasje, Parkveien 95 8093 Bodø',
};

function Appointment() {
  return (
    <div>
      <h1>Innkalling til time</h1>
      <h2>{AppointmentData.title}</h2>

      <h3>Tid:</h3>
      <p>{AppointmentData.date}</p>

      <h3>Oppmøte:</h3>
      <p>{AppointmentData.instruction}</p>

      <h3>Sted:</h3>
      <p>{AppointmentData.address}</p>

      <Link to="./routeplanner">Apne reiseplanlegger</Link>
    </div>
  );
}

export default Appointment;
