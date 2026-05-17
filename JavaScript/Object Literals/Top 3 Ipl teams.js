// Top 3 Most Followed IPL Teams Playing 11
let iplTeams = [
    {
        name: "Mumbai Indians",
        followers: "~42.6 Million+",
        playing11: ["Rohit Sharma", "Quinton de Kock",
                    "Suryakumar Yadav", "Hardik Pandya", 
                    "Jasprit Bumrah", "Trent Boult", 
                    "Shardul Thakur", "Ishan Kishan", 
                    "Tilak Varma", "Boult","Kieron Pollard"]
    },
    {
        name: "Chennai Super Kings",
        followers: "~48.4 Million+",
        playing11: ["MS Dhoni", "Ruturaj Gaikwad",
                    "Ayush Mhatre", "Sanju Samson", 
                    "Shivam Dube", "Dewald Brevis","Sarfaraz Khan","Jamie Overton",
                    "Khaleel Ahmed", "Anshul Kamboj","Noor Ahmad"]
    },
    {
        name: "Royal Challengers Bangalore",
        followers: "~48 Million+",
        playing11: ["Virat Kohli", "Philip Salt",
                    "Rajat Patidar", "Dinesh Karthik", 
                    "Tim David", "Josh Hazlewood",
                    "Bhuvneshwar Kumar", "Jacob Duffy", "Venkatesh Iyer", "Devdutt Padikkal","Suyash Sharma"]
    }
];  


// Displaying the top 3 IPL teams and their playing 11
console.log("Top 3 Most Followed IPL Teams and their Playing 11:");
console.log(` ${iplTeams[0].name} - Followers: ${iplTeams[0].followers} \n ${iplTeams[1].name} - Followers: ${iplTeams[1].followers} \n ${iplTeams[2].name} - Followers: ${iplTeams[2].followers}
              `);

console.log(`${iplTeams[0]["playing11"][0]} is the captain of ${iplTeams[0].name} \n${iplTeams[1].playing11[0]} is the captain of ${iplTeams[1].name} \n${iplTeams[2].playing11[0]} is the captain of ${iplTeams[2].name}.`); ;