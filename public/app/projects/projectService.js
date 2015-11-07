'use strict';

angular.module('projectService', ['skillService'])
.factory('projectService', ['skillService', function(skillService) {
  function Project(title, name, repoUrl) {
    this.title   = title;
    this.name    = name;
    this.url     = '/projects/' + name;
    this.repoUrl = repoUrl;
    this.img     = '/assets/img/project/' + name + '.png';
    this.thumb   = '/assets/img/project/' + name + '-th.png';

    this.skillList;
    this.description;

    this.setSkillList = function(skillList) {
      this.skillList = skillList;
    };

    this.setDescription = function(description) {
      this.description = description;
    };
  }

  var skill = skillService.findAll();

  var cardMatchingGame = new Project(
    'Card Matching Game', 
    'card-matching-game',
    'https://github.com/kagen47/Flipismo'
  );
  cardMatchingGame.setSkillList([
    skillService.findSkillByName('objectiveC'),
    skillService.findSkillByName('git')
  ]);
  cardMatchingGame.setDescription('iOS application of a card matching game.  Project from iOS programming class at Lehman College.');

  var tetris = new Project(
    'Tetris',
    'tetris',
    'https://github.com/kagen47/Tetris'
  );
  tetris.setSkillList([
    skillService.findSkillByName('javascript'),
    skillService.findSkillByName('git')
  ]);
  tetris.setDescription('Tetris game on HTML5 canvas element.  Project I did on my own time because I wanted to be more comfortable with javascript.  Also to practice using git and github.');

  var abtranet = new Project(
    'Abtranet', 
    'abtranet',
    'https://github.com/kagen47/abtranet'
  );
  abtranet.setSkillList([
    skillService.findSkillByName('javascript'),
    skillService.findSkillByName('nodejs'), 
    skillService.findSkillByName('mongodb'), 
    skillService.findSkillByName('html5'), 
    skillService.findSkillByName('css3'), 
    skillService.findSkillByName('heroku')
  ]); 
  abtranet.setDescription('An eCommerce website that I made with a team at the TrainCube program.  The TrainCube program was a program where: - we learned the MEAN stack (Mongodb, Express.js, Angular.js, Node.js) - we created an actual website for a client.  I worked on this site with:  - Jennifer Nieves  - Sanjai SyamprasadThis is a work of one week, since that was the term we were given to work on.Also this web app was not launched.');

  var arcadeGame = new Project(
    'Arcade Game', 
    'arcade-game',
    'https://github.com/kagen47/Falling-Game'
  );
  arcadeGame.setSkillList([skillService.findSkillByName('java')]);
  arcadeGame.setDescription('3D Arcade Game.  Final project for video game programming course at Lehman College.');

  var projectList = [
    // cardMatchingGame,
    tetris,
    abtranet,
    arcadeGame
  ];

  return {
    findAll: function() {
      return projectList;
    },
    findProjectByName: function(name) {
      for (var i = 0; i < projectList.length; i++) {
        if (projectList[i].name === name) {
          return projectList[i];
        }
      }
      return null;
    }
  }
}]);