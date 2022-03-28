import { flipACoin } from "./modules/coin.mjs";
import min from "minimist";

let args = min(process.argv.slice(2))

if(args['call'] == 'heads' || args['call'] == 'tails'){
    console.log(flipACoin(args['call'])) 
}
else console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
