import { createStyles, makeStyles } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import Flight from "../../model/Flight";
import { MinimalAirportInfo } from "../../model/FlightsRouteProps";
import FlightListItem from "./FlightListItem";

interface Props {
    flightList: Flight[];
    origin: MinimalAirportInfo;
    destination: MinimalAirportInfo;
}

const useStyles = makeStyles(() =>
    createStyles({
        cardContainer: {
            display: "flex",
            flexWrap: "wrap",
        },
    })
);

const FlightListComponent: FC<Props> = (props) => {
    const [flightList, setFlightList] = useState<Flight[]>([]);
    const [selected, setSelected] = useState("");
    const { cardContainer } = useStyles();

    useEffect(() => {
        setFlightList(
            props.flightList.filter((flight) => {
                const { origin, destination } = props;
                return flight.origin === origin.code && flight.destination === destination.code;
            })
        );
    }, [props.flightList]);

    if (flightList.length == 0) {
        return <h3>There are no available flights</h3>;
    }

    return (
        <div className={cardContainer}>
            {flightList.map((flight) => (
                <FlightListItem
                    key={flight.id}
                    flight={flight}
                    destination={props.destination}
                    selected={flight.id === selected}
                    setSelected={setSelected}
                />
            ))}
        </div>
    );
};

export default FlightListComponent;
