import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Padaria do Seu Zé';
  autor: string = 'Bleiner Bertoluci Mathias';
  local: string = 'São Carlos/SP';
}
