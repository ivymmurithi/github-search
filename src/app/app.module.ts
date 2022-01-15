import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UserComponent } from './components/user/user.component';
import { DisplayGithubUserComponent } from './components/display-github-user/display-github-user.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { DatePipePipe } from './pipes/date-pipe.pipe';
import { UnderlineDirective } from './directives/underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchFormComponent,
    UserComponent,
    DisplayGithubUserComponent,
    RepositoriesComponent,
    DatePipePipe,
    UnderlineDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
