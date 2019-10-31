import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class MaterialModule { }
