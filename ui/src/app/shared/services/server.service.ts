import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { API } from "../../API.conf";

const baseUrl = API.authURL;

@Injectable({
  providedIn: "root",
})
export class ServerService {
  private loggedIn = false;
  private token: string;

  constructor(private http: HttpClient) {}

  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  request(method: string, route: string, data?: any) {
    if (method === "GET") {
      return this.get(route, data);
    }

    const header = this.loggedIn
      ? { Authorization: `Bearer ${this.token}` }
      : undefined;

    return this.http.request(method, baseUrl + route, {
      body: data,
      responseType: "json",
      observe: "response",
      headers: header,
    });
  }

  get(route: string, data?: any) {
    const header = this.loggedIn
      ? { Authorization: `Bearer ${this.token}` }
      : undefined;

    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach((key) => {
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(baseUrl + route, {
      responseType: "json",
      headers: header,
      params,
    });
  }
}
