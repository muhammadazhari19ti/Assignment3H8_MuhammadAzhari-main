const axios = require('axios').default;

async function getData() {
    try{
        const url = "https://data.covid19.go.id/public/api/prov.json";
        const response = await axios.get(url);
        const data = response.data;
        return data;
    }catch(error){
        throw new Error(error);
    }
}

exports.getData = getData;