import {
    Avatar,
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    Collapse,
    createStyles,
    IconButton,
    makeStyles,
} from "@material-ui/core";
import React, { FC, useState } from "react";
import Airport from "../../model/Airtport";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import image from "../../assets/img/pexels-burst-374870.jpg";
import Image from "next/image";
import DestinationAirportList from "./DestinationAirportList";

interface Props {
    airport: Airport;
}

const useStyles = makeStyles(() =>
    createStyles({
        card: {
            maxWidth: 345,
            margin: "1rem",
            cursor: "pointer",
            alignSelf: "start",
        },
        cardActions: {
            justifyContent: "end",
        },
        cardHeaderAvatar: {
            fontSize: "0.9rem",
        },
    })
);

const AirportCard: FC<Props> = ({ airport }) => {
    const { code, description, destinations } = airport;
    const { card, cardActions, cardHeaderAvatar } = useStyles();

    // State
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = (): void => {
        setExpanded(!expanded);
    };

    return (
        <Card className={card} onClick={toggleExpanded}>
            <CardHeader avatar={<Avatar className={cardHeaderAvatar}>{code}</Avatar>} title={description} />
            <CardMedia>
                <Image src={image} alt="Generic city" />
            </CardMedia>
            <CardActions className={cardActions} disableSpacing>
                <IconButton>{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <DestinationAirportList origin={code} destinations={destinations} />
            </Collapse>
        </Card>
    );
};

export default AirportCard;
