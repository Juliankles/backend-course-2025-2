
const currency = "usd";        
const date_from = "20220707";  
const date_to   = "20220719";  

const baseUrl = "https://bank.gov.ua/NBU_Exchange/exchange_site";

const url = new URL(baseUrl);

url.searchParams.append("start", date_from);
url.searchParams.append("end", date_to);
url.searchParams.append("valcode", currency);
url.searchParams.append("sort", "exchangedate");
url.searchParams.append("order", "desc");
url.searchParams.append("json", "");

console.log(url.toString());