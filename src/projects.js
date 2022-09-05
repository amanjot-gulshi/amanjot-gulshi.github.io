const projects = [
    {
        id: 1,
        title: "Design and Development of a Multi-Agent Mobile SLAM Platform",
        date: "September 2021 - April 2022",
        thumbnail: "crawler.PNG",
        images: ["crawler.PNG", "live-view.PNG", "depth-view.PNG", "SIRC.png", "SIRC-MAP.png"],
        videos: [
            "home_office_test.mp4"
        ],
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        links: ["https://drive.google.com/file/d/1VzBbWRcxWl64KOu5FOsnjSJZ6pDPDqfz/view?usp=sharing"],
        tags: ["Python", "ROS", "SLAM", "Mechatronics"]

    },
    {
        id: 2,
        title: "Foresight",
        date: "February 2020",
        thumbnail: "foresight1.png",
        images: ["foresight1.png", "foresight2.png", "foresight3.png"],
        videos: [],
        description: [
            "This device uses the Google Cloud Vision and Text To Speech APIs to identify obstacles in the path of someone using the device. Foresight is intended to be worn as a guide for the visually impaired so that they can feel safer travelling on their own withoutthe need of a caretaker or a white cane.For the 2020 MakeUofT Make-a-thon competion, my team and I had 24 hours to come up with a project to be judged at the end of the time limit.",
            "The first 12 hours went by quickly as we were scrambling to come up with a project idea that would make use of all the components we had at our disposal. One idea was a posture monitor that would use the webcam of a user to monitor their posture by observing their pose. This idea was scrapped because due to the unfeasibility of creating a pose recognition model without much experiencein the given time.",
            "Once we came upon the idea of a wearable tech visual aid device, we gathered the components require to make such a project. This included a camera for vision, ultrasonic sensor for distance and a raspberry pi for computing it all. We looked through Google's Cloud API for object recognition model to detect obstacles such as chairs and tables as a text-to-speech API to audibly let the wearer know of incoming obstacles.",
            "The final product would allow the device to detect obstacles, calculate their distance and direction from the user, and let them know where the obstacle is relative to them so that they may avoid a potential collision. In the end, we didn't win any prizes but the experience of rapidly generating ideas and bringing them to life will always stick with me."
        ],
        links: ["https://devpost.com/software/foresight-0v7h8u"],
        tags: ["Python", "Google-API", "UofT", "Computer Vision", "Cloud"]
    },
    {
        id: 3,
        title: "Rehabilitation of Musculoskeletal Disorder",
        date: "May 2018 - August 2018",
        thumbnail: "poster.png",
        images: ["poster.png", "pose1.jpg", "pose2.jpg", "pose3.jpg"],
        videos: ["bilateral_test.mp4", "Moving_Robot.mp4"],
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        links: [
            "https://shared.ontariotechu.ca/shared/department/research/documents/srs-2018/feas---hm---amanjot-gulshi.pdf",
            "https://biomechatronics.ca/team/#two"
        ],
        tags: ["C++", "ROS", "Robotics", "Simulation", "Research"]
    },

];

export default projects;