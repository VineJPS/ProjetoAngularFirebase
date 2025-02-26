import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filter: string = `fields=name,borders,flags`;
  url: string = `https://restcountries.com/v3.1/all?${this.filter}`; 
  dados: any = {};
  is_loading: boolean = false;

  constructor( ){
    this.is_loading = true;

    fetch(this.url)
      .then(dados=>dados.json()) //converte dados
      .then(dados=> { //retorna
        console.log(dados);
        this.dados = dados; //this.dados é o dados declarado la em cima. E o dados é o parametro do .then
      }) 
      .catch(_ =>{ //erros inesperados, _ é uma variavel
        console.log(_)
      }) 
      .finally(()=>{
        console.log("Requisição Finalizada");
        this.is_loading = false;
      })
   }

}
