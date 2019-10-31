import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule,
        DragDropModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule,
        DragDropModule
    ]
})
export class MaterialModule { }
