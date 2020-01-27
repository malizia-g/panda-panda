import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'correzione';
  riusltato: number = 0;

  vettorone: Array<number> = new Array<number>();

  somma(p1: HTMLInputElement, p2: HTMLInputElement): boolean {
    this.riusltato = Number(p1.value) + Number(p2.value);
    console.log(this.riusltato);

    for (let index = Number(p1.value); index < Number(p2.value); index++) {
      this.vettorone.push(index);

    }


    return false;
  }


}
