'use strict'

var sketch1 = function (p) {
    p.r = 150;
    p.a;
    p.aVel = 0.0;
    p.aAcc = .0001;
    p.x=400;
    p.y=300;

    p.setup = function () {
        var c=p.createCanvas(400, 300);
        p.y=700;
        p.a = p.PI / 2;
        c.position(windowWidth/2-420, windowHeight/2+700);
    }

    p.draw = function () {
        p.background(0);
        p.translate(p.width / 2, p.height / 2);
        p.xoff = p.cos(p.a) + 1;
        p.yoff = p.sin(p.a) + 1;
        p.r = p.map(p.noise(p.xoff, p.yoff), 0, 1, 10, 200);
        p.x = p.r * p.cos(p.a);
        p.y = p.r * p.sin(p.a);

        p.fill(255, 0, 0);
        p.stroke(255, 0, 0);
        p.line(0, 0, p.x, p.y);
        p.ellipse(p.x, p.y, 50, 50);
        p.a += p.aVel;
        p.aVel += p.aAcc;
        p.aVel = p.constrain(p.aVel, 0, 1);
    }

    function windowResized() {

}
}

var sketch2 = function (p) {
    p.r = 150;
    p.a;
    p.aVel = 0.0;
    p.aAcc = .001;

    p.setup = function () {
       var c= p.createCanvas(400, 300);
        p.a = p.PI / 2;
         c.position(windowWidth/2, windowHeight/2+700);
    }

    p.draw = function () {
        p.background(0);
        p.translate(p.width / 2, p.height / 2);
        p.xoff = p.cos(p.a) + 1;
        p.yoff = p.sin(p.a) + 1;
        p.r = p.map(p.noise(p.xoff, p.yoff), 0, 1, 10, 200);
        p.x = p.r * p.cos(p.a);
        p.y = -p.r * p.sin(p.a);

        p.fill(255);
        p.stroke(255);
        p.line(0, 0, p.x, p.y);
        p.ellipse(p.x, p.y, 40, 40);
        p.a += p.aVel;
        p.aVel += p.aAcc;
        p.aVel = p.constrain(p.aVel, 0, .05);
    }
}

var sketch3 = function (p) {
    p.r = 150;
    p.a;
    p.aVel = 0.0;
    p.aAcc = .0001;

    p.setup = function () {
        var c=p.createCanvas(400, 300);
        p.a = p.PI / 4;
         c.position(windowWidth/2+420, windowHeight/2+700);
    }

    p.draw = function () {
        p.background(0);
        p.translate(p.width / 2, p.height / 2);
        p.xoff = p.cos(p.a) + 1;
        p.yoff = p.sin(p.a) + .1;
        p.r = p.map(p.noise(p.xoff, p.yoff), 0, 1, 10, 200);
        p.x = p.r * p.cos(p.a);
        p.y = p.r * p.sin(p.a);

        p.fill(0, 0, 255);
        p.stroke(0, 0, 255);
        p.line(0, 0, p.x, p.y);
        p.ellipse(p.x, p.y, 20, 20);
        p.a += p.aVel;
        p.aVel += p.aAcc;
        p.aVel = p.constrain(p.aVel, 0, 1);
    }
}

var myp51 = new p5(sketch1);
var myp52 = new p5(sketch2);
var myp53 = new p5(sketch3);
