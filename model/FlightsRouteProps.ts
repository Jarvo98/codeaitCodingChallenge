/**
 * Added this type so that there is no conflict
 * with the query property from next's router
 * but in practicality both the originCode
 * and destinationCode will be most likely
 * string.
 */
type code = string | string[];

export interface MinimalAirportInfo {
    code: code;
    city: code;
}

export default interface FlightsRouteProps {
    origin: MinimalAirportInfo;
    destination: MinimalAirportInfo;
}
