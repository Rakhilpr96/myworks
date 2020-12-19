const skills = [
    "html",
    "css",
    "javascript",
    "ES6",
    "python",
    "dart",
    "bootstrap",
    "node.js",
    "express",
    "django",
    "flask",
    "git",
    "sql",
    "mongodb",
    "flutter",
    "react native",
    "yolo v3 - object detection",
    "opencv"
]

document.getElementById("skill").innerHTML = skills.map((item) => (
    "<div class='d-flex flex-row mt-1'>" +
    "<img src='./asset/icons/arrow_right_solid.svg' width='23px' height='23px' alt='>'>" +
    "<div id='skill' class='skill-text'>" + item + "</div>" +
    "</div>"
)).join('');


const projects = [
    {
        project_title: "Crowd Detection in Trains",
        description: "Developed a stand-alone system for crowd detection in trains with machine learning (YOLO v3)  and a webapp showing density of human passengers. The system transfered data via IOT. Raspberry Pi was used as the development platform and onboard image processing was done. The webapp was developed using Django",
        url_title: '',
        url: ''
    },
    {
        project_title: "Face detection and Recognition",
        description: "Developed a face detection and recognition model using openCV and Python . The model follows Local Binary Pattern Histogram",
        url_title: '',
        url: ''
    },
    {
        project_title: "Website template",
        description: "Designed a responsive website template from scratch using HTML, CSS & Bootstrap",
        url_title: 'URL : ',
        url: 'https://rakhilpr96.github.io/myworks/Website%201/'
    },
    {
        project_title: "Mobile App UI",
        description: "Designed a responsive mobile app User Interface using React Native",
        url_title: '',
        url: ''
    },

]

document.getElementById("project").innerHTML = projects.map((item) => (
    '<div class="mb-5">' +
    '<div class="d-flex flex-row align-items-center">' +
    '<div style="font-size: 22px;" class="material-icons">build_circle</div>' +
    '<div class="project-title">' + item.project_title + '</div>' +
    '</div>' +
    '<div class="project-description mt-2">' + item.description + '</div>' +
    '<div class="project-description mt-1 url-title">' + item.url_title + '<a class="project-url" target="_blank" href=' + item.url + '>' + item.url + '</a>' + '</div>' +
    '</div>'
)).join('');