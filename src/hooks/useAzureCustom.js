
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addTitle } from '../utils/translateSlice';
const { v4: uuidv4 } = require('uuid');

const useAzureTCustom = () => {
    const dispatch = useDispatch();
    const text = useSelector(store => store.movies.movieTitle)
    let lang = useSelector((store) => store.txt.language);

    let key = process.env.REACT_APP_AZUREKEY;
    let endpoint = "https://netflixgpt.cognitiveservices.azure.com/";

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
            'text': text
        }],
        responseType: 'json'
    }).then(function (response) {

        const result = response.data[0].translations[0].text;
        console.log("Translation API Response: ", result);
        dispatch(addTitle(result));
        

    })
}

export default useAzureTCustom;