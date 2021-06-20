import React, { FC, useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import MainLayout from "../components/layout/MainLayout";
import FlightsRouteProps from "../model/FlightsRouteProps";
import FlightListComponent from "../components/flight/FlightListComponent";
import FlightService from "../services/FlightService";
import Flight from "../model/Flight";

const Flights: FC = () => {
    const { origin, destination } = getRouteProps(useRouter());
    const [flightList, setFlightList] = useState<Flight[]>([]);

    useEffect(() => {
        const fetchFlightList = async () => {
            const flightList = await FlightService.getAllFlights();
            setFlightList(flightList);
        };

        fetchFlightList();
    }, []);

    return (
        <MainLayout>
            <h2>Choose your outbound flight to {destination.city}</h2>
            <FlightListComponent flightList={flightList} origin={origin} destination={destination} />
            <h2>Choose your inbound flight to {origin.city} </h2>
            <FlightListComponent flightList={flightList} origin={destination} destination={origin} />
        </MainLayout>
    );
};

const getRouteProps = ({ query }: NextRouter): FlightsRouteProps => {
    const { originCode, originCity, destinationCode, destinationCity } = query;

    return {
        origin: {
            code: originCode,
            city: originCity,
        },
        destination: {
            code: destinationCode,
            city: destinationCity,
        },
    };
};

export default Flights;
