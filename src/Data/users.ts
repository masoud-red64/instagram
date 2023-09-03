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
    posts: { comments: { id: number, text: string }[] }
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
            { id: 1, img: 'img1.jpg', video: '' },
            { id: 2, img: '', video: 'video1.mp4' },
            { id: 3, img: 'img2.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 1, text: 'nice😍😎' },
                { id: 2, text: 'محتوای مناسبی بود😋' }
            ]
        }

    },
    {
        id: 2,
        img: "user2.jpg",
        hasStory: false,
        hasNewStory: false,
        username: "soroush_rafiei",
        name: "Soroush",
        stories: [
            { id: 4, img: 'img3.jpg', video: '' },
            { id: 5, img: '', video: 'video2.mp4' },
            { id: 6, img: 'img4.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 3, text: 'nice😍😎' },
                { id: 4, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
    {
        id: 3,
        img: "user3.jpg",
        hasStory: true,
        hasNewStory: false,
        username: "nikolausofpersia",
        name: "Nikolaus",
        stories: [
            { id: 8, img: '', video: 'video3.mp4' },
        ],
        posts: {
            comments: [
                { id: 5, text: 'nice😍😎' },
                { id: 6, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
    {
        id: 4,
        img: "user4.jpg",
        hasStory: true,
        hasNewStory: false,
        username: "bbcpersian",
        name: "BBC NEWS فارسی 19.4M",
        stories: [
            { id: 10, img: 'img5.jpg', video: '' },
            { id: 11, img: '', video: 'video4.mp4' },
            { id: 12, img: 'img6.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 7, text: 'nice😍😎' },
                { id: 8, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
    {
        id: 5,
        img: "user5.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "mehdi_ahmadvandoriginal",
        name: "Mehdi Ahmadvandmusic",
        stories: [
            { id: 13, img: 'img7.jpg', video: '' },
            { id: 14, img: '', video: 'video5.mp4' },
            { id: 15, img: 'img8.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 9, text: 'nice😍😎' },
                { id: 10, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
    {
        id: 6,
        img: "user6.jpg",
        hasStory: true,
        hasNewStory: true,
        username: " arash_times",
        name: "Arash",
        stories: [
            { id: 16, img: 'img9.jpg', video: '' },
            { id: 17, img: '', video: 'video6.mp4' },
            { id: 18, img: 'img10.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 11, text: 'nice😍😎' },
                { id: 12, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
    {
        id: 7,
        img: "user7.jpg",
        hasStory: false,
        hasNewStory: false,
        username: "theeconomist",
        name: "The Economist",
        stories: [
            { id: 19, img: 'img11.jpg', video: '' },
            { id: 20, img: '', video: 'video7.mp4' },
            { id: 21, img: 'img12.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 13, text: 'nice😍😎' },
                { id: 14, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
    {
        id: 8,
        img: "user8.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "mobonews",
        name: "Mobonews | موبونیوز ",
        stories: [
            { id: 22, img: 'img13.jpg', video: '' },
            { id: 23, img: '', video: 'video8.mp4' },
            { id: 24, img: 'img14.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 15, text: 'nice😍😎' },
                { id: 16, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
    {
        id: 9,
        img: "user9.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "mahdieh_123",
        name: "mahdieh",
        stories: [
            { id: 25, img: 'img15.jpg', video: '' },
            { id: 26, img: '', video: 'video9.mp4' },
            { id: 27, img: 'img16.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 17, text: 'nice😍😎' },
                { id: 18, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
    {
        id: 10,
        img: "user10.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "hosseinsoleimani",
        name: "Hossein soleimani",
        stories: [
            { id: 28, img: 'img17.jpg', video: '' },
            { id: 29, img: '', video: 'video10.mp4' },
            { id: 30, img: 'img18.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 19, text: 'nice😍😎' },
                { id: 20, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
    {
        id: 11,
        img: "user11.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "iz.mohsen",
        name: "Mohsen Easy | محسن ایزی",
        stories: [
            { id: 31, img: 'img19.jpg', video: '' },
            { id: 32, img: '', video: 'video11.mp4' },
            { id: 33, img: 'img20.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 21, text: 'nice😍😎' },
                { id: 22, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
    {
        id: 12,
        img: "user12.jpg",
        hasStory: true,
        hasNewStory: true,
        username: "hamedahangi",
        name: "Hamed Ahangi",
        stories: [
            { id: 34, img: 'img21.jpg', video: '' },
            { id: 35, img: '', video: 'video12.mp4' },
            { id: 36, img: 'img1.jpg', video: '' },
        ],
        posts: {
            comments: [
                { id: 23, text: 'nice😍😎' },
                { id: 24, text: 'محتوای مناسبی بود😋' }
            ]
        }
    },
];