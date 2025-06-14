import { Player } from './../../types/Player';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly urlApi = 'http://172.16.85.95:3000/consultas';

  private http = inject(HttpClient);

  public salvar (player: Player) {
    if (player.id) {
      return this.http.put(`${this.urlApi}/${player.id}`, player);
    }

    const novoPlayer = { ...player};
    delete novoPlayer.id;

    return this.http.post(this.urlApi, novoPlayer);
  }

  public excluir (id: string) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  public buscarTodos() {
    return this.http.get<Player[]>(this.urlApi);
  }

  public buscarPorId(id: string) {
    return this.http.get<Player>(`${this.urlApi}/${id}`);
  }
}
