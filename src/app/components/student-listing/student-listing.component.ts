import { Component } from '@angular/core';
import { Student } from '../../interfaces';
@Component({
    selector: 'student-listing',
    templateUrl: './student-listing.component.html'
})
export class StudentListingComponent {
    students: Student[] = [
        {
            name: 'Max',
            surname: 'Mustermann',
            zipcode: '12345',
            city: 'Musterstadt',
            region: 'Musterregion',
        },
        {
            name: 'Maria',
            surname: 'Musterfrau',
            zipcode: '12345',
            city: 'Musterstadt',
            region: 'Musterregion',
        }
    ];
    displayedColumns = ['name','surname','zipcode','city','region'];
}
