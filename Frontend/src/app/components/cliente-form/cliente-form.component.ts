import { Component, HostBinding, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/Cliente';
import {ClienteService} from '../../servicios/cliente.service'
import {ActivatedRoute,Route, Router} from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  cliente: Cliente = {
    id_usu: 0,
    nick_usu:'',
    nom_usu: '',
    corr_usu: '',
    telf_usu: ''
  };

  edit: boolean = false;

  constructor(private clienteService: ClienteService, private route: Router, private activedRoute: ActivatedRoute ) {
    
  }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params['id'] ){
      this.clienteService.getCliente(params['id'])
      .subscribe(
        res=>{
          console.log(res);
          this.cliente = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  GuardarCliente(){
    delete this.cliente.id_usu;
    this.clienteService.saveCliente(this.cliente)
    .subscribe(
      res=>{
        console.log(res);
        this.route.navigate(['/clientes']);
      },
      err=> console.error(err)
    )
  }
  actualizarCliente(){
    //this.clienteService.updateCliente(this.cliente.id_usu,this.cliente);


  }



}
