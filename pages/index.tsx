import React, { FC } from "react";
import Link from "next/link";
import MainLayout from "../components/layout/MainLayout";

const Home: FC = () => {
    return (
        <MainLayout>
            <main>
                <h1>Welcome</h1>
            </main>
        </MainLayout>
    );
};

export default Home;
