import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    document.addEventListener("DOMContentLoaded", function() {
      let sec = 1000;
      let min = sec * 60;
      let hour = min * 60;
      let day = hour * 24;

      let copa: number = (new Date(2018, 5, 14, 12, 0, 0)).getTime();

      let between = setInterval(function(){
        let today = (new Date()).getTime();

        let diff = copa - today;

        let dias = Math.round(diff / day);
        let resto = diff % day;

        let horas = Math.round(resto / hour)
        resto = resto % hour;

        let minutos = Math.round(resto / min);
        resto = resto % min;

        let segundos = Math.round(resto / sec);
        resto = resto % sec;

        document.getElementById('days').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;' + dias + '<sub _ngcontent-c0=\"\" id=\"sub\">' + horas + 'H ' + minutos + 'M ' + segundos + 'S</sub>';

        if (window.innerWidth < 450){
          document.getElementById('days').innerHTML = dias + '<sub _ngcontent-c0=\"\" id=\"sub\">' + horas + 'H ' + minutos + 'M ' + segundos + 'S</sub>';

        }
      }, 1000);

    });

  }

}
