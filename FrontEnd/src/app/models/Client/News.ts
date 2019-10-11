export class News {
    id: string;
    title: string;
    description: string;
    contentHTML: string;
    image: string;
    createdDate: string;
    author: string;
    groupName: string;
    views: number;
    constructor(){
        this.views = 0;
    }
}