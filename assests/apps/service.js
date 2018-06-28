function Service() {
  var lang = ["assests/pics/html.png", "assests/pics/css.logo.png", "assests/pics/javascript.png", "assests/pics/csharp.png", "assests/pics/typescript.png", "assests/pics/mysql.png"]
  var frame = ["assests/pics/bootstrap.png", "assests/pics/vue.png", "assests/pics/node.png", "assests/pics/phaser.png", "assests/pics/angular.png", "assests/pics/dotnet.png"]

  this.languages = () => {
    return lang
  }

  this.frameworks = () => {
    return frame
  }
}