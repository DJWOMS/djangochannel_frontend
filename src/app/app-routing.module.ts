import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {PostComponent} from './components/blog/post/post.component';
import {PostListComponent} from './components/blog/post-list/post-list.component';

const routes: Routes = [
    // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '', component: HomeComponent},
    {
        path: 'blog', component: BlogComponent, children: [
            {path: '', component: PostListComponent},
            {path: ':slug', component: PostComponent},
        ]
    },

    // {path: 'detail/:id', component: HeroDetailComponent},
    {path: '**', component: NotfoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
            enableTracing: false
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
