var app = angular.module('ng-resume', []);
app.controller('ResumeCtrl', function($scope) {
        var resume = {}
        var info = {
                name: "Igor",
                lastName: "Borborema Correia",
                email: "igorborborema@gmail.com",
                mobile: "+55 92 9 8118 1887"
        };
        info.address = {
                street: "Av. Senador Alvaro Maia",
                city: "Manaus-AM",
                country: "Brazil",
                zip: "69020-210"
        };
        info.stackOverflow = 323807;
        info.gitHub = "igor-borborema-correia";
        info.facebook = "igor.borboremacorreia";
        info.linkedin = "igorborborema";
        info.photoUrl = "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJ8AAAAJDgxMDRkNTE5LWMzMWItNDgwZC04YzkzLTExMzNhOTg5MjI5Ng.jpg";
        info.bio = "Especialist pos-graduated in Interaction Design.The last years I have been designing experiences. My experince includes planning research opportunities, investigate user behavior regarding new concepts, analyse user experience regarding new products, collect and report findings/suggestions.";
        info.twitter = undefined;
        resume.info = info;
        resume.education = [];
        var item = {
                title: "Interaction Design",
                type: "Post-Graduation",
                institution: "Fucapi",
                location: "Manaus",
                from: "2014",
                to: "2015",
                logo: "http://www.fucapi.br/wp-content/themes/fucapibr/images/logo.png"
        }; //logo: "http://estruturas.ufam.edu.br/images/logoUFAMcor.jpg"};
        resume.education.push(item);
        item = {
                title: "Business Administration",
                type: "Post-Graduation",
                institution: "FGV",
                location: "Campinas",
                from: "2006",
                to: "2008",
                logo: "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0024/7643/brand.gif?itok=u678QLXL"
        }; //logo: "http://estruturas.ufam.edu.br/images/logoUFAMcor.jpg"};
        resume.education.push(item);
        item = {
                title: "Telecoms Engineering",
                type: "Graduation",
                institution: "Graduation",
                location: "Manaus",
                from: "2001",
                to: "2005",
                logo: "http://www.fucapi.br/wp-content/themes/fucapibr/images/logo.png"
        }; //logo: "https://media.licdn.com/mpr/mpr/shrink_60_60/p/5/005/081/376/1d6e87b.png"};
        resume.education.push(item);
        resume.experience = {
                title: "Work Experience",
                items: []
        };
        item = {
                title: "UX Designer",
                company: "Fundação Paulo Feitoza",
                location: "Manaus, AM Brazil",
                from: "Aug 2015",
                to: "Feb 2016"
        };
        item.url = "www.fpftech.com";
        item.duties = [];
        item.duties.push("Samsung Project - Designed mobile and tablet interactions for the Rio Olympics 2016");
        item.duties.push("Qualcom Project - Designed mobile and tablet interactins for video based applications. Conducted a Heuristic and Usability Evaluation.");
        item.duties.push("Samsung & Anoreg-AM Project - Conducted a Heuristic Evaluation and suggested improvements in the Web based application");
        item.skills = [];
        item.skills.push({
                proficiency: "high",
                name: "Illustrator",
        });
        item.skills.push({
                proficiency: "high",
                name: "Balsamiq",
        });
        item.skills.push({
                proficiency: "high",
                name: "User Interaction",
        });
        item.skills.push({
                proficiency: "high",
                name: "Usability",
        });
        item.skills.push({
                proficiency: "low",
                name: "Axure",
        });
        item.skills.push({
                proficiency: "low",
                name: "Prototyping",
        });
        resume.experience.items.push(item);
        item = {
                title: "UX Researcher",
                company: "INDT",
                location: "Manaus, AM Brazil",
                from: "Jun 2015",
                to: "Jun 2014"
        };
        item.url = "www.indt.org.br";
        item.duties = [];
        item.duties.push("Near Project - Conducted interviews, Heuristic Evaluation, Focus group and Usability Testing for a chatting application.");
        item.duties.push("TV Digital Project - Conducted Contextual Interviews, Desk Research and Eyetracking Usability Testing");
        item.duties.push("Claro Musica Project - Conducted an Information Architecture Research of responsive applications and helped team to design an application for W10 platform.");
        item.duties.push("Energy Smartphone Project - Conducted a Desk Research, Compartative Study and Online Survey.");
        item.duties.push("Internal Users- Helped Usability team creating a survey to collect a group of internal users in the company");
        item.duties.push("Brainstorming - Planning, Conducting and organizing ideas/scenarios for new projects in Human Computer Interaction");
        item.skills = [];
        item.skills.push({
                proficiency: "medium",
                name: "Brainstorming"
        });
        item.skills.push({
                proficiency: "high",
                name: "Interviewing"
        });
        item.skills.push({
                proficiency: "high",
                name: "User-Centered Methods"
        });
        item.skills.push({
                proficiency: "high",
                name: "Surveys"
        });
        item.skills.push({
                proficiency: "high",
                name: "User Experience"
        });
        item.skills.push({
                proficiency: "high",
                name: "Usability"
        });
        resume.experience.items.push(item);
        item = {
                title: "Quality Assurance",
                company: "INDT",
                location: "Manaus, AM Brazil",
                from: "Aug 2008",
                to: "May 2015"
        };
        item.url = "http://www.indt.org.br";
        item.duties = [];
        item.duties.push("Music Trending Project - Test Plan definition, Continuous Integration, Automated testing for REST Api, Unit tests coverage, Functional Test Cases, Bug Tracking and Metrics.");
        item.duties.push("Nokia Pulse Project - Test Plan definition, Agile Testing, Mobile Testing, Usability and Heuristic Evaluation, Bug Tracking and Metrics.");
        item.duties.push("MobileDeck Project - Test Plan definition, Unified Testing Criteria for J2ME applications, Usability Testing, Bug Tracking and Metrics.");
        item.duties.push("Nokia Ecossystem Project - Agile Testing, Mobile Testing, Application Store Approval.");
        item.duties.push("QA Department - helped organizatin to define and organize the QA Process.");
        item.skills = [];
        item.skills.push({
                proficiency: "high",
                name: "Testing Plan"
        });
        item.skills.push({
                proficiency: "high",
                name: "Automation Testing"
        });
        item.skills.push({
                proficiency: "high",
                name: "Mobile Testing"
        });
        item.skills.push({
                proficiency: "high",
                name: "Agile Testing"
        });
        item.skills.push({
                proficiency: "high",
                name: "Bug Tracking"
        });
        item.skills.push({
                proficiency: "high",
                name: "Reporting"
        });
        resume.experience.items.push(item);
        item = {
                title: "My Online Business",
                company: "NAUTICA MANAUS",
                location: "Manaus, AM Brazil",
                from: "2012",
                to: "2013"
        };
        item.url = "http://ise.uvic.ca";
        item.duties = [];
        item.duties.push("A startup of a classified adds website for nautical products in Manaus City. Experience in reading Google Analytics report and planning website findability.");
        item.skills = [];
        item.skills.push({
                proficiency: "low",
                name: "Google Analytics"
        });
        item.skills.push({
                proficiency: "low",
                name: "Findability"
        });
        item.hide = true;
        resume.experience.items.push(item);
        item = {
                title: "Telecom Engineer",
                company: "LG Eletronics",
                location: "Taubaté",
                from: "Jun 2008",
                to: "Jul 2008"
        };
        item.url = "http://www.lg.com";
        item.duties = [];
        item.duties.push("Activities as Field Tester in GSM Networks. Quality reports in order to get the Operator Approval. Perform exploration tests in assigned area, prepared exploration test report and reporting bugs from such tests.");
        item.skills = [];
        item.skills.push({
                proficiency: "high",
                name: "GSM Networks"
        });
        item.skills.push({
                proficiency: "medium",
                name: "Testing Plan"
        });
        item.skills.push({
                proficiency: "low",
                name: "Reporting"
        });
        resume.experience.items.push(item);
        item = {
                title: "Tester",
                company: "DBA",
                location: "Campinas, SP Brazil",
                from: "Oct 2006",
                to: "Jun 2007"
        };
        item.url = "http://www.dba.com.br";
        item.duties = [];
        item.duties.push("Nortel Networks Project - Created testing scenarios for a internet link system between Nortel Networks and Telefonica.");
        item.skills = [];
        item.skills.push({
                proficiency: "medium",
                name: "Test Cases Specification"
        });
        item.skills.push({
                proficiency: "medium",
                name: "Bug Tracking"
        });
        item.skills.push({
                proficiency: "medium",
                name: "Reporting"
        });
        resume.experience.items.push(item);
        item = {
                title: "Developer",
                company: "DBA",
                location: "Manaus, AM Brazil",
                from: "Aug 2004",
                to: "Oct 2006"
        };
        item.url = "http://www.dba.com.br";
        item.duties = [];
        item.duties.push("Siemens Project - J2me Applications Development for Siemens mobiles which were launched in the market.");
        item.skills = [];
        item.skills.push({
                proficiency: "medium",
                name: "Java"
        });
        item.skills.push({
                proficiency: "medium",
                name: "J2ME"
        });
        item.skills.push({
                proficiency: "medium",
                name: "Mobile Applications"
        });
        resume.experience.items.push(item);
        item = {
                title: "Trainee",
                company: "Fucapi",
                location: "Manaus, AM Brazil",
                from: "Dec 2001",
                to: "Sep 2003"
        };
        item.url = "http://www.fucapi.br";
        item.duties = [];
        item.duties.push("Network Supporting and J2ME Development for Handhelds.");
        item.skills = [];
        item.skills.push({
                proficiency: "low",
                name: "J2ME"
        });
        item.skills.push({
                proficiency: "medium",
                name: "Supporting"
        });
        resume.experience.items.push(item);
        // resume.volunteerWork = [];
        // item = {
        //     title: "Proud member",
        //     institution: "Barraca do Bixiga",
        //     location: "Manaus, AM Brasil",
        //     from: "2011",
        //     to: "present"
        // };
        // item.details = [];
        // item.details.push("Works as an obnoxious waiter serving pizza for thousands of customers; all profit goes to the <a href='www.manaus.apaebrasil.org.br'>APAE</a> Foundation");
        // resume.volunteerWork.push(item);
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
                title: "Usability of peripheral devices for mobile digital tv: Bluetooth, USB and Wi-Fi.",
                journal: "HCI International",
                date: "2015",
                link: "http://2015.hci.international/"
        });
        resume.publications.push({
                title: "Mobile Testing in Software Industry using Agile: Challenges and Opportunities.",
                journal: "IEEE ICST",
                date: "2015",
                link: "hhttp://icst2015.ist.tu-graz.ac.at/"
        });
        resume.publications.push({
                title: "Scrum pode causar falhas, como lidar com isso?",
                journal: "CBSOFT",
                date: "2014",
                link: "http://www.ic.ufal.br/evento/cbsoft2014/programacao-industria.html"
        });
        resume.publications.push({
                title: "Técnicas de Usabilidade em sistema web na fase de requisitos: um relato de experiência.",
                journal: "CBSOFT",
                date: "2014",
                link: "http://www.ic.ufal.br/evento/cbsoft2014/programacao-industria.html"
        });
        resume.publications.push({
                title: "Teste móvel e seus requisitos, um foco na Usabilidade e Interação do usuário.",
                journal: "TDC",
                date: "2014",
                link: "http://www.thedevelopersconference.com.br/tdc/2014/saopaulo/trilha-testes"
        });
        resume.publications.push({
                title: "Então, precisamos mesmo de QA em projetos Ágeis?",
                journal: "TDC",
                date: "2013",
                link: "http://www.thedevelopersconference.com.br/tdc/2013/portoalegre/trilha-agile#programacao"
        });
        resume.publications.push({
                title: "The bug is on the table.",
                journal: "TDC",
                date: "2013",
                link: "http://cbsoft2013.unb.br/cbsoft/trilha-da-industria"
        });
        resume.publications.push({
                title: "Praticando os princípios ágeis nas atividades de teste em projetos de aplicativos móveis.",
                journal: "CBSOFT",
                date: "2013",
                link: "http://www.thedevelopersconference.com.br/tdc/2013/portoalegre/trilha-testes#programacao"
        });
        resume.publications.push({
                title: "Melhores práticas para tratar dilemas de qualidade no desenvolvimento de aplicativos móveis.",
                journal: "CBSOFT",
                date: "2013",
                link: "http://cbsoft2013.unb.br/cbsoft/trilha-da-industria"
        });
        resume.publications.push({
                title: "Comparação de Report de falha em lojas de aplicativos.",
                journal: "TDC",
                date: "2012",
                link: "http://www.thedevelopersconference.com.br/tdc/2012/goiania/trilha-mobile#programacao"
        });
        resume.publications.push({
                title: "Estratégia Ágil de testes para desenvolvimento de aplicativos móveis.",
                journal: "CBSOFT",
                date: "2012",
                link: "http://www.cbsoft.dimap.ufrn.br/cbsoft_industria.php"
        });
        resume.publications.push({
                title: "Testing in an Agile Product Development Environment: An Industry Experience Report.",
                journal: "IEEE LATW",
                date: "2011",
                link: "http://cbsoft2013.unb.br/cbsoft/trilha-da-industria"
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
                stars: [true, true, true, true, false],
                country: 'us'
        });
        resume.languages.push({
                name: "Spanish",
                level: "fluent",
                stars: [true, true, true, true, false],
                country: 'es'
        });
        resume.languages.push({
                name: "German",
                level: "basic",
                stars: [true, false, false, false, false],
                country: 'de'
        });
        resume.interests = ["Sports", "Traveling", "Healthy food", "Fitness", "User Experience"];
        resume.references = "Excellent references available upon request";
        resume.minimize = {
                education: false,
                experience: false,
                bio: false,
                publications: false,
                languages: false
        };
        $scope.resume = resume;
        $scope.teste = new Date();
        $scope.minimize = function(nome) {
                resume.minimize[nome] = !resume.minimize[nome];
        }
});
app.directive('myWorkExperience', function() {
        return {
                restrict: 'E',
                scope: {
                        resume: '=info'
                },
                templateUrl: '../my-workExperience.html'
        };
});
var fct = function($compile) {
        return {
                restrict: 'A',
                link: function(scope, element, attributes) {
                        scope.$watch(attributes.proficiency, function(newValue, oldValue, scope) {
                                var p = newValue;
                                if (!p) return;
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
app.directive('myEducation', function() {
        return {
                restrict: 'E',
                scope: {
                        resume: '=info'
                },
                templateUrl: '../my-education.html'
        };
});
app.directive('myBio', function() {
        return {
                restrict: 'E',
                scope: {
                        resume: '=info'
                },
                templateUrl: '../my-bio.html'
        };
});
app.directive('myPublications', function() {
        return {
                restrict: 'E',
                scope: {
                        resume: '=info'
                },
                templateUrl: '../my-publications.html'
        };
});
app.directive('myLanguages', function() {
        return {
                restrict: 'E',
                scope: {
                        resume: '=info'
                },
                templateUrl: '../my-languages.html'
        };
});
app.filter('minimizeFilter', [function() {
        return function(input, extra) {
                if (!extra) {
                        extra = [];
                        extra.push('mais');
                        extra.push('menos');
                }
                if (input == true) {
                        return extra[0];
                } else {
                        return extra[1];
                }
        }
}]);


app.filter('filterPublications', [function(expectedPublications, key) {
  element.all(by.repeater(key + ' in resume.publications').column(key + '.title')).then(function(arr) {
    arr.forEach(function(wd, i) {
      expect(wd.getText()).toMatch(expectedPublications[i]);
    });
  });
}]);
