import Flight from "../model/Flight";
import flightsFile1 from "../epa-cor.json";
import flightsFile2 from "../epa-mdz.json";

class FlightService {
    getAllFlights = (): Promise<Flight[]> => {
        const { flights: flights1 } = flightsFile1;
        const { flights: flights2 } = flightsFile2;
        const finalFlightsList = flights1.concat(flights2);

        return new Promise((resolve) => {
            resolve(finalFlightsList);
        });
    };
}

export default new FlightService();
