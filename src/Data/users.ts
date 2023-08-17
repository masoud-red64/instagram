export type userListTypes = {
    id: number;
    img: string;
    hasStory: boolean;
    hasNewStory: boolean;
    username: string;
    name: string;
    stories: {
        id: number, img: string, video: string,
    }[];
}


export const usersList: userListTypes[] = [
    {
        id: 1,
        img: "user1.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "masoud_red64",
        name: "Masoud",
        stories: [
            { id: 1, img: 'df', video: 'sf' }
        ]

    },
    {
        id: 2,
        img: "user2.jpg",
        hasStory: false,
        hasNewStory: false,
        username: "m2.designing",
        name: "M2 D E S I G N",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
    {
        id: 3,
        img: "user3.jpg",
        hasStory: true,
        hasNewStory: false,
        username: "nikolausofpersia",
        name: "Nikolaus",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
    {
        id: 4,
        img: "user4.jpg",
        hasStory: true,
        hasNewStory: false,
        username: "bbcpersian",
        name: "BBC NEWS فارسی 19.4M",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
    {
        id: 5,
        img: "user5.jpg",
        hasStory: true,
        hasNewStory: true,
        username: " marzieh_d64",
        name: "Marzieh",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
    {
        id: 6,
        img: "user6.jpg",
        hasStory: true,
        hasNewStory: true,
        username: " arash_times",
        name: "Arash",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
    {
        id: 7,
        img: "user7.jpg",
        hasStory: false,
        hasNewStory: false,
        username: " ketab20.ir",
        name: " فروشگاه آنلاین کتاب ",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
    {
        id: 9,
        img: "user8.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "mobonews",
        name: "Mobonews | موبونیوز ",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
    {
        id: 10,
        img: "user9.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "mahdeih",
        name: "mahdieh_123  ",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
    {
        id: 11,
        img: "user10.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "masoudr3423",
        name: "movie | فیلم ",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
    {
        id: 12,
        img: "user11.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "mohammad",
        name: "mohammad_231 ",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
    {
        id: 13,
        img: "user12.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "ali",
        name: "ali_2312",
        stories: [
            { id: 1, img: '', video: '' }
        ]
    },
];