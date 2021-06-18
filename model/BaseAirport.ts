import Location from "./Location";

export default interface BaseAirport {
    code: string;
    countryCode: string;
    description: string;
    metroGroup: string;
    location: Location;
}