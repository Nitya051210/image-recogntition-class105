Webcam.set({
    width:350,
    height :300,
    image_format:'Png',
    image_quality:90
});
camera = document.getElementById("camera");

webcam.attach ('#camera') ;


function take_snapshot()
{
Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id ="captured_image" src=" '+data_uri+'"/>';
});
}

console.log('ml5 version' , ml5.version); 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OA3N5cUiF/', modelloaded);

function modalloaded() {
    console.log ('Model Loaded!');
}

function check () {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error){
        console.error(error);
    }
        else {
            console.log(result);
            document.getElementById("result_object_name").innerHTML = results[0].label;
            document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.tofixed(3);
        }
    }