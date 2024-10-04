import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    showCalendar = false;
    toggleCalendar(){
      this.showCalendar = !this.showCalendar;
    }

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

    AlertaButton = ['Sair']
  

}
