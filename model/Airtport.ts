import BaseAirport from "./BaseAirport";
import DestinationAirport from "./DestinationAirport";

export default interface Airport extends BaseAirport {
    destinations: DestinationAirport[];
    price: number;
    offer: any;
}