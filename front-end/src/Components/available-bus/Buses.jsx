import styled from "styled-components";
import { useState, useEffect } from "react";
import { OneBus } from "./one-bus/OneBus";
import "../LandingPage/searchBuses.css"
import { Form } from "../LandingPage/Form";

import { useLocation } from "react-router-dom";



function Buses() {


    const [All_bus, setAll_bus] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:2233/bus/all");
            const data = await res.json();
            // console.log(data);
            setAll_bus(data.item);
        }
        fetchData();
    }, [])
    console.log(All_bus);



    let { search } = useLocation();
    const query = new URLSearchParams(search);
    const from = query.get("from");
    const to = query.get("to");
    var BUS_JS = All_bus.filter((item) => (
        from === item.pickup_address || to === item.drop_address
    ))
    console.log(BUS_JS);

    const [buses, setBuses] = useState(BUS_JS)
    console.log(buses);

    var original = BUS_JS;



    const [colour, setColour] = useState("red");



    const determineColour = (bus) => {
        if (bus.currentOccupancy / bus.totalSeats > 0.9) {
            return "red";
        } else if (bus.currentOccupancy / bus.totalSeats > 0.6 && bus.currentOccupancy / bus.totalSeats < 0.9) {
            return "yellow";
        } else {
            return "green";
        }
    }

    const Container = styled.div`
        width: 100%;
        margin-top:6.5%;
        padding: 100px;
        // height: 1000px;
        display: grid;
        // grid-template-columns: 25% 70%;
        // border: 1px solid black;
        // grid-gap: 3%;
    `
    const Filter_container = styled.div`
        width: 100%;
        border: 1px solid black;
        // height: 1000px;
    `
    const Available_bus_container = styled.div`
        // border: 1px solid black;
        width: 100%;
        /* height: auto; */
        display: grid;
        grid-gap: 20px;
        flex-wrap: wrap;
        margin-top: 20px;
        top: 0;
    `
    const Sort_div = styled.div`
        width: 100%;
        height: 50px;
        border: 1px solid black;
        display: grid;
        grid-template-columns: 18% 10% 10% 10% 10% ;
        grid-gap: 10px;
        `
    if (BUS_JS.length === 0) {
        return (

            <>
                <div className="assam">
                    <div>
                        <img className="oops_img" src="https://www.redbus.in/images/no_bus.png" alt="" /></div>
                    <div className="oops">
                        <h3>Oops! No buses found.</h3>
                        <p>No routes available</p>
                    </div>

                </div>



            </>
        )

    }
    else {
        return (

            <Container >

              
                <Available_bus_container>

                    <Sort_div>
                        <div>{BUS_JS.length} Bus found</div>
                        <div style={{ fontWeight: "bold" }}>Sort by :</div>
                        <div>Departure</div>
                        <div>Destination</div>
                        <div>Seat Availability</div>

                    </Sort_div>
                    <div style={{ margin: "5px", display: "grid", gridGap: "5px", width: "100%", top: "0" }}>
                        {
                            BUS_JS.map((e) => (
                                <>
                                    {setColour(determineColour(e))}
                                    {/* {colour} */}
                                    <OneBus key={e._id} data={e}></OneBus>
                                </>
                            ))
                        }
                    </div>

                </Available_bus_container>


            </Container>
        )
    }
}

export { Buses };