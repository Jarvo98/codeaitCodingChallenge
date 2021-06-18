import { ListItem, ListItemText } from "@material-ui/core";
import React, { FC } from "react";
import DestinationAirport from "../../model/DestinationAirport";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

interface Props {
    destinationAirport: DestinationAirport;
}

const DestinationAirportListItem: FC<Props> = ({ destinationAirport }) => {
    const { code, description } = destinationAirport;

    return (
        <>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar
                        style={{
                            fontSize: "0.9rem",
                        }}
                    >
                        {code}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={description} />
            </ListItem>
        </>
    );
};

export default DestinationAirportListItem;
