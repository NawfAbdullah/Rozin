import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
    const loggedIn = {
        firstName:'Nawf',
        lastName:'Abdullah',
        email:'nawfabu@gmail.com'
    }
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName||'Guest'}
                        subtext = 'Access and manage ypur account an transaction efficiently'
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks = {1}
                        totalCurrentBalance = {1234.50}
                    />
                </header>
            </div>
            <RightSidebar user={loggedIn} banks={[{currentBalance:123.50},{currentBalance:500}]} transactions={[]}/>
        </section>
    );
}

export default Home;