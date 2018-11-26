import { NgModule } from '@angular/core';

import { MatTooltipModule, MatGridListModule, MatChipsModule, MatProgressBarModule, MatDialogModule, MatButtonToggleModule, MatRadioModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatListModule, MatTabsModule, MatToolbarModule, MatCardModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatTabsModule,
        MatListModule,
        MatGridListModule,
        MatStepperModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonToggleModule,
        MatProgressBarModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatTabsModule,
        MatListModule,
        MatGridListModule,
        MatStepperModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonToggleModule,
        MatProgressBarModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule
    ]
})
export class MaterialModule {}