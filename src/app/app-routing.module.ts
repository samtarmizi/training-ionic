import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'coordinate-list',
    loadChildren: () => import('./coordinate-list/coordinate-list.module').then( m => m.CoordinateListPageModule)
  },
  {
    path: 'todo-list',
    loadChildren: () => import('./todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
  {
    path: 'post-list',
    loadChildren: () => import('./post-list/post-list.module').then( m => m.PostListPageModule)
  },
  {
    path: 'post-comment/:id',
    loadChildren: () => import('./post-comment/post-comment.module').then( m => m.PostCommentPageModule)
  },
  {
    path: 'coordinate-form',
    loadChildren: () => import('./coordinate-form/coordinate-form.module').then( m => m.CoordinateFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
