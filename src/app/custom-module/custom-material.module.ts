import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, 
		MatCheckboxModule,
		MatInputModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatListModule,
		MatMenuModule,
		MatIconModule,
		MatToolbarModule
		
		} from '@angular/material';


@NgModule({
  declarations: [],
	imports: [
		CommonModule,
		MatButtonModule, 
		MatCheckboxModule,
		MatInputModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatListModule,
		MatMenuModule,
		MatIconModule,
		MatToolbarModule
	],
	exports: [
		CommonModule,
		MatButtonModule, 
		MatCheckboxModule,
		MatInputModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatListModule,
		MatMenuModule,
		MatIconModule,
		MatToolbarModule
	],
  
})
export class CustomMaterialModule { }
