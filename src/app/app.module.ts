import { PostService } from './service/post.service';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors-service.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MovieNamePipePipe } from './movie-name-pipe.pipe';
import { MovieNameComponent } from './movie-name/movie-name.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikesComponent } from './likes/likes.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { PostsCompomentComponent } from './posts-compoment/posts-compoment.component'
import {HttpModule} from '@angular/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowerService} from './service/github-follower.service';




@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FavoriteComponent,
    MovieNamePipePipe,
    MovieNameComponent,
    BootstrapPanelComponent,
    LikesComponent,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    PostsCompomentComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule



  ],
  providers: [
    PostService,
    AuthorsService,
    CoursesService,
    GithubFollowerService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
