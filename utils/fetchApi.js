import axios from "axios";

export const baseUrl ='https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '6cf293eff3mshf8f6d4eb082e940p1c703fjsnbcb156772d84'
          }
    })
    return data;
}