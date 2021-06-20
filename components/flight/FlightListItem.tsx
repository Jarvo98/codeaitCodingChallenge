import React, { FC } from "react";
import Flight from "../../model/Flight";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import { MinimalAirportInfo } from "../../model/FlightsRouteProps";
import Image from "next/image";
import image from "../../assets/img/pexels-burst-374870.jpg";
import { Typography } from "@material-ui/core";
import Fare from "../../model/Fare";
import { makeStyles, createStyles } from "@material-ui/core";

interface Props {
    flight: Flight;
    destination: MinimalAirportInfo;
    selected: boolean;
    setSelected: (value: string) => void;
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            maxWidth: 345,
            margin: "1rem",
        },
        selectedCard: {
            border: "8px #7B8FCA solid",
        },
        cardActions: {
            justifyContent: "end",
            fontWeight: "bold",
        },
        cardHeaderAvatar: {
            fontSize: "0.9rem",
        },
    })
);

const FlightListItem: FC<Props> = ({ flight, destination, setSelected, selected }) => {
    const { departureDate, arrivalDate, currency, fares, id } = flight;
    const { city, code } = destination;
    const { selectedCard, root, cardActions, cardHeaderAvatar } = useStyles();

    return (
        <Card onClick={() => setSelected(id)} className={`${root} ${resolveSelected(selected, selectedCard)}`}>
            <CardHeader
                avatar={<Avatar className={cardHeaderAvatar}>{code}</Avatar>}
                title={city}
                subheader={formatDate(departureDate)}
            />
            <CardMedia>
                <Image src={image} alt="City Photo" />
            </CardMedia>
            <CardContent>
                <Typography variant="body2" component="p">
                    <b>Estimated duration:</b> {calculateDuration(departureDate, arrivalDate)}h
                </Typography>
            </CardContent>
            <CardActions className={cardActions}>
                <p>
                    {calculatePrice(fares)} {currency}
                </p>
            </CardActions>
        </Card>
    );
};

const formatDate = (date: string): string => {
    let realDate = new Date(date);
    return `${realDate.getDate()}/${realDate.getUTCMonth() + 1}/${realDate.getFullYear()}`;
};

const calculateDuration = (departureDate: string, arrivalDate: string): number => {
    let realArrivalDate = new Date(arrivalDate);
    let realDepartureDate = new Date(departureDate);
    return Math.floor((realArrivalDate.getTime() - realDepartureDate.getTime()) / (60 * 60 * 1000));
};

const calculatePrice = (fareList: Fare[]): number => {
    let finalPrice = 0;

    fareList.forEach(({ prices }) => {
        const { afterTax } = prices;
        finalPrice += afterTax;
    });

    return finalPrice;
};

const resolveSelected = (isSelected: boolean, selectedClass: string) => {
    if (isSelected) {
        return selectedClass;
    } else {
        return "";
    }
};

export default FlightListItem;
