import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostList } from '../post-list';
import { AppComponent } from '../app.component';
import { isNgTemplate } from '@angular/compiler';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: [
        './list.component.css',
        '../app.component.css'
    ]
})

export class ListComponent implements OnInit {

    @Input() listObject;

    constructor() {
    }

    ngOnInit(): void {

    }

    deletePost(tittle) {
        // console.log('listObject', this.listObject);
        let index = this.listObject.findIndex(item => item.tittle == tittle);
        // console.log('index', index);
        this.listObject.splice(index,1);
    }

    editPost(post) {
        console.log('Edit Post ->', post);
    }

}
