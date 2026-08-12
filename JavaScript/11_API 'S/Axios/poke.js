const main = document.querySelector("main");
const form = document.querySelector("form");
const input = document.querySelector("#val");
const card2 = document.querySelector(".meta-info");
form.addEventListener("submit", (e) => {
   e.preventDefault();
   const pokemonname = input.value.trim();
   getPokemonData(pokemonname);
   input.value = ""
});

async function getPokemonData(pokemonname) {
   try {
      const response = await axios.get(
         `https://pokeapi.co/api/v2/pokemon/${pokemonname}`
      );
      const data = response.data;
      const coll = cr1(data);
      const colle = await cr2(data);
      if (coll && colle) {
         main.innerHTML = '';
         main.innerHTML = `<h1>Loading......<h1>`
         setTimeout(() => {
            main.innerHTML = ''
            main.insertAdjacentHTML("beforeend", coll);

            main.insertAdjacentHTML("beforeend", colle);
         }, 1000)
      }
      else {
         main.innerHTML = '';
      }
   } catch (e) {
      error();

   }
}


function cr1(info) {

   const inform =
      ` <div id="poke-container1">
            
       
        <div class="image">
                <img src=${info.sprites.other['official-artwork'].front_default} alt=${info.name}>
            </div>
            <div class="info">
                <h1>${info.name.charAt(0).toUpperCase() + info.name.slice(1)}</h1>
                <p>Type: ${info.types[0].type.name}</p>
                <p>Abilities: ${info.abilities[0].ability.name},${info.abilities[1].ability.name} </p>
                <p>Height: ${info.height} m</p>
                <p>Weight: ${info.weight} kg</p>
            </div>
            <div class="pokeball">
                <img src="images-removebg-preview.png" alt="pokeball">
            </div>
       </div>`;

   return inform;
}
async function cr2(info1) {

   try {
      const inform1 =
         `
         <div class="meta-info">
            
        <div class="stats">
                <h2>Stats</h2>
                <p>HP: ${info1.stats[0].base_stat}</p>
                <p>Attack: ${info1.stats[1].base_stat}</p>
                <p>Defense: ${info1.stats[2].base_stat}</p>
                <p>Special Attack: ${info1.stats[3].base_stat}</p>
                <p>Special Defense: ${info1.stats[4].base_stat}</p>
                <p>Speed: ${info1.stats[5].base_stat}</p>
            </div>
            <div class="strnwek">
               ${await strandweekData(info1)}
            </div>
         </div>`;

      return inform1;
   }
   catch (e) {
      error();
   }

}
async function dt(param) {
   try {
      const ft = await axios.get(param.types[0].type.url)

      return ft.data.damage_relations;
   }
   catch (e) {
      error();
   }
}
async function strandweekData(info2) {

   try {
      const da = await dt(info2)
      console.log(da);
      const sw = ` <h1>Strength</h1>
                <ul>
                    <li>${da.double_damage_to[0].name}</li>
                    <li>${da.double_damage_to[1].name}</li>
                    <li>${da.half_damage_to[0].name}</li>
                </ul>
                <h1>Weakness</h1>
                <ul>
                    <li>${da.double_damage_from[0].name}</li>
                    <li>${da.half_damage_from[1].name}</li>
                </ul>`;
      return sw;
   }
   catch (e) {
      error();
   }

}
function error() {
   main.innerHTML = `<h1>Loading......<h1>`
   setTimeout(() => {
      main.innerHTML = ''
      main.innerHTML = `<h2> ❌ Unable to Fetch The Data<h2>`;
   }, 400);

}