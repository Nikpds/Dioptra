// type stands for KLADO
// 0 geetha
// 1 stratos
// 2 pn
// 3 pa
// export const servers = [
//     {
//         name: 'ΓΕΕΘΑ', ip: '192.168.48.249', isMain: false, type: 0, 
//         httpsCheck: false, httpCheck: 'false', ping: false
//     },
//     {
//         name: 'ΓΕΑ', ip: '192.168.48.248', isMain: false, type: 3,
//         httpsCheck: false, httpCheck: 'false', ping: false
//     },
//     {
//         name: '476 ΤΥΠ', ip: '192.168.48.72', isMain: false, type: 1,
//         httpsCheck: false, httpCheck: 'false', ping: false
//     },
//     {
//         name: '471 ΤΥΠ', ip: '192.168.48.72', isMain: false, type: 1,
//         httpsCheck: false, httpCheck: 'false', ping: false
//     },
//     {
//         name: 'ΓΕΝ', ip: '192.168.48.72', isMain: true, type: 2,
//         httpsCheck: false, httpCheck: 'false', ping: false
//     },
//     {
//         name: 'ΑΤΑ', ip: '192.168.48.72', isMain: false, type: 3,
//         httpsCheck: false, httpCheck: 'false', ping: false
//     },
//     {
//         name: '117 ΠΜ', ip: '192.168.48.72', isMain: false, type: 3,
//         httpsCheck: false, httpCheck: 'false', ping: false
//     },
//     {
//         name: '140 ΣΕΠΗΠ', ip: '192.168.48.72', isMain: false, type: 3,
//         httpsCheck: false, httpCheck: 'false', ping: false
//     }
// ];

export const servers = [
    {
        name: 'Ca Authority', ip: '192.168.48.72', protocol: 'https', isMain: false, type: 0,
        httpsCheck: false, httpCheck: 'false', ping: false, port: '9000'
    },
    {
        name: 'Private', ip: '192.168.48.62', protocol: 'https', isMain: true, type: 3,
        httpsCheck: false, httpCheck: 'false', ping: false, port: '9000'
    }, {
        name: 'Dev 1', ip: '192.168.48.249', protocol: 'https', isMain: false, type: 3,
        httpsCheck: false, httpCheck: 'false', ping: false, port: '9000'
    },
    {
        name: 'Dev 2', ip: '192.168.48.248', protocol: 'https', isMain: false, type: 3,
        httpsCheck: false, httpCheck: 'false', ping: false, port: '9000'
    }
];