import { Component, OnInit, OnDestroy,trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                animate(300, keyframes([
                    style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                    style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
                    style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
                ]))
            ]),
            transition('* => void', [
                animate(300, keyframes([
                    style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
                    style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                    style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
                ]))
            ])
        ])
    ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private subscription: Subscription;

    constructor(private slService: ShoppingListService) {


    }
    // doNext() {
    //     if(this.next < this.heroes.length) {
    //         this.staggeringHeroes.push(this.heroes[this.next++]);
    //     }
    // }

    // doNext() {
    //     if(this.next < this.heroes.length) {
    //         this.staggeringHeroes.push(this.heroes[this.next++]);
    //     }
    // }



    ngOnInit() {
        this.ingredients = this.slService.getIngredients();
        this.subscription = this.slService.ingredientsChanged
            .subscribe(
                (ingredients: Ingredient[]) => {
                    this.ingredients = ingredients;
                }
            );
    }

    onEditItem(index: number) {
        this.slService.startedEditing.next(index);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}