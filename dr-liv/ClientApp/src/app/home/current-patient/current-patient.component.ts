import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../patient-card/patient-card.component';

@Component({
    selector: 'current-patient',
    templateUrl: './current-patient.component.html',
    styleUrls: ['./current-patient.component.css']
})
export class CurrentPatientComponent implements OnInit {
    @Input() patient: Patient;

    baseUrl: string = '../../assets/patients/';

    constructor() { }

    ngOnInit() {
    }

    getUrl() {
        return this.baseUrl + this.patient.imageUrl;
    }
}
