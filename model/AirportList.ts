import { Nullable } from "../type/Nullable";
import Airport from "./Airtport";

interface Routes {
    routes: Airport[];
}

export type AirportList = Nullable<Routes>;