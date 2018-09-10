import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dbex';
}

@Component({
  selector: 'app-content',
  template: `
    <div class="page-wrapper">
      <div class="navbar navbar-inverse" role="navigation">
          <div>
              <div id="navbar-header" class="navbar-header">
                  <button class="btn btn-success navbar-toggle">
                      <span class="glyphicon glyphicon-chevron-down"></span>
                  </button>

              </div>
              <div class="header-menu">
                  <div class="navigation-menu"></div>
              </div>
          </div>
      </div>
      <div class="container-fluid content" ui-view="app">
          <!-- <ui-view></ui-view>  here we must use ui-view? but now app component uses in states -->
          <!-- <ui-view></ui-view> -->
      </div>
  </div>
  <div id="footer" class="hidden-print">
      <p>. Version:</p>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppContentComponent {

}