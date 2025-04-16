import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Client {
  id: number;
  name: string;
  lastName: string;
  age: string;
  calle: string;
  colonia: string;
  ciudad: string;
  pais: string;
}



@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private url ='http://localhost:8080/api/clients'

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/${id}`);
  }
  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client);
  }
  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/${client.id}`, client);
  }
  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
