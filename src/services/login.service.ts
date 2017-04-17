import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Rx";
import {Config} from "../app/config";

@Injectable()
export class LoginService {
  constructor(private http: Http) {

  }

  public login(credentials: any): Observable<string> {
    const body = JSON.stringify(credentials);
    const headers = new Headers({"Content-Type": "application/json"});
    const options = new RequestOptions({headers});
    return this.http
      .post(Config.API_ENDPOINT + "/login", body, options)
      .map((res: Response) => res.json().access_token);
  }
}
