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
  usuario!: UsuarioModel;

  constructor(
    private fb: FormBuilder,
    private cadastroUsuariosService: CadastroUsuariosService
  ) {
    this.form = this.fb.group({
      Email: ['', Validators.required],
      Nome: ['', Validators.required],
      CPF: ['', Validators.required],
      Data: ['', Validators.required],
      Endereco: ['', Validators.required],
    });
  }

  ngOnInit() {}

  enviarCadastro(): void {
    this.form.updateValueAndValidity();
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    const dadosRequisicao: UsuarioModel = {
      Email: this.usuario.Email,
      Nome: this.usuario.Nome,
      CPF: this.usuario.CPF,
      Data: this.usuario.Data,
      Endereco: this.usuario.Endereco,
      IDUsuario: this.usuario.IDUsuario,
    };

    this.cadastroUsuariosService.postCadastros(dadosRequisicao);
  }
}
