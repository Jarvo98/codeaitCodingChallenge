import Tax from "./Tax";
import FlightPrice from "./FlightPrice";

export default interface Fare {
    fareRef: string;
    passengerType: string;
    class: string;
    basis: string;
    availability: number;
    taxes: Tax[];
    prices: FlightPrice;
}
