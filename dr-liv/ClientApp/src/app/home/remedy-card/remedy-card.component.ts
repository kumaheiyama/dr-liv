import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'remedy-card',
    templateUrl: './remedy-card.component.html',
    styleUrls: ['./remedy-card.component.css']
})
export class RemedyCardComponent implements OnInit {
    @Input() remedy: Remedy;

    baseUrl: string = '../../assets/remedies/';

    constructor() { }

    ngOnInit() {
    }

    getUrl() {
        return this.baseUrl + this.remedy.imageUrl;
    }
}

export interface Remedy {
    name: string;
    imageUrl: string;
}
