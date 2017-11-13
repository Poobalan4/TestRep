import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Application } from '../../model/application';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.component.html',
    styles: [`
        .space{    
            margin-top:10px;
        }
    `]

})

export class DetailComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }
    @Input() app: Application;
    @Output() editClicked = new EventEmitter<string>();
    @Output() deleteClicked = new EventEmitter();
    @Output() viewClicked = new EventEmitter();

    ngOnInit(): void {
        //this.app = this.route.snapshot.params['app'];
    }

    onEdit(): void {
        this.editClicked.emit("add");
    }

    onDelete(): void {
        this.deleteClicked.emit();
    }

    onChangeView():void{
        this.viewClicked.emit();
    }
}