// import React from 'react';
import expert_service from '../services/expert_service';


// EXPERTS PAGE ===============================================================================================================================

export const experts_sample_list = [
    {
        title: "Dr. Saman Pathmakumara",
        role: "Psycologist",
        content: "Graduated from Medical Faculty of Colombo and has Phd in Psycological Science.",
        available: {week:{start:"9:00AM", end:"5:00PM"}, weekend:{start:"9:00AM", end:"5:00PM"}},
        qualifications: [],
        rate: 4.5,
        email: "hr.sds@gmail.com",
        state: "active",
        url: "",
        icon: "fas fa-play-circle"
    },

    {
        title: "Dr. Saman Pathmakumara",
        role: "Psycologist",
        content: "Graduated from Medical Faculty of Colombo and has Phd in Psycological Science.",
        available: {week:{start:"9:00AM", end:"7:00PM"}, weekend:{start:"9:00AM", end:"5:00PM"}},
        qualifications: [],
        rate: 4.5,
        email: "hr.sds@gmail.com",
        state: "active",
        url: "",
        icon: "fas fa-play-circle"
    },

    {
        title: "Dr. Saman Pathmakumara",
        role: "Psycologist",
        content: "Graduated from Medical Faculty of Colombo and has Phd in Psycological Science.",
        available: {week:{start:"9:30AM", end:"6:00PM"}, weekend:{start:"9:00AM", end:"5:00PM"}},
        qualifications: [],
        rate: 4.5,
        email: "hr.sds@gmail.com",
        state: "active",
        url: "",
        icon: "fas fa-play-circle"
    },

    {
        title: "Dr. Saman Pathmakumara",
        role: "Psycologist",
        content: "Graduated from Medical Faculty of Colombo and has Phd in Psycological Science.",
        available: {week:{start:"9:00AM", end:"5:00PM"}, weekend:{start:"9:00AM", end:"5:00PM"}},
        qualifications: [],
        rate: 4.5,
        email: "hr.sds@gmail.com",
        state: "active",
        url: "",
        icon: "fas fa-play-circle"
    },

    {
        title: "Dr. Saman Pathmakumara",
        role: "Psycologist",
        content: "Graduated from Medical Faculty of Colombo and has Phd in Psycological Science.",
        available: {week:{start:"9:00AM", end:"5:00PM"}, weekend:{start:"9:00AM", end:"5:00PM"}},
        qualifications: [],
        rate: 4.5,
        email: "hr.sds@gmail.com",
        state: "active",
        url: "",
        icon: "fas fa-play-circle"
    }
]

// HOME PAGE ===================================================================================================================================

export const home_content = [
    {
        type:"default",
        id: 1,
        title: "STEP 1",
        subtitle: "Create an Account and Login",
        theme: "light",
        align: "left",
        content: {
            image: [
                {
                    url: "",
                    alt: "",
                    caption: "",
                }
            ],

            button: [
                {
                    // type: "clip",
                    caption:"LOGIN",
                    url: "/",
                    color: "success"
                    // size:""

                },
                {
                    // type: "clip",
                    caption:"CREATE ACCOUNT",
                    url: "/",
                    // size:""

                }
            ],

            text: [
                {
                    title: "Title",
                    content: 
                    "If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this.",

                },
                {
                    title: "Title",
                    content: 
                    "",

                },
                {
                    title: "Title",
                    content: 
                    "",

                }
            ]
        }
    },

    {
        type:"list",
        id: 2,
        title: "STEP 2",
        subtitle: "Choose an Counsiler",
        theme: "dark",
        align: "right",
        content: {
            container: [
                {
                    type: "normal",
                    title: "Most Rated Doctors",
                    results: experts_sample_list,
                }
            ],

            list: expert_service.getExperts(),

            button: [
                {
                    // type: "clip",
                    caption:"More Experts",
                    url: "/experts",
                    color: "warning"
                    // size:""

                }
            ],

            text: [
                {
                    title: "Title",
                    content: 
                    "If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this.",

                },
                {
                    title: "Title",
                    content: 
                    "",

                },
                {
                    title: "Title",
                    content: 
                    "",

                }
            ]
        }
    },

    {
        type:"default",
        title: "STEP 3",
        id: 3,
        subtitle: "Make an Appointment",
        theme: "light",
        align: "left",
        content: {
            image: [
                {
                    url: "",
                    alt: "",
                    caption: "",
                }
            ],

            button: [
                {
                    // type: "clip",
                    caption:"Watch",
                    url: "/",
                    color: "alternate"
                    // size:""

                },
            ],

            text: [
                {
                    title: "Title",
                    content: 
                    "If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this.",

                },
                {
                    title: "Title",
                    content: 
                    "",

                },
                {
                    title: "Title",
                    content: 
                    "",

                }
            ]
        }
    }
];

export const slides_list = [
    {
        title: "Mental Health",
        subtitle: "Nothing",
        content: "Something Something",
        image: ""
    }
];


export const special_card_list = [
    {
        title: "Start Process",
        content: "Be a memebr, go through the process and improve mental health.",
        url: "Tutorial",
        icon: "fas fa-play-circle"
    },
    {
        title: "View Articles",
        content: "Previous tests and articles on Mental Health.",
        url: "",
        icon: "far fa-newspaper"
    },
    {
        title: "Direct Booking",
        content: "Make an appointment with Experts.",
        url: "",
        icon: "fas fa-hands-helping"
    },
    {
        title: "Community Chat",
        content: "Get more help from Experts, individuals and community.",
        url: "",
        icon: "fab fa-searchengin" 
    }
]



// ABOUT US PAGE ===============================================================================================================================

export const about_content = [

    {
        type:"sm1",
        title: "OUR Service",
        subtitle: "",
        theme: "light",
        align: "left",
        content: {
            image: [
                {
                    url: "",
                    alt: "",
                    caption: "",
                }
            ],

            button: [
                
            ],

            text: [
                {
                    title: "Title",
                    content: 
                    "If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this.",

                },
                {
                    title: "Title",
                    content: 
                    "",

                },
                {
                    title: "Title",
                    content: 
                    "",

                }
            ]
        }
    },

    {
        type:"sm1",
        title: "OUR TEAM",
        subtitle: "",
        theme: "dark",
        align: "right",
        content: {
            image: [
                {
                    url: "",
                    alt: "",
                    caption: "",
                }
            ],

            button: [
                
            ],

            text: [
                {
                    title: "Title",
                    content: 
                    "If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this.",

                },
                {
                    title: "Title",
                    content: 
                    "",

                },
                {
                    title: "Title",
                    content: 
                    "",

                }
            ]
        }
    },

    {
        type:"sm1",
        title: "In Future",
        subtitle: "",
        theme: "light",
        align: "left",
        content: {
            image: [
                {
                    url: "",
                    alt: "",
                    caption: "",
                }
            ],

            button: [
                
            ],

            text: [
                {
                    title: "Title",
                    content: 
                    "If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this.",

                },
                {
                    title: "Title",
                    content: 
                    "",

                },
                {
                    title: "Title",
                    content: 
                    "",

                }
            ]
        }
    }

    
];

// CONTACT US PAGE ===============================================================================================================================

export const contact_content = [

    {
        type:"sm1",
        title: "Why Contact?",
        subtitle: "",
        theme: "light",
        align: "left",
        content: {
            image: [
                {
                    url: "",
                    alt: "",
                    caption: "",
                }
            ],

            button: [
                
            ],

            text: [
                {
                    title: "Title",
                    content: 
                    "If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this.",

                },
                {
                    title: "Title",
                    content: 
                    "",

                },
                {
                    title: "Title",
                    content: 
                    "",

                }
            ]
        }
    },

    {
        type:"sm1",
        title: "How to Contact?",
        subtitle: "",
        theme: "dark",
        align: "right",
        content: {
            image: [
                {
                    url: "",
                    alt: "",
                    caption: ["GGGHHHH ",<strong>This Text</strong>, " HIJL"],
                }
            ],

            button: [
                {
                    // type: "clip",
                    caption:"Send Email",
                    url: "/",
                    color: "success"
                    // size:""

                },
                {
                    // type: "clip",
                    caption:"Fill Form",
                    url: "/",
                    color: "alternate"
                    // size:""

                }
            ],

            text: [
                {
                    title: "Title",
                    content: 
                    "If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this. If your image is located somewhere online, you can set the background image of your element by placing the URL like this.",

                },
                {
                    title: "Title",
                    content: 
                    "",

                },
                {
                    title: "Title",
                    content: 
                    "",

                }
            ]
        }
    }
    
];


export const errors_list = [
    {status: 400, error: "Bad Request", content: "The page request is invalid."},
    {status: 401, error: "Page is Unauthorized", content: "You need to get authorization get accesed to this page."},
    {status: 403, error: "Page is Forbidden", content: "The page you requested is only for authorized users."},
    {status: 404, error: "Page Not Found", content: "The page you requested is not available right now. Try again later."},
    {status: 408, error: "Request Time out", content: "This Page is not responding. Get help."},
    {status: 500, error: "Server Error", content: "Server Error occured. Try again or contact and get help."}
]






