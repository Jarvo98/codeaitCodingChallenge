import React, { FC, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import {AirportList} from "../model/AirportList";
import AirportCardList from "../components/airport/AirportCardList";
import AirportService from "../services/AirportService";

const Search: FC = () => {
    const [airportList, setAirportList] = useState<AirportList>(null);

    useEffect(() => {
        const fetchAirportList = async () => {
            const airportList = await AirportService.getAirportList();
            setAirportList(airportList);
        }

        fetchAirportList()
    }, []);

    return (
        <MainLayout>
            <main>
                {/* <article>
                    <h1>Select your origin</h1>
                    <section>
                        <p>
                            Here should be a card approach list of all available origin airports. When an origin airport is
                            selected, the list should display all available destination for given selection. The card should
                            have:
                        </p>
                        <ul>
                            <li>A dummy image</li>
                            <li>Should be selectable by clicking the whole card</li>
                            <li>Display the airport code</li>
                            <li>Display the location city name</li>
                        </ul>
                    </section>
                    <Link href="/flights">
                        <a>Start your journey!</a>
                    </Link>
                </article> */}
                {isAirportListValid(airportList) ? <AirportCardList airportList={airportList} /> : (
                    <h1>There are no airports available</h1>
                )}
            </main>
        </MainLayout>
    );
};

const isAirportListValid = (airportList: AirportList): boolean => {
    return (!!airportList && (airportList.routes.length > 0));
}

export default Search;
