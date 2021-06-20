import React, { FC, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { AirportList } from "../model/AirportList";
import AirportCardList from "../components/airport/AirportCardList";
import AirportService from "../services/AirportService";

const Search: FC = () => {
    const [airportList, setAirportList] = useState<AirportList>(null);

    useEffect(() => {
        const fetchAirportList = async () => {
            const airportList = await AirportService.getAirportList();
            setAirportList(airportList);
        };

        fetchAirportList();
    }, []);

    return (
        <MainLayout>
            {isAirportListValid(airportList) ? (
                <AirportCardList airportList={airportList} />
            ) : (
                <h1>There are no airports available</h1>
            )}
        </MainLayout>
    );
};

const isAirportListValid = (airportList: AirportList): boolean => {
    return !!airportList && airportList.routes.length > 0;
};

export default Search;
