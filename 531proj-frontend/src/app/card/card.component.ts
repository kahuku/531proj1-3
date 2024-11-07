import { Component, Input } from "@angular/core";
import { Donut } from "../Donut";
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: 'card.component.html',
    styleUrl: 'card.component.css',
    imports: [CurrencyPipe]
})
export class CardComponent {
    @Input({required: true}) donut!: Donut;

    ngOnInit() {
        if (this.donut.imgSrc === undefined || this.donut.imgSrc === '') {
            this.donut.imgSrc = 'https://531proj.kahuku.dev/donuts/donut.png';
        }
    }
}