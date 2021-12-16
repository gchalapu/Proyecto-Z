import { Component, OnInit } from '@angular/core';
import { ClienteService} from '../../servicios/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: any = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit()  {
    
    this.getCliente();
    }

    getCliente(){
      this.clienteService.getClientes().subscribe(
        res => {
          this.clientes = res;
        },
        err => console.error(err)
      );
    }



    borrarCliente(id: string){
      this.clienteService.deleteCliente(id).subscribe(
        res=> {
          console.log(res)
          this.getCliente();
        },
        err => console.log(err)
        )
         }
        
         

}
