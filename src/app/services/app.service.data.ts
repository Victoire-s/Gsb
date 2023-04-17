import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private urlAPI = "http://localhost/restGSB";
  visiteur: any;

  constructor(private http: HttpClient) {}

  public connexion(login: string, mdp: string) {
    let url = this.urlAPI + "/connexion?login=" + login + "&mdp=" + mdp;
    let req = this.http.get<string>(url);
    console.log(url)
    return req;
  }
  public chargerMedecins(nomMedecin : string){
    let url = this.urlAPI + "/medecins?nom=" + nomMedecin;
    let req = this.http.get<Array<any>>(url);
    return req;
  }
  public chargerRapports(idMedecin : any){
    let url = this.urlAPI + "/rapport/" + idMedecin;
    let req = this.http.get<Array<any>>(url);
    return req;
  }

}