import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.ratingClicked.emit(`The Rating ${this.rating} was clicked!`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
}