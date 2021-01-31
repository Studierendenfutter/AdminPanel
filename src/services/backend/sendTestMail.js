import config from "../../config";
import getData from "./getData";

export default async function sendTestMail(){
    const url = config.BACKEND_URL + "/crons/sendTestMail"
    await getData(url)
}