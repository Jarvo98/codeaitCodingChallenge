import { ListItem, ListItemText } from "@material-ui/core";
import React, { FC } from "react";
import DestinationAirport from "../../model/DestinationAirport";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { NextRouter, useRouter } from "next/router";

interface Props {
    origin: string;
    destinationAirport: DestinationAirport;
}

const DestinationAirportListItem: FC<Props> = ({ destinationAirport, origin }) => {
    const { code, description } = destinationAirport;
    const router = useRouter();

    return (
        <>
            <ListItem button onClick={() => navigateToFlight(origin, code, router)}>
                <ListItemAvatar>
                    <Avatar className="avatar">{code}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={description} />
            </ListItem>

            <style jsx>
                {`
                    .avatar {
                        font-size: 0.9rem;
                    }
                `}
            </style>
        </>
    );
};

const navigateToFlight = (originCode: string, destinationCode: string, router: NextRouter): void => {
    router.push({
        pathname: "/flights",
        query: {
            originCode,
            destinationCode,
        },
    });
};

export default DestinationAirportListItem;
