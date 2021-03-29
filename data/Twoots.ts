const twoots = [
    {
        id: 't1',
        user: {
            id: 'u1',
            username: "kgrstad",
            name: "Knut Grostad",
            image: "https://avatars.githubusercontent.com/u/43546391?v=4"
        },
        createdAt: '2021-03-01T12:00:00.00Z',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas dignissim nibh, quis eleifend eros tristique et. Phasellus vestibulum nulla fermentum, facilisis diam at, efficitur ex.',
        image: 'data:image/jpeg;base64,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',
        numberOfComments: 123,
        numberOfRetwoots: 12,
        numberOfLikes: 32
    },
    {
        id: 't2',
        user: {
            id: 'u2',
            username: "GuriSan",
            name: "Guri Sandnes",
            image: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/141095006_1825293340956797_3616355231557974816_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6fYsfnkFpTMAX_DukIh&_nc_ht=scontent-arn2-1.xx&oh=04598f661658528476142cff5724b80a&oe=60866CCF"
        },
        createdAt: '2021-03-23T12:00:00.00Z',
        content: 'Ayyyy',
        numberOfComments: 123,
        numberOfRetwoots: 12,
        numberOfLikes: 32
    },
    {
        id: 't3',
        user: {
            id: 'u3',
            username: "Tgros",
            name: "Torstein Grostad",
            image: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/72519_103689729699686_3824477_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=h2ZHcw9lkpUAX-cRWHt&_nc_ht=scontent-arn2-1.xx&oh=99ee168cf2a26633cb2c55a6df16c0af&oe=608688D6"
        },
        createdAt: '2021-03-20T12:00:00.00Z',
        content: 'Pog pog pog',

        numberOfComments: 324,
        numberOfRetwoots: 542,
        numberOfLikes: 2500
    },
];

export default twoots;