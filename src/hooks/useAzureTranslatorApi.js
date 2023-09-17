import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addtranslatedText } from '../utils/translateSlice';




const useAzureTranslatorApi = () => {
    const dispatch = useDispatch();
    let language = useSelector(store => store.txt.language);
    let lang = language;

    let key = process.env.REACT_APP_AZUREKEY;
    let endpoint = "https://api.cognitive.microsofttranslator.com";

    // location, also known as region.
    // required if you're using a multi-service or regional (not global) resource. It can be found in the Azure portal on the Keys and Endpoint page.
    let location = "southeastasia";

    axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
            // location required if you're using a multi-service or regional (not global) resource.
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'to': [lang]
        },
        data: [{
            'text': 'Now playing, Popular, Top Rated, Upcoming Movies, Trending, Sign out, GPT search, play, more info, what would you like to see today?, Search, Home'
        }],
        responseType: 'json'
    }).then(function (response) {

        const result = response.data[0].translations[0].text.split(",");
        dispatch(addtranslatedText(result));
        console.log(response.data[0].translations[0].text.split(","))

    })
}

export default useAzureTranslatorApi;