/*
This is empty on purpose! Your code to build the resume will go here.
 */

//  $("#main").append("Quin");

// var awesomeThoughts = "I am Quin and I am AWESOME!!!!!";
// var newThought = awesomeThoughts.replace("AWESOME","BLOOD");

// console.log(awesomeThoughts);
// console.log(newThought);

// $("#main").append(newThought);

//_____________________________________________________________

// var role = "Sr. Real Estate & Construction Manager";
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);

// var name = "Quin Gelfand";
// var formattedName = HTMLheaderName.replace("%data%", name);
// $("#header").prepend(formattedName);
//____________________________________________________________

// original = String("audacity");
// replacement = String("U");
// update = replacement + original.slice(2);

// var formattedName = HTMLheaderName.replace("%data%", update);

// $("#header").prepend(formattedName);
//________________________________________________________
// var s = "audacity";

// var udacityizer = function(s) {  
//     // Right now, the variable s === "audacity"
//     // Manipulate s to make it equal to "Udacity"
//     // Your code goes here!
//     s = "U" + s.slice(2);

//     return s;
// };

// // Did your code work? The line below will tell you!
// console.log(udacityizer(s));

//_________________________________________________________
// var name = "albERt EINstEiN";

// function nameChanger(oldName) {
//     var finalName = oldName;

//     // Your code goes here!
//     var theSpace = oldName.indexOf(" ");
//     var firstInitial = oldName[0].toUpperCase();
//     var firstName = firstInitial + oldName.slice(1,theSpace).toLowerCase();
//     var lastName = oldName.slice(theSpace).toUpperCase();
//     finalName = firstName + lastName;


//     // Don't delete this line!
//     return finalName;
// }

// // Did your code work? The line below will tell you!

// console.log(nameChanger(name));

// //______output result from function_____________________________________________________
// var work = {
//   "jobs": [
//     {
//       "employer": "Udacity",
//       "title": "Course Developer",
//       "location": "Mountain View, CA",
//       "dates": "Feb 2014 - Current",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     },
//     {
//       "employer": "LearnBIG",
//       "title": "Software Engineer",
//       "location": "Seattle, WA",
//       "dates": "May 2013 - Jan 2014",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     },
//     {
//       "employer": "LEAD Academy Charter High School",
//       "title": "Science Teacher",
//       "location": "Nashville, TN",
//       "dates": "Jul 2012 - May 2013",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     },
//     {
//       "employer": "Stratford High School",
//       "title": "Science Teacher",
//       "location": "Nashville, TN",
//       "dates": "Jun 2009 - Jun 2012",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     }
//   ]
// };

// // Your code goes here! Let me help you get started

// function locationizer(work_obj) {
// 	var locationsToProcess = [];

// 	for (i in work_obj.jobs) {
// 		var job = work_obj.jobs[i].location;
// 		america.push(job);
// 	}
// 	return locationsToProcess;
// }

// // Did locationizer() work? This line will tell you!
// console.log(locationizer(work));

// //_______slice strings________________________________________

// var inName = function(name) {
// 	name = name.trim().split(" ");
// 	var first_name = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	var second_name = mame[1].toUpperCase();
// 	var internationalName = first_name + " " + second_name;
// 	return internationalName;
// }

// $("#main").append(internationalizeButton);
// //___________________________________________________________

var bio = {
    "name": "Quin Gelfand",
    "role": "Web Developer",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "gelfand@meh.com",
        "github": "qgelfand",
        "twitter": "@notReal",
        "location": "Denver, CO"
    },
    "bioPic": "images/heythere.jpg",
    "welcomeMessage": '"The most basic of resume sites" -- Me',
    "skills": [
        "botany",
        "animal husbandry",
        "cupcake-fashioning",
        "watching the 'television'"
    ]
};
bio.display = function() {

    var headerName;
    var headerRole;
    var headerMobile;
    var headerEmail;
    var headerGitHub;
    var headerTwitter;
    var headerLocation;
    var bioPic;
    var welcomeMsg;
    var item;

    headerName = HTMLheaderName.replace("%data%", bio.name);
    headerRole = HTMLheaderRole.replace("%data%", bio.role);
    headerMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    headerEmail = HTMLemail.replace("%data%", bio.contacts.email);
    headerGitHub = HTMLgithub.replace("%data%", bio.contacts.headerGitHub);
    headerTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    headerLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(headerName + headerRole);
    $("#topContacts").append(headerMobile + headerEmail + headerGitHub + headerTwitter + headerLocation);
    $("#header").append(bioPic + welcomeMsg);
    $("#footerContacts").append(headerMobile + headerEmail + headerGitHub + headerTwitter + headerLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill;
        for (item in bio.skills) {
            if (bio.skills.hasOwnProperty(item)) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var work = {
    "jobs": [{
        "employer": "AT&T",
        "title": "Sr. Real Estate & Construction Manager",
        "location": "Denver, CO",
        "dates": "Oct 2013 - present",
        "description": "Managed construction of in-building DAS systems in Rocky Mountain Region. Responsible for financial, administrative, compliance, feasibility, installation, test & turn-up aspects of each project. Successfully launched an average of 26 projects per year with an annual budget of $2MM+.  Self-performed many functions normally contracted, saving AT&T average of $7,000 per project (beginning in 2015)."
    }, {
        "employer": "AT&T",
        "title": "Sr. Specialist RAN Engineer",
        "location": "Dallas TX",
        "dates": "March 2012 - Oct 2013",
        "description": "Monitored UMTS & LTE networks in real-time. Experience with resolving executive escalations, customer complaints via walk & drive testing, and external interference hunting. RAN Performance acute offender classification & troubleshooting. UMTS Bronze, Silver & LTE Bronze, Silver certified."
    }, {
        "employer": "AT&T",
        "title": "Sr. Specialist Network Planning Engineer",
        "location": "Dallas, TX",
        "dates": "June 2010 - March 2012",
        "description": "DCS/MSN Equipment Manager, annual budget of $8.5M+.  Saved AT&T $2.5M in 2011 through equipment re-use.  Organized removal of active & obsolete DCS in Lacy MTSO."
    }]
};

work.display = function() {

    var empl;
    var title;
    var dates;
    var location;
    var description;
    var item;

    for (item in work.jobs) {
        if (work.jobs.hasOwnProperty(item)) {
            // console.log(item);
            $("#workExperience").append(HTMLworkStart);
	        empl = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
            title = HTMLworkTitle.replace("%data%", work.jobs[item].title);
            dates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
            location = HTMLworkLocation.replace("%data%", work.jobs[item].location);
            description = HTMLworkDescription.replace("%data%", work.jobs[item].description);
            $(".work-entry:last").append(empl + title);
            $(".work-entry:last").append(dates + location);
            $(".work-entry:last").append(description);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "2015",
        "description": "Learned basics of HTML & CSS by creating a custom portfolio website",
        "images": [{
            "title": "img2",
            "url": "images/197x148.gif"
        }]
    }, {
        "title": "Version-Control",
        "dates": "2015",
        "description": "Learned principles of version control using Git and GitHub",
        "images": [{
            "title": "img1",
            "url": "images/otters.jpg"
        }]
    }, {
        "title": "Resume",
        "dates": "2015",
        "description": "Created resume using JSON, HTML and CSS",
        "images": [{
            "title": "img2",
            "url": "images/bees.png"
        }]
    }]
};

projects.display = function() {

    var projectTitle = "";
    var projectDates = "";
    var projectDescription = "";
    var projectImage = "";
    var item;
    var img;

    for (item in projects.projects) {
        if (projects.projects.hasOwnProperty(item)) {
            $("#projects").append(HTMLprojectStart);
            projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
            $(".project-entry:last").append(projectTitle);
            projectDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
            $(".project-entry:last").append(projectDates);
            projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
            $(".project-entry:last").append(projectDescription);
            // console.log(projects.projects[num].images.length);
            if (projects.projects[item].images.length > 0) {
                for (img in projects.projects[item].images) {
                    if (projects.projects[item].images.hasOwnProperty(img)) {
                        projectImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[img].url);
                        $(".project-entry:last").append(projectImage);
                    }
                }
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Purdue",
        "location": "West Lafayette, IN",
        "degree": "Bachelors of Science",
        "majors": [
            "Electrical & Computer Engineering Technology",
            "Organizational Leadership & Supervision"
        ],
        "dates": 2009,
        "url": "www.purdue.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Development",
        "school": "uDacity",
        "date": 2015,
        "url": "www.udacity.com"
    }, {
        "title": "JavaScript Basics",
        "school": "uDacity",
        "date": 2015,
        "url": "www.udacity.com"
    }]
};

education.display = function() {

    var schoolName;
    var schoolDates;
    var schoolLocation;
    var schoolMajor;
    var schoolDegree;
    var onlineTitle;
    var onlineSchool;
    var onlineDates;
    var onlineURL;
    var item;
    var i;

    for (item in education.schools) {
        if (education.schools.hasOwnProperty(item)) {
            $("#education").append(HTMLschoolStart);
            schoolName = HTMLschoolName.replace("%data%", education.schools[item].name);
            schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
            $(".education-entry").append(schoolName + schoolDegree);
            schoolDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
            $(".education-entry").append(schoolDates);
            schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
            $(".education-entry").append(schoolLocation);

            if (education.schools[item].majors.length > 0) {
                for (i in education.schools[item].majors) {
                    if (education.schools[item].majors.hasOwnProperty(i)) {
                        schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[item].majors[i]);
                        $(".education-entry").append(schoolMajor);
                    }
                }
            }
        }
    }
    if (education.onlineCourses.length > 0) {
        $(".education-entry").append("<br></br>" + HTMLonlineClasses);
        for (item in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(item)) {
                onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
                onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
                $(".education-entry").append(onlineTitle + onlineSchool);
                onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].date);
                $(".education-entry").append(onlineDates);
                onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[item].url);
                $(".education-entry").append(onlineURL);
            }
        }
    }
};

//display functions called//
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);