import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { DataService } from '../services/app.service.data';
@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
@Injectable({
  providedIn : 'root'
})
export class MedecinsComponent implements OnInit {
  medecin : any;
  lesMedecins : Array<any> = new Array;
  nomMedecin : any;
  estCacheMenu : boolean = false;
  afficherRapports : any;
  lesRapports : Array<any> = new Array;
  departement : any;
  idMedecin : any;
  lblMessage : any;
  afficherMessage : any;
  valider : any;
  legende : any;
  id : any;
  adresse : any;
  tel : any;
  spe : any;

  date : any;
  motif : any;
  bilan : any;
  nomvisiteur : any;
  afficherListe: any;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }
  charger(){
    this.dataService.chargerMedecins(this.nomMedecin).subscribe({
      next : (data) => {
        this.lesMedecins = data;
      },
      error : (error) => {
        console.log(error);
      }
    });
  }
  selectionner(med:any):void {
    this.medecin=med
    this.idMedecin=med.id;
    this.afficherRapports = true;
    this.nomMedecin = med.nom + " " + med.prenom + "; dep : " + med.departement;
    this.legende ="";
    this.estCacheMenu = false;
   this.charger();
  }
  derniersRapports(){
    this.dataService.chargerRapports(this.idMedecin).subscribe({
      next : (data) => {
        this.lesRapports = Array.of(data);
        this.afficherRapports = true;
      },
      error : (error) => {
        console.log(error);
      }
    })
  }
 





}