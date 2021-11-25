import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Quarto } from "../models/quarto";

@Injectable({
    providedIn: "root",
})
export class QuartoService {
    private baseUrl = "http://localhost:5000/api/quarto";

    constructor(private http: HttpClient) {}

    list(): Observable<Quarto[]> {
        return this.http.get<Quarto[]>(`${this.baseUrl}/list`);
    }
    create(quarto: Quarto): Observable<Quarto> {
        return this.http.post<Quarto>(`${this.baseUrl}/create`, quarto);
    }
}
