//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../../interfaces/equipo.interfaces';

/*
  Generated class for the HistorialEquiposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialEquiposProvider {
  private _historialEquipos: Equipo[] = [];
  private equipo:Equipo;
  private equipo2:Equipo;
  private equipo3:Equipo;

  constructor() {
    this.equipo = {
      nombre:"Equipo A",
      ciudad:"Barcelona",
      jugadores:[]
    };
    this.equipo2 = {
      nombre:"Equipo B",
      ciudad:"Valencia",
      jugadores:[]
    };
    this.equipo3 = {
      nombre:"Equipo C",
      ciudad:"Madrid",
      jugadores:[]
    };
    this._historialEquipos.unshift(this.equipo,this.equipo2,this.equipo3);
    console.log('Hello HistorialEquiposProvider Provider');
  }
  cargar_equipos(){
    return this._historialEquipos;
  }
}
