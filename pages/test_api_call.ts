import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api';

if (!process.env.RIOT_API_KEY) {
    throw new Error('Invalid/Missing environment variable: "RIOT_API_KEY"')
}
  
const rAPI_key = process.env.RIOT_API_KEY

const summoner: RiotAPITypes.Summoner.SummonerDTO = await rAPI.summoner.getBySummonerName(...);