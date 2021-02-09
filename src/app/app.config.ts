import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface AppConfig {
	appName: string;
	documentURL: string;
	mediaURL: string;
	newsURL: string;
	teamURL: string;
	profileURL: string;
	coverURL: string;
	apiBase: string;
	perPage: number;
	dfImage:string;
	
}

export const BaseAppConfig: AppConfig = {
	appName: "Wiki",
	documentURL: 'http://go-demo.co/classified/assets/resume/',
	mediaURL: 'http://gharyal.go-demo.co/pub/media/',
	newsURL: 'http://go-demo.co/classified/assets/images/news_images/',
	profileURL: 'http://go-demo.co/classified/assets/images/profile/',
	coverURL: 'http://go-demo.co/classified/assets/images/profile/',
	teamURL: 'http://go-demo.co/classified/assets/team_member/',
	apiBase: "http://go-demo.co/classified/api/",
	perPage: 30,
	dfImage: 'asssets/img/no-img.jpg'
    
};