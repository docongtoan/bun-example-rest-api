export class ParserService {

    public getAllParam(url: URL){
        return new Promise((resolve)=> {
            let result: any  = {};
            url.searchParams.forEach((value,key)=> {
                result[key] = value;
            });
            resolve(result);
        });
    }

    public getTokenHeaders(token: string){
        return token.split(' ')[1];
    }
}