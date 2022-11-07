class Servisec {
     getData = async ()=>{
        let res = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    
        if(!res.ok){
          throw new Error(`Failed to fetch:  ${res.status}`);
        }
    
        return await res.json();
    }
}

export default Servisec;