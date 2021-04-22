const Start = document.getElementById("Start");
const TextArea = document.getElementById("Textarea");
const Video = document.getElementById("Video");
const Img = document.getElementById("Img");

var SpeechRecognition = window.webkitSpeechRecognition;
var TextToSpeech = new SpeechRecognition();

Start.addEventListener("click", () => {
    TextArea.innerHTML = "";
    TextToSpeech.start();
});
TextToSpeech.onresult = function(e) {
    console.log(e);
    var con = e.results[0][0].transcript;
   
    TextToSpeech.innerHTML = con;
    console.log(con);
    if (con == "hai") {
        speak();
    }
}

function speak() {
    var hi = window.speechSynthesis;
    var speakdata = "taking selfi";

    var utterp = new SpeechSynthesisUtterance(speakdata);
    hi.speak(utterp);
    Webcam.attach(Video);
    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("img").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}