import { Notify } from 'src/app/models/Client/Notify';
import { Menu } from 'src/app/models/Client/Menu';
import { Analy } from 'src/app/models/Client/Analy';
import { News } from 'src/app/models/Client/News';
import { NewsGroup } from 'src/app/models/Client/NewsGroup';
import { Picture } from 'src/app/models/Client/Picture';
import { Chat } from 'src/app/models/Client/Chat';


export const chatData: Chat[] = [
    {
        message: 'Hello',
        color: 'black',
        name: 'duy',
        image: 'http://emilcarlsson.se/assets/harveyspecter.png',
        sent: true,
        background: '#f5f5f5',
        size: '15px'
    },
    {
        message: 'Hello',
        color: '#f5f5f5',
        name: 'duy',
        image: 'http://emilcarlsson.se/assets/harveyspecter.png',
        sent: false,
        background: '#435f7a',
        size: '15px'
    },
    {
        message: 'Hello',
        color: 'black',
        name: 'duy',
        image: 'http://emilcarlsson.se/assets/harveyspecter.png',
        sent: true,
        background: '#f5f5f5',
        size: '15px'
    },
    {
        message: 'Hello',
        color: '#f5f5f5',
        name: 'duy',
        image: 'http://emilcarlsson.se/assets/harveyspecter.png',
        sent: false,
        background: '#435f7a',
        size: '15px'
    },
]
export const notifyData: Notify = {
    speed: 10,
    noti:[
        {
            id: '1',
            message: 'This is a sample scrolling text that has scrolls texts to left.',
            color: 'yellow',
            size: 15
        }
    ]
}

export const menuData : Menu[] = [
    {
        id: '1',
        name: 'Home',
        url: '/'
    },
    {
        id: '2',
        name: 'Game',
        url: null
    }
]

export const analyData: Analy = {
    news: 123,
    downloads: 111,
    users: 372,
    onlines: 153
}

export const newsBoxData: News[] = [
    {
        id: '1',
        title: 'He made his passenger captain of one1',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
    {
        id: '8',
        title: 'He made his passenger captain of one2',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
    {
        id: '7',
        title: 'He made his passenger captain of one3',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
    {
        id: '6',
        title: 'He made his passenger captain of one',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
    {
        id: '5',
        title: 'He made his passenger captain of one',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
    {
        id: '4',
        title: 'He made his passenger captain of one',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
    {
        id: '3',
        title: 'He made his passenger captain of one',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
    {
        id: '2',
        title: 'He made his passenger captain of one',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
]


export const lastNewData: NewsGroup[] = [
    {
        id: '1',
        name: 'Tin tuc',
        news: [
            {
                id: '2',
                title: 'He made his passenger captain of one',
                description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
                author: 'duy',
                createdDate: '2019-10-10',
                contentHTML: null,
                image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
                groupName: 'MMO',
                views: 0
            },
        ]
    },
    {
        id: '2',
        name: 'Tin tuc2',
        news: [
            {
                id: '2',
                title: 'He made his passenger captain of one',
                description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
                author: 'duy',
                createdDate: '2019-10-10',
                contentHTML: null,
                image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
                groupName: 'MMO',
                views: 0
            },
            {
                id: '2',
                title: 'He made his passenger captain of one',
                description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
                author: 'duy',
                createdDate: '2019-10-10',
                contentHTML: null,
                image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
                groupName: 'MMO',
                views: 0
            },
            {
                id: '2',
                title: 'He made his passenger captain of one',
                description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
                author: 'duy',
                createdDate: '2019-10-10',
                contentHTML: null,
                image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
                groupName: 'MMO',
                views: 0
            },
        ]
    },
    {
        id: '3',
        name: 'Tin tuc2',
        news: [
            {
                id: '2',
                title: 'He made his passenger captain of one',
                description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
                author: 'duy',
                createdDate: '2019-10-10',
                contentHTML: null,
                image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
                groupName: 'MMO',
                views: 0
            },
            {
                id: '2',
                title: 'He made his passenger captain of one',
                description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
                author: 'duy',
                createdDate: '2019-10-10',
                contentHTML: null,
                image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
                groupName: 'MMO',
                views: 0
            },
            {
                id: '2',
                title: 'He made his passenger captain of one',
                description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
                author: 'duy',
                createdDate: '2019-10-10',
                contentHTML: null,
                image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
                groupName: 'MMO',
                views: 0
            },
        ]
    },
]

export const pictureData: Picture[] = [
    {
        name: 'asd',
        url: 'https://cdn-html.nkdev.info/goodgames/assets/images/gallery-1-thumb.jpg'
    },
    {
        name: 'asd',
        url: 'https://cdn-html.nkdev.info/goodgames/assets/images/gallery-1-thumb.jpg'
    },
    {
        name: 'asd',
        url: 'https://cdn-html.nkdev.info/goodgames/assets/images/gallery-1-thumb.jpg'
    },
    {
        name: 'asd',
        url: 'https://cdn-html.nkdev.info/goodgames/assets/images/gallery-1-thumb.jpg'
    },
    {
        name: 'asd',
        url: 'https://cdn-html.nkdev.info/goodgames/assets/images/gallery-1-thumb.jpg'
    },
    {
        name: 'asd',
        url: 'https://cdn-html.nkdev.info/goodgames/assets/images/gallery-1-thumb.jpg'
    },
    {
        name: 'asd',
        url: 'https://cdn-html.nkdev.info/goodgames/assets/images/gallery-1-thumb.jpg'
    },
    {
        name: 'asd',
        url: 'https://cdn-html.nkdev.info/goodgames/assets/images/gallery-1-thumb.jpg'
    },
]


export const recentNewsData: News[] = [
    {
        id: '2',
        title: 'He made his passenger captain of one',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
    {
        id: '2',
        title: 'He made his passenger captain of one',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
    {
        id: '2',
        title: 'He made his passenger captain of one',
        description: 'This little wandering journey, without settled place of abode, had been so unpleasant to me, that my own house, as I called it to myself, was a perfect settlement to me compared to that',
        author: 'duy',
        createdDate: '2019-10-10',
        contentHTML: null,
        image: 'https://cdn-html.nkdev.info/goodgames/assets/images/post-4.jpg',
        groupName: 'MMO',
        views: 0
    },
]