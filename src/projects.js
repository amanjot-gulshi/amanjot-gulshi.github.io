const projects = [
    {
        id: 1,
        title: "Design and Development of a Multi-Agent Mobile SLAM Platform",
        date: "September 2021 - April 2022",
        thumbnail: "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/crawler.PNG",
        images: [
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/crawler.PNG",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/live-view.PNG",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/depth-view.PNG",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/SIRC.png",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/SIRC-MAP.png"],
        videos: [
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/home_office_test.mp4"
        ],
        description: [
            "This was our final year Capstone project conducted under the supervision and guidance of Dr. Jaho Seo. The goal of this project was to designand develop a Multi-Agent Mobile Simultaneous Localisation and Mapping (SLAM) Platform that would allow for the exploration of unknownenvironments without putting the operators in danger. This includes collapsed or unstable buildings as well as any other kind of terrain.",
            "The design consists of a premade RC crawler, reduced suspension travel for flat ground testing, a Kinect 360 module for vision sensing anda Raspberry Pi 4 to control the robot. This is accompanied by 2 batteries; one for powering the computer and sensor, while the other powers the crawler's motors. The batteries and Raspberry Pi are enclosed in 3D printed boxes while the Kinect module is mounted to a custom 3D printed mount that allows for it to be securely snapped in. The batteries allow for a tetherless platform that is self-contained.",
            "The platform is operated using an RC remote which drives it around while it carries out its mapping functions. The Raspberry Pi 4 is runningRobotic Operating System (ROS) Noetic on Ubuntu 20.04 utilizing the libfreenect driver to interface with the Kinect 360 and the rtabmap_rosrospackage to perform the data recording and mapping. This library is using Real-Time Appearance-Based (RTAB) Mapping, which utilizes the RGB camera of the Kinect to take several images as the camera moves. The library then stitches all the images together in real-time.",
            "The goal is to have two separate platforms exploring an environment while carrying out mapping in their own individual areas, to come togetherat the end, and merge their separate maps together. This can be accomplished so long as both platforms have a common reference point that tiestheir maps together. A demonstration of which, can be seen using the external links below."
        ],
        links: [
            "https://drive.google.com/file/d/1VzBbWRcxWl64KOu5FOsnjSJZ6pDPDqfz/view?usp=sharing",
            "http://wiki.ros.org/rtabmap_ros",
            "http://wiki.ros.org/noetic/Installation"
        ],
        tags: ["Python", "ROS", "SLAM", "Mechatronics"]

    },
    {
        id: 2,
        title: "Foresight",
        date: "February 2020",
        thumbnail: "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/foresight1.png",
        images: [
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/foresight1.png",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/foresight2.png",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/foresight3.png"],
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
        title: "Development of a Robotic System for Rehabilitation of Musculoskeletal Disorder",
        date: "May 2018 - August 2018",
        thumbnail: "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/poster.png",
        images: [
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/poster.png",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/pose1.jpg",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/pose2.jpg",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/pose3.jpg"],
        videos: [
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/bilateral_test.mp4",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/Moving_Robot.mp4"],
        description: [
            "I worked on this project during my NSERC Undergraduate Research term in 2018 under the supervision of Dr. Carlos Rossa. The goal of this research project was to develop a system for the rehabilitation of musculoskeletal disorders in patients with the help of robotic arms. This allows for a two phase program for patients that starts off with therapy at a clinic with a programmed 6 Degree of Freedom (DOF) robotic arm and transitions toat-home therapy with a 3 DOF haptic controller that can be carried out with sessions over the internet with a physician.",
            "Development actually began with Phase 2 of the project where a patient and physician are able to communicate over the internet withtheir respective haptic controllers. We are using the Novint Falcon Haptic Controller with has 3 DOF and can provide a decent amount of force feedback to the user. In order to sync two controllers together such that they move in unison, bilateral teleoperation must be implemented. This is done by sending the position of the first controller to the second, and using inverse-kinematics to bring the end-effector of the second manipulator to the exact same position as the first, by way of Proportional Integral Derivative (PID) control. This can be seen in the video above.",
            "Once that was completed, controlling the 6 DOF arm was the next goal. Unfortunately, this could not be completed due to time constraints, but the experience I gained during this research term was most valuable and I thank Dr. Rossa for giving me the chance to work under him."
        ],
        links: [
            "https://shared.ontariotechu.ca/shared/department/research/documents/srs-2018/feas---hm---amanjot-gulshi.pdf",
            "https://biomechatronics.ca/team/#two"
        ],
        tags: ["C++", "ROS", "Robotics", "Simulation", "Research"]
    },
    {
        id: 4,
        title: "SurveyApp",
        date: "2023",
        thumbnail: "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/mine.png",
        images: [
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/mine.png",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/profile.png",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/registration.png",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/surveys.png",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/answers.png",
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/creating.png"
        ],
        videos: [
            "https://gitportfoliobucket.s3.us-east-2.amazonaws.com/SurveyApp+Demo.mp4"
        ],
        description: [
            "This project was to get better at working with a full stack application that incorporated back end development through Django and front end development using React. This application made use of Bootstrap as well as Redux for state management across the entire application.",
        ],
        links: [
            "https://github.com/amanjot-gulshi/SurveyApp",
        ],
        tags: ["JavaScript", "HTML5", "CSS3", "React", "SQL", "Django", "AWS S3"]
    },

];

export default projects;