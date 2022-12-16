var interview = function(gradScore, hscScore, sscScore, candidateName){
    var result = (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) ? `Congatulations ${candidateName}, you are eligible for TCS Interview` : `Sorry ${candidateName}, unfortunately you are not eligible for Interview`;
    console.log(`${result}`); 
}
interview(80, 86, 90, "Pooja");
interview(70, 65, 55, "Sayali");
interview(60, 79, 88, "Poonam");