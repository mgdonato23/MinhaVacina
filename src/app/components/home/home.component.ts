import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form!: FormGroup

  constructor() {
    this.form = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Nome: new FormControl('', [Validators.required, Validators.minLength(20)]),
      CPF: new FormControl('', [Validators.required, Validators.minLength(11)]),
      DataNascimento: new FormControl('', [Validators.required]),
      Endereco: new FormControl('', [Validators.required, Validators.minLength(20)]),
    });
  }
  
  ngOnInit() {
  }

  enviarCadastro() {}
}
