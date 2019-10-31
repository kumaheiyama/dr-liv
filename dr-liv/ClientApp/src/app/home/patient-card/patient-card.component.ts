import { Component, OnInit, Input } from '@angular/core';
import { Remedy } from '../remedy-card/remedy-card.component';

@Component({
    selector: 'patient-card',
    templateUrl: './patient-card.component.html',
    styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
    @Input() patient: Patient;

    baseUrl: string = '../../assets/patients/';

    constructor() { }

    ngOnInit() {
    }

    getUrl() {
        return this.baseUrl + this.patient.imageUrl;
    }
}

export interface Patient {
    name: string;
    imageUrl: string;
    curedImageUrl: string;
    remedies: Remedy[];
}
