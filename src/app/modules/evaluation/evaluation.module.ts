import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { EvaluateComponent } from './pages/evaluate/evaluate.component';

/*
 *Services 
 */
import { EvaluationService } from '../../core/_services/evaluation.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [EvaluationService],
  declarations: [EvaluateComponent],
  exports: [EvaluateComponent] 
})
export class EvaluationModule { }
