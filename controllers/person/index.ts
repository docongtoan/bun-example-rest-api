interface Person {
    userId: number,
    id: number,
    title: string,
    body: string
}

export class PersonController {
    async getList(){
        let result : Person[] = [];
        try {
            let resData = await fetch('https://jsonplaceholder.typicode.com/posts');
            result = await resData.json();
            return result;
        } catch (error) {
            return new Error(JSON.stringify(error));
        }
    }
}