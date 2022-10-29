import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Parking } from 'src/app/models/parking';
import { UserService } from 'src/app/services/parking.service';

@Component({
    selector: '',
    templateUrl: './create-parking.component.html',
    styleUrls: ['./create-parking.component.css']
})
export class CreateParkingComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
//    userForm: ;
    title = "Create a new Parking"
}