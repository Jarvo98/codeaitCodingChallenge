import { createStyles, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React, { FC } from "react";
import DestinationAirport from "../../model/DestinationAirport";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { NextRouter, useRouter } from "next/router";

interface Props {
    originCode: string;
    originCity: string;
    destinationAirport: DestinationAirport;
}

const useStyles = makeStyles(() =>
    createStyles({
        avatar: {
            fontSize: "0.9rem",
        },
    })
);

const DestinationAirportListItem: FC<Props> = ({ originCode, originCity, destinationAirport }) => {
    const {
        code: destinationCode,
        description,
        location: { cityName: destinationCity },
    } = destinationAirport;
    const router = useRouter();
    const { avatar } = useStyles();

    return (
        <>
            <ListItem
                button
                onClick={() => navigateToFlight(originCode, originCity, destinationCode, destinationCity, router)}
            >
                <ListItemAvatar>
                    <Avatar className={avatar}>{destinationCode}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={description} />
            </ListItem>
        </>
    );
};

const navigateToFlight = (
    originCode: string,
    originCity: string,
    destinationCode: string,
    destinationCity: string,
    router: NextRouter
): void => {
    router.push({
        pathname: "/flights",
        query: {
            originCode,
            originCity,
            destinationCode,
            destinationCity,
        },
    });
};

export default DestinationAirportListItem;
