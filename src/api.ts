interface RespostaApi{
    slip: Conselho
}
interface Conselho {
    id: number,
    advice: string
}

const API_URL = "https://api.adviceslip.com/advice";

const chamarApi = async() =>{
    const response = await fetch(API_URL);
    const data: RespostaApi = await response.json();
    console.log(data.slip.advice);
}

chamarApi();    