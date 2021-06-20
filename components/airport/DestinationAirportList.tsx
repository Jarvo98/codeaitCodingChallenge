import React, { FC } from "react";
import { List } from "@material-ui/core";
import DestinationAirport from "../../model/DestinationAirport";
import DestinationAirportListItem from "./DestinationAirportListItem";

interface Props {
    originCode: string;
    originCity: string;
    destinations: DestinationAirport[];
}

const DestinationAirportList: FC<Props> = ({ destinations, originCode, originCity }) => {
    return (
        <>
            <h2 style={{ paddingLeft: "1rem" }}>Destinations</h2>
            <List dense>
                {destinations.map((destinationAirport) => (
                    <DestinationAirportListItem
                        key={destinationAirport.code}
                        originCode={originCode}
                        originCity={originCity}
                        destinationAirport={destinationAirport}
                    />
                ))}
            </List>
        </>
    );
};

export default DestinationAirportList;
