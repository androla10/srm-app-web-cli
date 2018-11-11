import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { restoreBindingIndex } from '../../../../node_modules/@angular/core/src/render3/instructions';
import { Evaluation } from '../_models/evaluation.model';
@Injectable()
export class EvaluationService {

  constructor(private http: HttpClient) { }

  calculateEvaluation( clientName: String, creditLimit: Number, typeOfEvaluation: String ){
      let body = { "clientName": clientName, "limCredit": creditLimit, "typeOfEvaluation": typeOfEvaluation };
      let request: Evaluation = new Evaluation();
      request.clientName = clientName;
      request.creditLimit = creditLimit;
      request.typeOfEvaluation = typeOfEvaluation;

      let headers = new HttpHeaders({
            'Content-Type': 'application/json'
      });
      
      return this.http.post(environment.baseUrl + "/evaluation", request, { headers }).pipe(map( rest => { return rest; }));
  }

}
