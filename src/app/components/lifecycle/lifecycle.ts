import {Component, OnInit} from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RoutesRecognized,
  GuardsCheckStart,
  GuardsCheckEnd,
  ResolveStart,
  ResolveEnd,
  ActivationStart,
  ActivationEnd,
  ChildActivationStart,
  ChildActivationEnd, RouterEvent
} from '@angular/router';

@Component({
  selector: 'app-lifecycle',
  template: '<h1>LifecycleComponent</h1><div><b>lifeCycleState:</b><i>{{ lifeCycleState }}</i><br><br><span *ngFor="let myevent of eventArray">{{myevent | json}}<br></span><br><br></div>',
  styleUrls: ['lifecycle.css']
})
export class LifecycleComponent implements OnInit {

  lifeCycleState: string;
  eventArray: Array<string> = [];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      console.log("SUBSCRIBE RECEIVED");
      this.recordLifeCycleState(event);
    });

  }

  recordLifeCycleState(event){
    console.log("ROUTER EVENT = " + event);

   if (event instanceof NavigationStart) {
     this.lifeCycleState = "NavigationStart";
     this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof NavigationEnd) {
     this.lifeCycleState = "NavigationEnd";
     this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof NavigationCancel) {
     this.lifeCycleState = "NavigationCancel";
     this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof NavigationError) {
     this.lifeCycleState = "NavigationError";
      this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof RoutesRecognized) {
     this.lifeCycleState = "RoutesRecognized";
      this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof GuardsCheckStart) {
     this.lifeCycleState = "GuardsCheckStart";
      this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof GuardsCheckEnd) {
     this.lifeCycleState = "GuardsCheckEnd";
      this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof ResolveStart) {
     this.lifeCycleState = "ResolveStart";
      this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof ResolveEnd) {
     this.lifeCycleState = "ResolveEnd";
      this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof ActivationStart) {
     this.lifeCycleState = "ActivationStart";
      this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof ActivationEnd) {
     this.lifeCycleState = "ActivationEnd";
      this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof ChildActivationStart) {
     this.lifeCycleState = "ChildActivationStart";
      this.eventArray.push(this.lifeCycleState);
     } else if (event instanceof ChildActivationEnd) {
     this.lifeCycleState = "ChildActivationEnd";
      this.eventArray.push(this.lifeCycleState);
     } else {
     this.lifeCycleState = "UNKNOWN ROUTER EVENT";
      this.eventArray.push(this.lifeCycleState);
     }

  }

  ngOnInit() {
   // this.router.events.subscribe(event => {
   //   this.recordLifeCycleState(event);
   // });
  }


}
