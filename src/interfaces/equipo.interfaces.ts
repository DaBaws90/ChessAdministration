import { Jugador } from "./player.interfaces";

export interface Equipo {
    nombre: string;
    ciudad: string;
    jugadores:Jugador[];
}