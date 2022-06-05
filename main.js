function start_classification() {
    navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7lHKmZpy1/model.json', modelready)
}

function modelready() {
    classifier.classify(gotresults);
}