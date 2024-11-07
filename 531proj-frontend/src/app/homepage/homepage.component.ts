import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { Donut } from "../Donut";
import { environment } from '../../environments/environment';

type ResponseStructure = { donuts: Donut[] };

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: 'homepage.component.html',
    styleUrls: ['homepage.component.css'],
    imports: [CommonModule, CardComponent],
})
export class HomepageComponent implements OnInit {
    donuts: Donut[] = [];
    isLoading = true;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.fetchDonuts();
    }

    fetchDonuts(): void {
        this.http.get<ResponseStructure>(`${environment.apiUrl}/donuts`)
            .subscribe({
                next: (response) => {
                    this.donuts = response.donuts;
                    this.isLoading = false;
                    console.log('Donuts:', this.donuts);
                },
                error: (error) => {
                    console.error('Error fetching donuts:', error);
                    this.isLoading = false;
                }
            });
    }
}
