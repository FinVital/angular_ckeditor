/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { RouterModule, Routes } from '@angular/router';
 import { AppComponent } from './app.component';
 
 import { CKEditorModule } from '../ckeditor/ckeditor.module';
 import { SimpleUsageComponent } from './simple-usage/simple-usage.component';
 
 const appRoutes: Routes = [
   { path: '', redirectTo: '/simple-usage', pathMatch: 'full' },
   { path: 'simple-usage', component: SimpleUsageComponent },
 ];
 
 @NgModule( {
   imports: [
     BrowserModule,
     FormsModule,
     CKEditorModule,
     RouterModule.forRoot( appRoutes )
   ],
   declarations: [
     AppComponent,
     SimpleUsageComponent,
   ],
   providers: [],
   bootstrap: [ AppComponent ]
 } )
 
 export class AppModule {
 }
 