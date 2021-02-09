import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'forgotpass', loadChildren: './forgotpass/forgotpass.module#ForgotpassPageModule' },
  { path: 'resume', canActivate: [AuthGuard], loadChildren: './resume/resume.module#ResumePageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'team', canActivate: [AuthGuard], loadChildren: './team/team.module#TeamPageModule' },
  { path: 'about', canActivate: [AuthGuard], loadChildren: './about/about.module#AboutPageModule' },
  { path: 'preview', canActivate: [AuthGuard], loadChildren: './preview/preview.module#PreviewPageModule' },
  { path: 'terms', canActivate: [AuthGuard], loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'userdetails', canActivate: [AuthGuard], loadChildren: './userdetails/userdetails.module#UserdetailsPageModule' },
  { path: 'userprofile', canActivate: [AuthGuard], loadChildren: './userprofile/userprofile.module#UserprofilePageModule' },
  { path: 'jobs', canActivate: [AuthGuard], loadChildren: './jobs/jobs.module#JobsPageModule' },
  { path: 'newsdetails', canActivate: [AuthGuard], loadChildren: './newsdetails/newsdetails.module#NewsdetailsPageModule' },
  { path: 'zoomslider', canActivate: [AuthGuard], loadChildren: './zoomslider/zoomslider.module#ZoomsliderPageModule' },
  { path: 'editprofile', canActivate: [AuthGuard], loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'news', canActivate: [AuthGuard], loadChildren: './news/news.module#NewsPageModule' },
  { path: 'create-profile', canActivate: [AuthGuard], loadChildren: './create-profile/create-profile.module#CreateProfilePageModule' },
  { path: 'change-password', canActivate: [AuthGuard], loadChildren: './change-password/change-password.module#ChangePasswordPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
