

## small project 
         - dependency injection
         - two-way data binding 
         - filters


    1-  start the app:
                        ng new my-app
                        cd my-app


    2 - files 

            ``` src/app/app.component.ts
                                            import { Component } from '@angular/core';
                                            import { DataService } from './data.service'; // Import the service



                                            @Component({
                                                        selector: 'app-root',
                                                        templateUrl: './app.component.html',
                                                        styleUrls: ['./app.component.css']
                                            })
                                            export class AppComponent {
                                                    title = 'Angular Example';
                                                    inputText: string = '';
                                                    data: string[] = [];

                                                constructor(private dataService: DataService) { // Dependency Injection
                                                            this.data = this.dataService.getData();
                                                }
                                            }
            ```

            ```src/app/card/card.component.ts
            import { Component, Input } from '@angular/core';

            @Component({
                            selector: 'app-card',
                            templateUrl: './card.component.html',
                            styleUrls: ['./card.component.css']
                      })
            export class CardComponent {

                       @Input() name: string = ''; // Input property to receive 'name'

            }
            ```

            ```src/app/data.service.ts
                                        import { Injectable } from '@angular/core';

                                        @Injectable({
                                             providedIn: 'root'
                                        })
                                        export class DataService {

                                                private sampleData: string[] = ['Apple', 'Banana', 'Cherry'];

                                            getData(): string[] {
                                                         return this.sampleData;
                                                    }
                                        }
            ```
        

            ```src/app/app.component.html

                    <div>
                        <h1>{{ title }}</h1>

                        <label for="filter">Filter:</label>
                        <input id="filter" [(ngModel)]="inputText" placeholder="Enter filter text">

                        <app-card [name]="inputText"></app-card>

                        <ul>
                            <li *ngFor="let item of data | filter:inputText">{{ item }}</li>
                        </ul>
                    </div>   
            ```

            ```src/app/card/card.component.html

                 <div class="card">
                     <h2>{{ name }}</h2>
                </div>
            ```

            ```src/app/filter.pipe.ts
                                import { Pipe, PipeTransform } from '@angular/core';

                                @Pipe({
                                          name: 'filter'
                                })
                                export class FilterPipe implements PipeTransform {


                                         transform(items: string[], filterText: string): string[] {

                                                                        if (!items) return [];
                                                                        if (!filterText) return items;
                                                                        filterText = filterText.toLowerCase();
                                                                        return items.filter(item => item.toLowerCase().includes(filterText));
                                                                   }
                                }
            ```

            ``` src/app/app.module.ts
                import { NgModule } from '@angular/core';
                import { BrowserModule } from '@angular/platform-browser';
                import { FormsModule } from '@angular/forms'; 

                import { AppComponent } from './app.component';
                import { DataService } from './data.service';
                import { FilterPipe } from './filter.pipe'; 

                @NgModule({
                declarations: [
                                AppComponent,
                                CardComponent,
                                FilterPipe 
                              ],
                imports: [
                                BrowserModule,
                                FormsModule // Import FormsModule for two-way binding
                         ],
                providers: [DataService],
                bootstrap: [AppComponent]
                })
                export class AppModule { }
            
            ```

## Angular directives

              1- *ngFor  : 
                            <ul>
                                <li *ngFor="let fruit of fruits">{{ fruit }}</li>     // variable: "fruits"  in the class 
                            </ul>
             
              2- *ngSwitch:  

                    <button (click)="selectColor('red')">Select Red</button>     // fn variable in class  ==> selectColor(color: string) => this.selectedColor = color
                    <button (click)="selectColor('blue')">Select Blue</button>
                    <button (click)="selectColor('')">Deselect Color</button>

                    <div [ngSwitch]="selectedColor">                             //  variable: "selectedColor"  in the class 
                            <div *ngSwitchCase="'red'">Red color selected</div>
                            <div *ngSwitchCase="'blue'">Blue color selected</div>
                            <div *ngSwitchDefault>No color selected</div>
                    </div>
              


              3- *ngTemplateOutlet

                    <ng-template #myTemplate>
                         <p>Template content here</p>
                    </ng-template>

                    <ng-container *ngTemplateOutlet="myTemplate"></ng-container>

            
              4- *ngIf 

                        <div *ngIf="condition; else elseBlock">Content when condition is true</div>
                        <ng-template #elseBlock>Content when condition is false</ng-template>

                                   or 
                
                        <ng-template #loggedIn>
                               <div>Welcome user !</div>
                        </ng-template>

                        
                        <ng-template #login>
                             <div>Please log in</div>
                        </ng-template>

                        
                        <ng-container *ngIf="isLoggedIn; else login">
                                <ng-container *ngTemplateOutlet="loggedIn"></ng-container>
                        </ng-container>


            
              
    

## eventHandlers 
                    
            <button (click)="toggleCondition()">Toggle Condition</button>
