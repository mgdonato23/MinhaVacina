import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
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
    private fb: FormBuilder,
    private cadastroUsuariosService: CadastroUsuariosService
  ) {
    this.form = new FormGroup({
      Email: new FormControl(''),
      Nome: new FormControl(''),
      CPF: new FormControl(''),
      DataNascimento: new FormControl(''),
      Endereco: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  salvarRegistro(): void {
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
      });
  }
}
