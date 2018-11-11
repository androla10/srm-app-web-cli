import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EvaluationModule } from './modules/evaluation/evaluation.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ModalBasicComponent } from './shared/modals/modal-basic/modal-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ModalBasicComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    EvaluationModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ ModalBasicComponent, FormsModule, ReactiveFormsModule],
  entryComponents: [ ModalBasicComponent ]
})
export class AppModule { }
