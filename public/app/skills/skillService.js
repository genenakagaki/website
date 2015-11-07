'use strict';

angular.module('skillService', [])
.factory('skillService', function() {
  var category = {
    language: 'Language',
    database: 'Database',
    vcs     : 'VCS',
    paas    : 'PaaS'
  };

  function Skill(title, name, imgType, category) {
    this.name     = name;
    this.title    = title;
    this.category = category;
    this.img      = '/assets/img/skill/' + name + imgType;
  }

  var java       = new Skill('Java',        'java', '.svg',       category.language);
  var objectiveC = new Skill('Objective-C', 'objectiveC', '.png', category.language);
  var javascript = new Skill('JavaScript',  'javascript', '.svg', category.language);
  var nodejs     = new Skill('Node.js',     'nodejs', '.svg',     category.language);
  var angularjs  = new Skill('Angular.js',  'angularjs', '.svg',  category.language);
  var python     = new Skill('Python',      'python', '.svg',     category.language);
  var html5      = new Skill('HTML5',       'html5', '.svg',      category.language);
  var css3       = new Skill('CSS3',        'css3', '.svg',       category.language);
  var mongodb    = new Skill('mongoDB',     'mongodb', '.svg',    category.database);
  var mysql      = new Skill('MySQL',       'mysql', '.svg',      category.database);
  var git        = new Skill('Git',         'git', '.svg',        category.vcs);
  var heroku     = new Skill('Heroku',      'heroku', '.svg',     category.paas);

  var skillList = [
    java,
    objectiveC,
    javascript,
    nodejs,
    angularjs,
    python,
    html5,
    css3,
    mongodb,
    mysql,
    git,
    heroku 
  ];

  return {
    findAll: function() {
      return skillList;
    },
    findSkillByName: function(name) {
      for (var i = 0; i < skillList.length; i++) {
        if (skillList[i].name === name) {
          return skillList[i];
        }
      }

      return null;
    }
  }
})