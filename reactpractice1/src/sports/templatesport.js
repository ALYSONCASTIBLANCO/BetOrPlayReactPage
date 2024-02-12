import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function SportTemplate(props){
    const[values, setValues]=React.useState({
        data:[]

    });
    useEffect(()=>async function fetchData(){
        const res=await fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table",{
            headers: {
                'X-RapidAPI-Key': 'b344c12e85msh90d9ccc30bd291fp12d1aajsn500e08acbdf3',
                'X-RapidAPI-Host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
              },
            method:"GET"     
            }
        )
    const data=await res.json();
    console.log(data);
    },[])
    return(
        <Container>
            <h1>Sport main template</h1>

        </Container>
        
    );
}