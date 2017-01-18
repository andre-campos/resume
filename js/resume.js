var app = angular.module('ng-resume', []);
app.controller('ResumeCtrl', function($scope) {
    var resume = {}
    var info = {
        name: "André",
        lastName: "Campos",
        email: "drickcanada@gmail.com",
        mobile: "+55 92 99159-0537"
    };
    info.address = {
        street: "Av. Cel. Teixeira, 8197 Ap 603A",
        city: "Manaus, AM",
        country: "Brazil",
        zip: "69037-473"
    };
    info.stackOverflow = 323807;
    info.gitHub = "andre-campos";
    info.facebook = "andre.n.campos";
    info.linkedin = "andrencampos";
    info.photoUrl = "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/00d/39b/267fc2f.jpg";
    info.bio = "André was born in Brazil and moved to Canada for his undergraduate studies at UVic. After returning home to Manaus, André finished a Masters Degree while battling cancer. Then, he designed and built the software that runs his family's international commerce business while doing some external consulting work. After taking the Stanford Ignite program on entrepreneurship, André decided to turn the international commerce platform into an actual business.";
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
        title: "MSc, CS",
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
        title: "Work Experience",
        items: []
    };

    item = {
        title: "Founder & CEO",
        company: "Sigraweb",
        location: "Manaus, AM Brazil",
        from: "01/2016",
        to: "Present"
    };
    item.url = "http://www.sigraweb.com";
    item.duties = [];
    item.duties.push("Designed an online application hosted on MS Azure for brazilian international commerce operations");
    item.duties.push("Created a business plan and pitched it to investors");
        
    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "AngularJS",
    });
    item.skills.push({
        proficiency: "high",
        name: "Spring"
    });
   
    item.skills.push({
        proficiency: "high",
        name: "MS SQL Server"
    });
    item.skills.push({
        proficiency: "high",
        name: "Azure"
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
        to: "Present"
    };
    item.url = "http://www.finisce.com.br";
    item.duties = [];
    item.duties.push("Designed an online financial planning platform");
    
    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "AngularJS",
    });
    item.skills.push({
        proficiency: "high",
        name: "Spring"
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
        title: "IT Director",
        company: "Reck Aduaneira da Amazônia",
        location: "Manaus, AM Brazil",
        from: "01/2009",
        to: "Present"
    };
    item.url = "http://www.reckaduaneira.com.br";
    item.duties = [];
    item.duties.push("Designed a mission-critical application integrated to the brazilian international commerce systems (SISCOMEX)");
    item.duties.push("Designed a customer-facing website for interaction with clients");
    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "AngularJS",
    });
    item.skills.push({
        proficiency: "high",
        name: "Spring"
    });
    item.skills.push({
        proficiency: "high",
        name: "JSF"
    });
    item.skills.push({
        proficiency: "high",
        name: "PostgreSQL"
    });
    item.skills.push({
        proficiency: "high",
        name: "Jasper Reports"
    });
    item.skills.push({
        proficiency: "medium",
        name: "Perl"
    });
    item.skills.push({
        proficiency: "medium",
        name: "AutoIt"
    });
    resume.experience.items.push(item);
    item = {
        title: "Consultant",
        company: "Acao Investimentos",
        location: "Manaus, AM Brazil",
        from: "01/2009",
        to: "01/2015"
    };
    item.duties = [];
    item.duties.push("Designed a web-based CRM tailored to stock brokers that was deployed to 7 different offices across Brazil");
    item.skills = [];
    item.skills.push({
        proficiency: "high",
        name: "Spring"
    });
    item.skills.push({
        proficiency: "high",
        name: "JSF"
    });
    item.skills.push({
        proficiency: "high",
        name: "PostgreSQL"
    });
    item.skills.push({
        proficiency: "high",
        name: "Jasper Reports"
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
    item.url = "http://www.fucapi.br";
    item.duties = [];
    item.duties.push("Joined a team that built a set-top box (Brazilian DTV standard) from scratch, based on the ST7100 platform");
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
        proficiency: "medium",
        name: "Crystal Reports"
    });
    item.skills.push({
        proficiency: "low",
        name: "C#"
    });
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
    item.duties.push("Developed Linux device drivers for ATMs and an implementation of the brazilian electoral system");
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
    resume.experience.items.push(item);


    resume.volunteerWork = [];
    item = {
        title: "Proud member",
        institution: "Barraca do Bixiga",
        location: "Manaus, AM Brasil",
        from: "2011",
        to: "present"
    };
    item.details = [];
    item.details.push("Works as an obnoxious waiter serving pizza for thousands of customers; all profit goes to the <a href='www.manaus.apaebrasil.org.br'>APAE</a> Foundation");
    resume.volunteerWork.push(item);
    item = {
        title: "Proud member",
        institution: "GACC-AM",
        location: "Manaus, AM Brasil",
        from: "11/2009",
        to: "11/2012",
        url: "http://gacc-am.blogspot.com.br/"
    };
    item.details = [];
    item.details.push("Created and organized a yearly event called <strong>Don't bend, don't break</strong>, which raised over BRL 100,000.00 towards GACC");
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
    item.details.push("Led fellow RA's during the organization of a wide range of fundraising activities across the UVic campus");
    item.details.push("Raised over $ 12,000 towards the United Way");
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
    resume.languages.push({
        name: "Spanish",
        level: "intermediate",
        stars: [true, true, true, false, false],
        country: 'es'
    });
    resume.languages.push({
        name: "German",
        level: "basic",
        stars: [true, false, false, false, false],
        country: 'de'
    });
    resume.interests = ["Soccer", "Traveling", "Cooking", "Guitar playing", "Fitness", "Jiu-jitsu", "Udacity courses"];
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
                element.addClass(star);
            });
        }
    }
};
app.directive('proficiency', ['$compile', fct]);