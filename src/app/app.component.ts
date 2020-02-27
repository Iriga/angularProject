import { Component } from '@angular/core';
import { PostList } from './post-list';
import { Post } from './post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {

    title = 'Discovering the World';
    public categories = ["All", "Travel", "Lifestyle", "Business", "Food", "Work"];
    public list = [];

    react:Post ={
        tittle:"React",
        comments: 5,
        description:"La herencia es específica de la programación orientada a objetos, donde una clase nueva se crea a"+
        "partir de una clase existente. La herencia (a la que habitualmente se denomina subclase)"+
        "proviene del hecho de que la subclase (la nueva clase creada) contiene las atributos y"+
        "métodos de la clase primaria. La principal ventaja de la herencia es la capacidad"+
        "para definir atributos y métodos nuevos para la subclase"+
        "que luego se aplican a los atributos y métodos heredados.",
        category: "framework",
        image: "https://i.picsum.photos/id/1041/5184/2916.jpg"
    }

    angular:Post ={
        tittle:"angular",
        comments: 4,
        description:"La herencia es específica de la programación orientada a objetos, donde una clase nueva se crea a"+
        "partir de una clase existente. La herencia (a la que habitualmente se denomina subclase)"+
        "proviene del hecho de que la subclase (la nueva clase creada) contiene las atributos y"+
        "métodos de la clase primaria. La principal ventaja de la herencia es la capacidad"+
        "para definir atributos y métodos nuevos para la subclase"+
        "que luego se aplican a los atributos y métodos heredados.",
        category: "framework",
        image: "https://i.picsum.photos/id/1041/5184/2916.jpg"
    }

    public allList = [];
    public travelList = [this.react, this.angular];
    public lifestyleList = [this.react];
    public businessList = [this.react];
    public foodList = [this.react];
    public workList = [this.react];


    showList(cat) {
        console.log(cat);
        this.list = [];
        switch (cat) {
            case "All":
                this.getAll(this.travelList);
                this.getAll(this.lifestyleList);
                this.getAll(this.businessList);
                this.getAll(this.foodList);
                this.getAll(this.workList);
                break;
            case "Travel":
                this.list = this.travelList;
                break;
            case "Lifestyle":
                this.list = this.lifestyleList;
                break;
            case "Business":
                this.list = this.businessList;
                break;
            case "Food":
                this.list = this.foodList;
                break;
            case "Work":
                this.list = this.workList;
                break;
        }
    }

    getAll(array) {
        for (let i = 0; i < array.length; i++) {
            this.list.push(array[i]);
        }
    }
}
