import { AirportList } from "../model/AirportList";

class AirportService {
    getAirportList = (): Promise<AirportList> => {
        return new Promise((resolve) => {
            resolve(JSON.parse(`{
                "routes": [
                    {
                        "code": "ASU",
                        "countryCode": "PRY",
                        "description": "Silvio Pettirossi Intl Airport",
                        "destinations": [
                            {
                                "code": "EPA",
                                "countryCode": "ARG",
                                "description": "El Palomar Airport",
                                "metroGroup": "EPA",
                                "location": {
                                    "cityName": "Buenos Aires"
                                },
                                "availability": null
                            }
                        ],
                        "metroGroup": "ASU",
                        "price": null,
                        "offer": null,
                        "location": {
                            "cityName": "Asunción"
                        }
                    },
                    {
                        "code": "ASU1",
                        "countryCode": "PRY",
                        "description": "Silvio Pettirossi Intl Airport",
                        "destinations": [
                            {
                                "code": "EPA",
                                "countryCode": "ARG",
                                "description": "El Palomar Airport",
                                "metroGroup": "EPA",
                                "location": {
                                    "cityName": "Buenos Aires"
                                },
                                "availability": null
                            }
                        ],
                        "metroGroup": "ASU",
                        "price": null,
                        "offer": null,
                        "location": {
                            "cityName": "Asunción"
                        }
                    },
                    {
                        "code": "ASU2",
                        "countryCode": "PRY",
                        "description": "Silvio Pettirossi Intl Airport",
                        "destinations": [
                            {
                                "code": "EPA",
                                "countryCode": "ARG",
                                "description": "El Palomar Airport",
                                "metroGroup": "EPA",
                                "location": {
                                    "cityName": "Buenos Aires"
                                },
                                "availability": null
                            }
                        ],
                        "metroGroup": "ASU",
                        "price": null,
                        "offer": null,
                        "location": {
                            "cityName": "Asunción"
                        }
                    },
                    {
                        "code": "ASU3",
                        "countryCode": "PRY",
                        "description": "Silvio Pettirossi Intl Airport",
                        "destinations": [
                            {
                                "code": "EPA",
                                "countryCode": "ARG",
                                "description": "El Palomar Airport",
                                "metroGroup": "EPA",
                                "location": {
                                    "cityName": "Buenos Aires"
                                },
                                "availability": null
                            }
                        ],
                        "metroGroup": "ASU",
                        "price": null,
                        "offer": null,
                        "location": {
                            "cityName": "Asunción"
                        }
                    },
                    {
                        "code": "ASU4",
                        "countryCode": "PRY",
                        "description": "Silvio Pettirossi Intl Airport",
                        "destinations": [
                            {
                                "code": "EPA",
                                "countryCode": "ARG",
                                "description": "El Palomar Airport",
                                "metroGroup": "EPA",
                                "location": {
                                    "cityName": "Buenos Aires"
                                },
                                "availability": null
                            }
                        ],
                        "metroGroup": "ASU",
                        "price": null,
                        "offer": null,
                        "location": {
                            "cityName": "Asunción"
                        }
                    },
                    {
                        "code": "ASU5",
                        "countryCode": "PRY",
                        "description": "Silvio Pettirossi Intl Airport",
                        "destinations": [
                            {
                                "code": "EPA",
                                "countryCode": "ARG",
                                "description": "El Palomar Airport",
                                "metroGroup": "EPA",
                                "location": {
                                    "cityName": "Buenos Aires"
                                },
                                "availability": null
                            }
                        ],
                        "metroGroup": "ASU",
                        "price": null,
                        "offer": null,
                        "location": {
                            "cityName": "Asunción"
                        }
                    },
                    {
                        "code": "ASU6",
                        "countryCode": "PRY",
                        "description": "Silvio Pettirossi Intl Airport",
                        "destinations": [
                            {
                                "code": "EPA",
                                "countryCode": "ARG",
                                "description": "El Palomar Airport",
                                "metroGroup": "EPA",
                                "location": {
                                    "cityName": "Buenos Aires"
                                },
                                "availability": null
                            }
                        ],
                        "metroGroup": "ASU",
                        "price": null,
                        "offer": null,
                        "location": {
                            "cityName": "Asunción"
                        }
                    }
                ]
            }`));
        });
    }
}

export default new AirportService();