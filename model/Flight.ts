import Fare from "./Fare";

export default interface Flight {
    id: string;
    origin: string;
    destination: string;
    departureDate: string;
    arrivalDate: string;
    flightNo: number;
    fares: Fare[];
    carrier: string;
    international: boolean;
    currency: string;
}
