import { MainContentComponent } from './main-content/main-content.component';
import { PostsComponent } from './posts/posts.component';
import { ContentBlockComponent } from './content-block.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const contentBlockRoutes: Routes = [
    {
      path: '',  // :id
      component: ContentBlockComponent,
      children: [
        {
          path: '',
          component: MainContentComponent
          //loadChildren: 'app/pages/profile/content-block/posts/posts.module#PostsModule',
        },
        {
            path: 'posts',
            //component: PostsComponent
            loadChildren: 'app/pages/profile/content-block/posts/posts.module#PostsModule',
        },
        {
            path: 'superposts',
            loadChildren: 'app/pages/profile/content-block/super-posts/super-posts.module#SuperPostsModule',
        },
        
      ],
    },
    { path: '', redirectTo: 'profile', pathMatch: 'full' },  // /:id
    { path: '**', redirectTo: 'profile' },  // /:id
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(contentBlockRoutes)],
    exports: [RouterModule],
   // providers: [WorkflowGuard]
  })
  export class ContentBlockRoutingModule {}