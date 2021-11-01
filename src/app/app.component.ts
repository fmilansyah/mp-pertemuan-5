import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Mata Kuliah', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Jadwal Kuliah', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Nilai', url: '/folder/Archived', icon: 'archive' },
    { title: 'Kartu Rencana Studi', url: '/folder/Trash', icon: 'trash' },
    { title: 'Keungan', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
