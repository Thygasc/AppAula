import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegacao', url:'/navegacao', icon: 'code'},
    { title: 'Botões', url: '/botao', icon: 'construct'},
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Pagina 1', url: '/pagina1', icon: 'paper-plane' },
    { title: 'Pagina 2', url: '/pagina2', icon: 'heart' },
    { title: 'Pagina 3', url: '/pagina3', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
