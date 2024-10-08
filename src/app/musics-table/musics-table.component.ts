import { Component, OnInit } from '@angular/core';
import { MusicsTableProps } from '../../types/musicsTableProps';
import { musicsService } from '../../services/musics.service';

@Component({
  selector: 'app-musics-table',
  templateUrl: './musics-table.component.html',
  styleUrl: './musics-table.component.css'
})

export class MusicsTableComponent implements OnInit {
  musics: Array<MusicsTableProps> = [];

  constructor(private service: musicsService){};

  ngOnInit(): void {
    this.loadMusics();
  }

  // Save the datas (musics) from the back-end to the musics array, if don`t exist the back-end, shows default values. Please, read the comment on top of the service (musics.service.ts)
  loadMusics() {
    this.service.getMusics().subscribe({
      next: data => this.musics = data  
    });
  }

  delete(music: MusicsTableProps) {
    this.service.delete(music).subscribe({
      next: () => this.loadMusics()
    })
  }
}