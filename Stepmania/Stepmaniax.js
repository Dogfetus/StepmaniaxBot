import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });


export function GetHistory(){
    console.log(process.env.AuthGamerToken);
    let returnData = null;
    const url = process.env.EP_HISTORY;
    const body = {
        "apiVersion": process.env.ApiVersion,
        "auth_gamer": process.env.AuthGamer,
        "auth_token": process.env.AuthGamerToken,
        "last_score_id": null
      };

    fetch(url, {
    
        // get the data from the API
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'StepManiaX/1 CFNetwork/1492.0.1 Darwin/23.3.0',
            'Accept-Language': 'en-GB,en;q=0.9', 
        },
        body: JSON.stringify(body) 
        
    })
    .then(response => response.json()) // Parses JSON response into native JavaScript objects
    .then(data => {
        console.log(data); // Logging the data
        returnData = data;
    })
    .catch(error => {
        console.error('Error:', error); // Handling the error
    })
    .finally(() => {
        return returnData;
    });

}