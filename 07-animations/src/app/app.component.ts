import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationEvent,
  keyframes,
  group,
  useAnimation
} from '@angular/animations';

import {  bounce , shake} from 'ng-animate'

const firstAnimation = trigger('first',[
  state('green',style({
    'background-color':'green',
    width: '100%'
  })),
  state('blue',style({
    'background-color':'blue',
    width: '20%'
  })),
  transition('green <=> blue',animate(500)),
]);

const secondAnim = trigger('second',[
  state('on',style({
    opacity: 1
  })),
  state('off',style({
    opacity: 0,
    
  })),
  transition('on <=> *', [
    style({
      'background-color':'blue'
    }),
    animate(1000,style({
      height:'200px',
    })),
    animate(2000)
  ])
])

const thirdAnimation =     trigger('third',[
  state('in',style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('void => *',[
    style({
      opacity: 0,
      transform: 'translateX(-200px)'
    }),
    animate(500)
  ]),
  transition('* => void',[
    animate(500,style({
      opacity: 0,
      transform: 'translateX(200px)'
    }))
  ])
])

const fourthAnimation =   trigger('fourth', [
  state('off', style({
    backgroundColor: 'yellow',
  })),
  state('on', style({
    backgroundColor: 'orange',
  })),
  transition('* <=> *', [
    animate(1000, keyframes([
      style({
        backgroundColor: 'yellow',
        offset: 0
      }),
      style({
        backgroundColor: 'orange',
        offset: 0.5
      })
    ]))
  ])
])

const groupfourthAnimation = trigger('fourth', [
  state('off', style({
    backgroundColor: 'yellow',
  })),
  state('on', style({
    backgroundColor: 'orange',
  })),
  transition('* <=> *', [
    group ([ 
      animate(1000, keyframes([
        style({
          backgroundColor: 'yellow',
          height: '100px',
          offset: 0
        }),
        style({
          backgroundColor: 'orange',
          height: '200px',
          offset: 0.5
        }),
        style({
          backgroundColor: 'red',
          height: '300px',
          offset: 1
        })
      ])),
    animate(1000, keyframes([
        style({
          backgroundColor: 'purple',
          width:'25%',
          offset: 0
        }),
        style({
          backgroundColor: 'aqua',
          width:'50%',
          offset: 0.5
        }),
        style({
          backgroundColor: 'maroon',
          width:'100%',
          offset: 1
        })
      ])),
    ]),
  ])
])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    firstAnimation,
    secondAnim,
    thirdAnimation,
    trigger('parent',[
      transition(':enter',[]),
    ]),
    groupfourthAnimation,
    trigger('fith',[
     transition('false => true', useAnimation(bounce,{
       params: { timing: 1, delay: 1 }
     })),
     transition('true => false', useAnimation(shake,{
        params: { timing: 2, delay: 0 }
     }))
    ]),
  
  ]
})

export class AppComponent {
  firstState = 'green'
  secondState = 'on';
  fourthtState = 'off';
  fithState = true;
  
  listOfNames =  ['francis', 'ron' ];

  OnAmimationEvent(event: AnimationEvent) {
    // triggerName
    // console.log(event.triggerName)

    // phaseName
    // console.log(event.phaseName)

    // totalTime
    // console.log(event.totalTime)

    // element
    // console.log(event.element)

    // fromState
    // console.log(event.fromState)

    // toState
    console.log(event.toState)
    
  }

  fithAnimationChange (){

    this.fithState = !this.fithState;

  //  if( this.fithState){
  //    this.fithState = false;
  //  } else {
  //     this.fithState = true;
  //   }
  }

  fourthtAnimationChange(){
    this.fourthtState = this.fourthtState === 'off' ? 'on' : 'off'
  }

  secondAnimChange(){
    this.secondState = this.secondState === 'on' ? 'off' : 'on'
    // if(this.secondState === 'on'){
    //   this.secondState = 'off'
    // } else {
    //   this.secondState = 'on'
    // }
  }


  firstAnimationChange(){

    this.firstState = this.firstState === 'green' ? 'blue' : 'green'

    // this.firstState === 'green' ? this.firstState = 'blue' : this.firstState = 'green'

    // if(this.firstState === 'green'){
    //   this.firstState = 'blue'
    // } else {
    //   this.firstState = 'green'
    // }
  }

  addName(name: string) {
    this.listOfNames.push(name);
  }

  deleteItemlist(element: number) {
    this.listOfNames.splice(element, 1);
  }

}
