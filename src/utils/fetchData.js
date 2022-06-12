export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '1bcda4d99fmshb15ba94b55f25b0p11a2c5jsn638c6f590042'
    }
  };
  



export const fetchData = async (url, options) => {

    const response=await fetch(url,options);
    const data=await response.json();

    return data;

};
