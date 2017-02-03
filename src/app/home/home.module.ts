import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.router';

@NgModule({
	imports: [
		HOME_ROUTES
	],
	exports: [],
	declarations: [
		HomeComponent
	],
	providers: [],
})
export class HomeModule { }
