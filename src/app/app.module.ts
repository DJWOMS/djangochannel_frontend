import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogComponent} from './components/blog/blog.component';
import {HomeComponent} from './components/home/home.component';
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {ApiService} from './api.service';
import { PostComponent } from './components/blog/post/post.component';
import { PostListComponent } from './components/blog/post-list/post-list.component';


@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        HomeComponent,
        NavComponent,
        FooterComponent,
        NotfoundComponent,
        PostComponent,
        PostListComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
