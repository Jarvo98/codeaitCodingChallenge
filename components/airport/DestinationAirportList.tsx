import React, {FC} from 'react'
import { List } from '@material-ui/core';
import DestinationAirport from '../../model/DestinationAirport';
import DestinationAirportListItem from "./DestinationAirportListItem";

interface Props {
    destinations: DestinationAirport[];
}

const DestinationAirportList: FC<Props> = ({destinations}) => {
    return (
        <>
            <h2 style={{paddingLeft: "1rem"}}>Destinations</h2>
            <List dense>
                {destinations.map((destinationAirport) => (
                    <DestinationAirportListItem key={destinationAirport.code} destinationAirport={destinationAirport} />
                ))}
            </List>
        </>
    );
}

export default DestinationAirportList;