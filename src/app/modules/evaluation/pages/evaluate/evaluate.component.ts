import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvaluationService } from '../../../../core/_services/evaluation.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from '../../../../shared/modals/modal-basic/modal-basic.component'

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  evaluationForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private evaluationService: EvaluationService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.evaluationForm = this.formBuilder.group({
        clientName: ['', Validators.required],
        creditLimit: ['', [Validators.required, Validators.pattern('[0-9]+(.[0-9]{0,2})?$')]],
        typeOfEvaluation: ['', Validators.required]
    });
  }

  get getEvaluationForm(){ return this.evaluationForm.controls }

  evaluar(){

    this.submitted = true;

    if(this.evaluationForm.invalid){
      return;
    }

    this.evaluationService.calculateEvaluation(this.getEvaluationForm.clientName.value, this.getEvaluationForm.creditLimit.value, this.getEvaluationForm.typeOfEvaluation.value).subscribe( data => {
      const modalRef = this.showModal("Confirmation", "Se ha registrado correctamente.");
      modalRef.result.then((result) => {
        this.clear();
      }, (reason) => {
        this.clear();
      });
    },
    (err) => {
      const modalRef = this.showModal("Error", "Ha ocurrido en error inesperado, favor de verificar su conexión a internet.");
    });
    
  }

  private showModal(title: String, content: String ): NgbModalRef{
    const modalRef = this.modalService.open(ModalBasicComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.content = content;
    return modalRef;
  }

  clear(){
      this.getEvaluationForm.clientName.setValue("");
      this.getEvaluationForm.creditLimit.setValue("");
      this.getEvaluationForm.typeOfEvaluation.setValue("");
      this.submitted = false;
  }
}
