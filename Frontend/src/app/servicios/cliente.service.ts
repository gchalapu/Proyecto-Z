import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente} from '../modelos/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


    getClientes(){
      return this.http.get(`${this.API_URL}/clientes`);
    
   }
   getCliente(id: string){
    return this.http.get(`${this.API_URL}/clientes/${id}`);
   }
   deleteCliente(id:string){
     return this.http.delete(`${this.API_URL}/clientes/${id}`)

   }

   saveCliente(clientes: Cliente ){
    return this.http.post(`${this.API_URL}/clientes`, clientes);
   }

   updateCliente(id: string|number, updateCliente: Cliente): Observable<Cliente> {
     return this.http.put(`${this.API_URL}/clientes/${id}`, updateCliente);
   }
}
