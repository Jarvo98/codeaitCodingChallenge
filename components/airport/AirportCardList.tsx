import React, { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { AirportList } from "../../model/AirportList";
import AirportCard from "./AirportCard";

interface Props {
    airportList: AirportList;
}

const useStyles = makeStyles(() =>
    createStyles({
        cardContainer: {
            display: "flex",
            flexWrap: "wrap",
        },
        h1: {
            paddingLeft: "1rem",
        },
    })
);

const AirportCardList: FC<Props> = ({ airportList }) => {
    const { routes } = airportList;
    const { cardContainer, h1 } = useStyles();

    return (
        <>
            <h1 className={h1}>Airports</h1>
            <div className={cardContainer}>
                {routes.map((airport) => (
                    <AirportCard key={airport.code} airport={airport} />
                ))}
            </div>
        </>
    );
};

export default AirportCardList;
