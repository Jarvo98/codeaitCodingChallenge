import { AirportList } from "../model/AirportList";
import routes from "../routes.json";

class AirportService {
    getAirportList = (): Promise<AirportList> => {
        return new Promise((resolve) => {
            resolve(routes);
        });
    };
}

export default new AirportService();
