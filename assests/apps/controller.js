function Controller() {
  var service = new Service()

  function drawLang(languages, id) {
    var template = ''
    languages.forEach(lang => {
      template += `
      <div class="col-6 d-flex justify-content-around">
        <img src=${lang} class="skill-logo">
      </div>`
    });
    document.getElementById(id).innerHTML = template
  }

  function drawFrame(frameworks, id) {
    var template = ''
    frameworks.forEach(frame => {
      template += `
      <div class="col-6 d-flex justify-content-around">
        <img src=${frame} class="skill-logo">
      </div>`
    });
    document.getElementById(id).innerHTML = template
  }

  drawLang(service.languages(), "languages")
  drawFrame(service.frameworks(), "frameworks")
  drawLang(service.languages(), "small-languages")
  drawFrame(service.frameworks(), "small-frameworks")
  
}

