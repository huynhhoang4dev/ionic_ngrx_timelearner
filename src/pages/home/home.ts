import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Question } from '../../models/TimeLearner.model'
import * as actions from '../../actions/TimeLearner.action';
import * as fromRoot from '../../reducers';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  score = 0;
  currentIndexQuestion = 0;
  currentQuestion: Question;
  numQuestions = 10;
  timeToDisplay: string = "12:00";
  t1='1';
  t2='2';
  t3='3';

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<fromRoot.State>) {
    

  }
  submit(t) {
    //console.log(t)
    this.store.dispatch(new actions.selectOption(t)); 
  }

  ngOnInit() {
    this.store.select(store => store.timelearner)
    .subscribe(
      res => {
        console.log('OMG',res)
        this.score = res.score;
        this.currentIndexQuestion = res.currentQuestion + 1;
        this.currentQuestion = res.questions[res.currentQuestion];
        this.numQuestions = res.questions.length;
        this.t1 = this.currentQuestion.options[0];
        this.t2 = this.currentQuestion.options[1];
        this.t3 = this.currentQuestion.options[2];
        //this.timeToDisplay = this.currentQuestion.time_do_display;
        console.log('zz')
        console.log(this.currentQuestion.time_to_display);
        this.timeToDisplay = this.currentQuestion.time_to_display;
      }
    )  
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage');
  // }
  ngAfterViewInit(){

    

      console.log('nah',this.timeToDisplay)
    
    //Draw UI
        
        //setInterval(drawClock, 1000);
        //drawClock(this.timeToDisplay);
        var canvas: any = document.getElementById("canvas"); 
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.90
        drawClock(this.timeToDisplay);

      
        function drawClock(timeString) {
          drawFace(ctx, radius);
          drawNumbers(ctx, radius);
          drawTime(ctx, radius, timeString);
        }
    
        function drawFace(ctx, radius) {
          var grad;
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, 2*Math.PI);
          ctx.fillStyle = 'white';
          ctx.fill();
          grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
          grad.addColorStop(0, '#333');
          grad.addColorStop(0.5, 'white');
          grad.addColorStop(1, '#333');
          ctx.strokeStyle = grad;
          ctx.lineWidth = radius*0.1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
          ctx.fillStyle = '#333';
          ctx.fill();
        }
    
        function drawNumbers(ctx, radius) {
          var ang;
          var num;
          ctx.font = radius*0.15 + "px arial";
          ctx.textBaseline="middle";
          ctx.textAlign="center";
          for(num = 1; num < 13; num++){
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius*0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius*0.85);
            ctx.rotate(-ang);
          }
        }
    
        function drawTime(ctx, radius, timeString){
          console.log(timeString);
          let h = timeString.substring(0,2);
          let m = timeString.substring(3,6);
          let i_h = parseInt(h);
          let i_m = parseInt(m);
          var hour = i_h; 
          var minute = i_m;
          var second = 0;


          hour=hour%12;
          hour=(hour*Math.PI/6)+
            (minute*Math.PI/(6*60))+
            (second*Math.PI/(360*60));
          drawHand(ctx, hour, radius*0.5, radius*0.07);
          //minute
          minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
          drawHand(ctx, minute, radius*0.8, radius*0.07);
          // second
          // second=(second*Math.PI/30);
          // drawHand(ctx, second, radius*0.9, radius*0.02);
        }
    
        function drawHand(ctx, pos, length, width) {
          ctx.beginPath();
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.moveTo(0,0);
          ctx.rotate(pos);
          ctx.lineTo(0, -length);
          ctx.stroke();
          ctx.rotate(-pos);
        }
    
      }
  
}

