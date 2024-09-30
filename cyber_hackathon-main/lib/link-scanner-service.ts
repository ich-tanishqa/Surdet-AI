async function maliciousPhoneScanner(phone: string, additonalParams: {strictness: number}) {
    const URL = `https://www.ipqualityscore.com/api/json/phone/${process.env.API_KEY}/${phone}?strictness=${additonalParams.strictness}`;
    const response = await fetch(URL , {method: "GET"});
    const data = await response.json();
    return data;
}

export async function scanPhone(phone: string){
    const PHONE = phone;
    const strictness = 0;
    const additonalParams = {
        strictness
    }
    const result = await maliciousPhoneScanner(PHONE, additonalParams);
    if(!result.success || result.do_not_call || result.spammer){
        return "Phone number is suspicious, do not make a call on it"
    }else{
        return "Phone number is safe"
    }
}

export async function maliciousUrlScanner(url: string, additonalParams: {strictness: number}){
    const URL = `https://www.ipqualityscore.com/api/json/url/${process.env.API_KEY}/${encodeURIComponent(url)}?strictness=${additonalParams.strictness}`;
    const response = await fetch(URL, {method: "GET"});
    const data = await response.json();
    return data;
}

export async function scanUrl(url: string){
    const URL = url;
    const strictness = 0;
    const additonalParams = {
        strictness
    }
    const result = await maliciousUrlScanner(URL, additonalParams);
    if(!result.success || result.suspicious){
        return "URL is malicious, proceed with caution"
    }else{
        return "URL is safe to use"
    }

}


export async function leakedPassword(password: string){
    const URL = `https://www.ipqualityscore.com/api/json/leaked/password/${process.env.API_KEY}/${password}`;
    const response = await fetch(URL, {method: "GET"});
    const data = await response.json();
    return data;
}

export async function scanPassword(password: string){
    const PASSWORD = password;
    const result = await leakedPassword(PASSWORD);
    if(!result.success || result.found || result.source){
        return "Password is leaked, change it immediately"
    }else{
        return "Password is not leaked"
    }
}
