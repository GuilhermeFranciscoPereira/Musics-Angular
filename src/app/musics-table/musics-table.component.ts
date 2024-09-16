import { Component } from '@angular/core';

type MusicsTableProps = {
  title: string;
  album: string;
  duration: string;
  artistOrBand: string;
  genre: string;
}

@Component({
  selector: 'app-musics-table',
  templateUrl: './musics-table.component.html',
  styleUrl: './musics-table.component.css'
})
export class MusicsTableComponent {
  musics: Array<MusicsTableProps> = [
    {
      title: "Costa Gold - N.A.D.A.B.O.M pt. 2",
      album: "155",
      duration: "4:15",
      artistOrBand: "Costa Gold - feat: Luccas Carlos e Don L",
      genre: "Rap",
    },
    {
      title: "SAMEHADA",
      album: "Samehada - Single",
      duration: "3:13",
      artistOrBand: "7 Minutoz - Gabriel Rodrigues e Lucas A.R.T. [Prod. tunnA Beatz]",
      genre: "Rap Geek",
    },
    {
      title: "VAMO DE PAGODIN",
      album: "Vamo de Pagodin - Single",
      duration: "2:44",
      artistOrBand: "MC Daniel - DJ WN e DJ GM",
      genre: "Funk",
    },
    {
      title: "Rei do gado",
      album: "Rei do gado - Single",
      duration: "2:58",
      artistOrBand: "Tião Carreiro e Pardinho",
      genre: "Moda de viola",
    },
  ];
}