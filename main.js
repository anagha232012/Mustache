mX = 0;
mY = 0 ;

function preload(){
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup()
{
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
   console.log('PoseNet Is Initialize');
}

function draw(){
 image(video, 0, 0, 500, 400);
 image(mustache, mX, mY, 30, 30);
}

function gotPoses(results){

    if(results.length > 0)
    {
        console.log(result);
        console.log("mustache x = " + results[0].pose.nose.x);
        console.log("mustache y = " + results[1].pose.nose.y);
    }
}

function take_snapshot(){
    save('mustache.png');
}