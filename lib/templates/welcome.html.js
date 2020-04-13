
// d:\data\entwicklung\angular\demo\xy-demo\src\app\xy-welcome\xy-welcome.component.html

exports.tsWelcome =  `

<div class="height-100p">

  <div class="db-welcome-outer-div">
    <div class="db-welcome-div"></div>
  </div>

  <div class="db-text-hidden db-font-monospace">
    production: {{ environment.production }}<br>
    envName: '{{ environment.level }}'<br>
    version: '{{ environment.version }}'<br>
  </div>

  <div class="db-text-align-center">
    <h1>AppName</h1>

    <h2>Subtitle</h2>
    
    <a href="assets/pdf/manual.pdf" mat-button target="_blank">Manual</a>
    <a href="https://vimeo.com/335571306" mat-button target="_blank">Video</a>
    
    <br>
    <br>
    <br>
    <br>

    <button color="primary" mat-raised-button routerLink="/anfrage">
      Starten <i class="material-icons">arrow_forward_ios</i>
    </button>
  </div>

</div>







`;
