import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { CadastroUsuariosService } from 'src/app/services/cadastro-usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  constructor(
    private cadastroUsuariosService: CadastroUsuariosService
  ) {
    this.form = new FormGroup({
      Email: new FormControl('', [
        Validators.required, 
        Validators.email
      ]),
      Nome: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      CPF: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
        ),
      ]),
      DataNascimento: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      Endereco: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  ngOnInit(): void {}

  salvarRegistro(): void {
    this.form.updateValueAndValidity();
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    const dadosRequisicao: UsuarioModel = {
      Email: this.form.value.Email,
      Nome: this.form.value.Nome,
      CPF: this.form.value.CPF,
      Endereco: this.form.value.Endereco,
      DataNascimento: this.form.value.DataNascimento,
      id: this.form.value.id,
    };

    this.cadastroUsuariosService
      .postCadastro(dadosRequisicao)
      .subscribe((dados) => {
        console.log(dados);
        this.form.reset();
      });
  }
}
