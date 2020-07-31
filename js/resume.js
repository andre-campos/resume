var app = angular.module('ng-resume', []);
app.controller('ResumeCtrl', function($scope) {
    var resume = {}
    var info = {
        name: "André",
        lastName: "Campos",
        email: "drickcanada@gmail.com",
        mobile: "604-360-6018"
    };
    info.address = {
        street: "9-715 Tobruck Ave",
        city: "North Vancouver, BC",
        country: "Canada",
        zip: "V7P 1V9"
    };
    info.stackOverflow = 323807;
    info.gitHub = "andre-campos";
    info.facebook = "andre.n.campos";
    info.linkedin = "andrencampos";
    info.photoUrl = "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/00d/39b/267fc2f.jpg";
    info.bio = "André completed his undergrad at UVic and returned to his hometown, Manaus in 2007. He nearly moved to Europe for more education at ETH Zurich, but life threw a curve ball at him. Instead, he stayed in Manaus in order to battle cancer and completed a Masters program while doing that. He then created an application for customs clearance, which was first adopted by his family business. Inspired by the Stanford Ignite program, André turned that into a SaaS venture of its own. He decided to move back to Canada and reboot his career to join the gaming industry in 2017.";
    info.twitter = undefined;
    resume.info = info;
    resume.education = [];
    var item = {
        title: "Stanford Igniter",
        institution: "Stanford Graduate School of Business",
        location: "São Paulo, SP Brazil",
        from: "2015",
        logo: "http://www.stanford.edu/~diamondr/stanford_seal.png"
    }; //logo: "http://estruturas.ufam.edu.br/images/logoUFAMcor.jpg"};
    resume.education.push(item);
    item = {
        title: "MSc, Comp Sci",
        institution: "Federal University of Amazonas",
        location: "Manaus, AM Brazil",
        from: "2009",
        to: "2011",
        gpa: "10.0/10.0",
        logo: "ufam.jpeg"
    }; //logo: "http://estruturas.ufam.edu.br/images/logoUFAMcor.jpg"};
    resume.education.push(item);

    item = {
        title: "BEng, CEng",
        institution: "University of Victoria",
        location: "Victoria, BC Canada",
        from: "2002",
        to: "2007",
        gpa: "6.7/9.0",
        logo: "uvic_logo-vert.jpg"
    }; //logo: "https://media.licdn.com/mpr/mpr/shrink_60_60/p/5/005/081/376/1d6e87b.png"};
    resume.education.push(item);
    resume.experience = {
        title: "Selected Work Experience",
        items: []
    };

    item = {
        title: "Team Lead",
        company: "Demonware",
        location: "Vancouver, BC Canada",
        from: "11/2018",
        to: "present"
    };
    item.url = "https://www.demonware.net";
    item.duties = [];

    item.duties.push("Led a team of 10+ Engineers (devs and SREs) responsible for creating online features for Call of Duty: Modern Warfare and its free-to-play extension, Warzone");
    
    item.duties.push("Worked closely with Infinity Ward and High Moon Studios to scope out, prioritize, and deliver new services and C++ libraries to support cross-play for the first time in the history of the Call of Duty franchise");
    
    item.duties.push("Provided Infinity Ward with heroic launch support for both Modern Warfare and Warzone, which has been the most successful launch in Activision history");
    item.duties.push("Actively participated in planning and building out services in Kubernetes for the first time in Demonware history at a large scale");

    item.duties.push("Led efforts to reduce toxicity in the Call of Duty online community, from hands-on development of a new profanity filter and moderation tools to collaborating at a very high level with Infinity Ward production and Activision executives to set the direction for managing toxicity");

    item.duties.push("Perfomance: trending to become the only Team Lead to ever receive the maximum rating from his particular Director");
    

    item.skills = [];

    item.skills.push({
        proficiency: "high",
        name: "Python",
    });
    item.skills.push({
        proficiency: "high",
        name: "Kubernetes",
    });
    item.skills.push({
        proficiency: "high",
        name: "C++"
    });
    item.skills.push({
        proficiency: "high",
        name: "Project Management"
    });
    item.skills.push({
        proficiency: "high",
        name: "Leadership"
    });
 
    resume.experience.items.push(item);

    item = {
        title: "Software Engineer",
        company: "Demonware",
        location: "Vancouver, BC Canada",
        from: "11/2017",
        to: "11/2018"
    };
    item.url = "https://www.demonware.net";
    item.duties = [];

    item.duties.push("Led load testing efforts at unprecedented scale to push the boundaries of Demonware infrastructure in order to identify and mitigate performance bottlenecks for Call of Duty: Black Ops IIII");

    item.duties.push("Built scripts for analyzing and planning hardware allocation and to provision significant portions of the virtualized infrastructure behind the online services of Call of Duty: Black Ops IIII");

    item.duties.push("Developed features used by millions of Call of Duty players worldwide");
    item.duties.push("Provided Call of Duty studios with excellent technical support of Demonware's tech");

    item.duties.push("Performance: trending towards maximum rating before Team Lead promotion");


    item.skills = [];

    item.skills.push({
        proficiency: "high",
        name: "Python",
    });
    item.skills.push({
        proficiency: "high",
        name: "Docker",
    });
    item.skills.push({
        proficiency: "high",
        name: "C++"
    });
    item.skills.push({
        proficiency: "high",
        name: "MySQL"
    });
    item.skills.push({
        proficiency: "high",
        name: "GitHub"
    });
 
    resume.experience.items.push(item);


    item = {
        title: "Founder & CEO",
        company: "Sigraweb",
        location: "Manaus, AM Brazil",
        from: "01/2016",
        to: "09/2017"
    };
    item.url = "http://www.sigraweb.com";
    item.duties = [];

    item.duties.push("Led a team of one software developer and one business specialist in the process of designing and shipping a SaaS product targeted at international commerce players, such as customs brokers and manufacturing plants");
    item.duties.push("The platform was launched in January, 2017 and currently has 4 corporate clients, about 350 active users, and generates monthly revenue of 25k BRL");

    item.skills = [];

    item.skills.push({
        proficiency: "high",
        name: "AngularJS",
    });
    
    item.skills.push({
        proficiency: "high",
        name: "Java (Spring + Hibernate)"
    });
    item.skills.push({
        proficiency: "high",
        name: "MS SQL Server"
    });
    item.skills.push({
        proficiency: "high",
        name: "MS Azure"
    });
    item.skills.push({
        proficiency: "high",
        name: "Project Management"
    });
    item.skills.push({
        proficiency: "high",
        name: "Leadership"
    });

    resume.experience.items.push(item);
    
    item = {
        title: "IT Director",
        company: "Reck Aduaneira da Amazônia",
        location: "Manaus, AM Brazil",
        from: "01/2009",
        to: "09/2017"
    };
    item.url = "http://www.reckaduaneira.com.br";
    item.duties = [];
    item.duties.push("Designed a mission-critical application integrated to the Brazilian international commerce systems (SISCOMEX)");
    item.duties.push("By providing users with an extensive set of automated agents and a well-thought-out user experience, the platform helped Reck Aduaneira reduce the operational errors by 30% and the after hours by 40%");

    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "AngularJS",
    });
    item.skills.push({
        proficiency: "high",
        name: "Java (Spring + Hibernate)"
    });
    item.skills.push({
        proficiency: "high",
        name: "PostgreSQL"
    });
    item.skills.push({
        proficiency: "high",
        name: "Leadership"
    });
    resume.experience.items.push(item);

    item = {
        title: "Consultant",
        company: "Finis Consultoria Econômica",
        location: "Manaus, AM Brazil",
        from: "07/2015",
        to: "01/2017"
    };
    item.hide = true;
    item.url = "http://www.finisce.com.br";
    item.duties = [];
    item.duties.push("Designed an online financial planning platform");

    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "Angular",
    });
    item.skills.push({
        proficiency: "high",
        name: "Javascript",
    });
    item.skills.push({
        proficiency: "high",
        name: "Java"
    });
    item.skills.push({
        proficiency: "high",
        name: "Spring"
    });
    item.skills.push({
        proficiency: "high",
        name: "Hibernate"
    });
    item.skills.push({
        proficiency: "high",
        name: "PostgreSQL"
    });
    item.skills.push({
        proficiency: "high",
        name: "Heroku"
    });
    resume.experience.items.push(item);


    item = {
        title: "Consultant",
        company: "Acao Investimentos",
        location: "Manaus, AM Brazil",
        from: "01/2009",
        to: "01/2015"
    };
    item.hide = true;
    item.duties = [];
    item.duties.push("Designed a web-based CRM tailored to stock brokers that was deployed to 7 different offices across Brazil");
    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "Java"
    });
    item.skills.push({
        proficiency: "high",
        name: "PostgreSQL"
    });
    item.skills.push({
        proficiency: "high",
        name: "BI"
    });
    item.skills.push({
        proficiency: "low",
        name: "Asterisk"
    });
    resume.experience.items.push(item);
    item = {
        title: "Software Developer",
        company: "Fucapi",
        location: "Manaus, AM Brazil",
        from: "01/2008",
        to: "12/2008"
    };
    item.hide = true;
    item.url = "http://www.fucapi.br";
    item.duties = [];
    item.duties.push("Actively participated on the design and implementation of a set-top box (Brazilian Digital TV standard) based on the ST7100 platform");
    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "Linux"
    });
    item.skills.push({
        proficiency: "medium",
        name: "device drivers"
    });
    item.skills.push({
        proficiency: "medium",
        name: "C"
    });
    resume.experience.items.push(item);
    item = {
        title: "Part-time Developer",
        company: "Internet Shakespeare Editions",
        location: "Manaus, AM Brazil",
        from: "01/2007",
        to: "08/2007"
    };
    item.url = "http://ise.uvic.ca";
    item.duties = [];
    item.duties.push("Fixed bugs and delivered new features on the website.");
    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "PostgreSQL"
    });
    item.skills.push({
        proficiency: "low",
        name: "PHP"
    });
    item.skills.push({
        proficiency: "low",
        name: "Apache Cocoon"
    });
    item.hide = true;
    resume.experience.items.push(item);
    item = {
        title: "Software Developer (Co-op)",
        company: "Business Objects (now SAP)",
        location: "Vancouver, BC Canada",
        from: "01/2006",
        to: "12/2006"
    };
    item.url = "http://www.sap.com";
    item.duties = [];
    item.duties.push("Joined the tools team on the development of new features for the Crystal Reports plugin for Eclipse and MS Visual Studio");
    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "Java"
    });
    item.skills.push({
        proficiency: "high",
        name: "Crystal Reports"
    });
    item.skills.push({
        proficiency: "low",
        name: "C#"
    });
    item.hide = true;
    resume.experience.items.push(item);

    item = {
        title: "Java Programmer (Co-op)",
        company: "Pearson Coal Petrography",
        location: "Victoria, BC Canada",
        from: "09/2004 to 12/2004 and from 05/2005",
        to: "08/2005"
    };
    item.url = "http://www.coalpetrography.com";
    item.duties = [];
    item.duties.push("Helped to build a web-based, customer-facing system to publish coal analysis results");
    item.duties.push("Developed interface modules between a PC and an automated petrographic analysis apparatus");
    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "Java"
    });
    item.skills.push({
        proficiency: "low",
        name: "Apache Struts"
    });
    item.skills.push({
        proficiency: "low",
        name: "JBoss Application Server"
    });
    item.skills.push({
        proficiency: "low",
        name: "C++"
    });

    item.hide = true;
    resume.experience.items.push(item);
    item = {
        title: "Application Developer (Co-op)",
        company: "Keen Edge Solutions",
        location: "Victoria, BC Canada",
        from: "01/2004",
        to: "04/2004"
    };
    item.duties = [];
    item.duties.push("Helped to create applications for several clients, from websites to GIS applications");
    item.skills = [];
    item.skills.push({
        proficiency: "low",
        name: "PHP"
    });
    item.skills.push({
        proficiency: "low",
        name: "Visual Basic"
    });
    item.skills.push({
        proficiency: "low",
        name: "Map Point"
    });
    item.hide = true;
    resume.experience.items.push(item);
    item = {
        title: "Residence Advisor",
        company: "University of Victoria Residences",
        location: "Victoria, BC Canada",
        from: "08/2003",
        to: "12/2005"
    };
    item.duties = [];
    item.duties.push("Helped to create a safe and welcoming environment at UVic Residences");
    item.skills = [];
    item.skills.push({
        proficiency: "medium",
        name: "Leadership"
    });
    item.skills.push({
        proficiency: "medium",
        name: "Team-work"
    })
    item.hide = true;
    resume.experience.items.push(item);

    item = {
        title: "Trainee",
        company: "Fucapi",
        location: "Manaus, AM Brazil",
        from: "01/2001 to 08/2002 and from 05/2003",
        to: "08/2003"
    };
    item.url = "http://www.fucapi.br";
    item.duties = [];
    item.duties.push("Developed J2ME applications for Nokia devices");
    item.duties.push("Developed Linux device drivers for ATMs and an implementation of the Brazilian electoral system");
    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "Java"
    });
    item.skills.push({
        proficiency: "medium",
        name: "J2ME"
    });
    item.skills.push({
        proficiency: "high",
        name: "Linux"
    });
    item.skills.push({
        proficiency: "medium",
        name: "device drivers"
    });
    item.hide = true;
    resume.experience.items.push(item);


    resume.volunteerWork = [];
    item = {
        title: "Former member",
        institution: "Barraca do Bixiga",
        location: "Manaus, AM Brasil",
        from: "2011",
        to: "present"
    };
    item.details = [];
    item.details.push("Worked as an obnoxious waiter serving pizza and beer in benefit of the <a href='www.manaus.apaebrasil.org.br'>APAE</a> Foundation");
    resume.volunteerWork.push(item);
    item = {
        title: "Former member",
        institution: "GACC-AM",
        location: "Manaus, AM Brasil",
        from: "11/2009",
        to: "11/2012",
        url: "http://gacc-am.blogspot.com.br/"
    };
    item.details = [];
    item.details.push("Created and organized a yearly event called <strong>Don't bend, don't break</strong>, which raised over BRL 100k towards GACC");
    resume.volunteerWork.push(item);
    item = {
        title: "Founder",
        institution: "RA's 4 Good",
        location: "Victoria, BC Canada",
        from: "08/2003",
        to: "12/2005",
        url: "http://communications.uvic.ca/releases/makepdf.php?type=release&display=release&id=719"
    };
    item.details = [];
    item.details.push("Organized fundraising activities and raised over CAD 12k for United Way");

    resume.volunteerWork.push(item);

    resume.awards = {
        title: "Awards and Honors",
        items: []
    };
    resume.awards.items.push({
        title: "Blue and Gold Awards (for academic achievements and community contributions)",
        date: "04/2006"
    });
    resume.awards.items.push({
        title: "Second Year McGeer Scholarship (for academic performance, qualities of leadership and demonstrated work experience)",
        date: "12/2003"
    });
    resume.publications = [];
    resume.publications.push({
        title: "",
        journal: "",
        date: ""
    });
    resume.languages = [];
    resume.languages.push({
        name: "Portuguese",
        level: "native",
        stars: [true, true, true, true, true],
        country: 'br'
    });
    resume.languages.push({
        name: "English",
        level: "fluent",
        stars: [true, true, true, true, true],
        country: 'ca'
    });
 
    resume.interests = ["Family", "Soccer", "Traveling", "Cooking", "Music", "Udacity courses"];
    resume.references = "Excellent references available upon request";
    $scope.resume = resume;
});
var fct = function($compile) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$watch(attributes.proficiency, function(newValue, oldValue, scope) {
                var p = newValue;
                if (!p)
                    return;
                var c = 'label-default';
                var star = 'fa fa-star-o';
                if (p === 'high') {
                    c = 'label-success';
                    star = 'fa fa-star';
                } else if (p === 'medium') {
                    c = 'label-info';
                    star = 'fa fa-star-half-o';
                }
                element.addClass(c);
                // element.addClass(star);
            });
        }
    }
};
app.directive('proficiency', ['$compile', fct]);
