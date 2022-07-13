//274c77
var julyJuniorButton = $('.julyJuniorButton');
var julyJuniorText = $('.julyJuniorText');

var juneJuniorButton = $('.juneJuniorButton');
var juneJuniorText = $('.juneJuniorText');

var julySeniorButton = $('.julySeniorButton');
var julySeniorText = $('.julySeniorText');

var juneSeniorButton = $('.juneSeniorButton');
var juneSeniorText = $('.juneSeniorText');

julyJuniorButton.on("click", showJulyJuniorText);
function showJulyJuniorText() {
  julyJuniorText.toggleClass('hide');
}

juneJuniorButton.on("click", showJuneJuniorText);
function showJuneJuniorText() {
  juneJuniorText.toggleClass('hide');
}

julySeniorButton.on("click", showJulySeniorText);
function showJulySeniorText() {
  julySeniorText.toggleClass('hide');
}

juneSeniorButton.on("click", showJuneSeniorText);
function showJuneSeniorText() {
  juneSeniorText.toggleClass('hide');
}
var enter = $('.enter-btn')
enter.on("click", displayOpps)


var addHtml = $('.addHtml'); 
function displayOpps(event){
    event.preventDefault();
    var name = $('.name-input').val();
    if(document.getElementById("science").checked == true){ 
      addHtml.append(`<p> Hello, ${name}! You should check out: </p>`);  
      addHtml.append(`<br><a href = "https://oeop.mit.edu/programs/mostec">MIT MOSTEC</a><br><a href = "https://summer.harvard.edu/high-school-programs/pre-college-program/">Harvard Pre-College Program</a><br>`)
            }   
  else if(document.getElementById("technology").checked == true)  {
      addHtml.append(`<p> Hello, ${name}! You should check out: </p>`); 
      addHtml.append(`<br><a href = "https://www.kodewithklossy.com">Kode With Klossy</a><br><a href =    "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute/">Google CSSI</a><br><a href = "https://ctlo.caltech.edu/outreach/summerprograms/id-tech">iD Tech</a><br>`)
            }   
  else if(document.getElementById("engineering").checked == true) {   
      addHtml.append(`<p> Hello, ${name}! You should check out: </p>`);
      addHtml.append(`<br><a href = "https://oeop.mit.edu/programs/mostec">MIT MOSTEC</a><br><a href = "https://ctlo.caltech.edu/outreach/summerprograms/education-unlimited">Education Unlimited - CalTech</a><br>`)
            }   
  else if(document.getElementById("math").checked == true) {   
      addHtml.append(`<p> Hello, ${name}! You should check out: </p>`);
      addHtml.append(`<br><a href = "https://ctlo.caltech.edu/outreach/summerprograms/da-vinci-camp">Cal Tech Da Vinci Camp</a><br><a href = "https://sumac.spcs.stanford.edu/">Stanford University Mathematics Camp</a><br><a href = "https://summer.sas.upenn.edu/programs/high-school/academies/mathematics">UPenn Mathematics Academy</a><br><a href = "https://sites.duke.edu/swim/apply/">Duke Summer Workshop In Math</a><br><a href = "https://momath.org/home/transformations/">MoMath Summer Camp</a><br><a href = "https://www.ideamath.education/landing/programs/summer-program">IDEA MATH Summer Programs</a><br><a href = "https://www.awesomemath.org/summer-program/overview/program-information/">AwesomeMath Summer Program</a><br>`)
            }  
  else {   
    //nothing
            } 
  name.val = ""; 
} 
// var oppsText = $('p')
// var stemlink1 = $('.stemlink1')
// var stemlink2 = $('.stemlink2')
// var stemlink3 = $('.stemlink3')
// var stemlink4 = $('.stemlink4')
// var stemlink5 = $('.stemlink5')

// function displayOpps(event){ // the default is not being prevented (it is reloading) so add event to the () on line three
//   event.preventDefault();
//   var name = $('.name').val() // idk what you are trying to console.log here
//   var chosenField = $('input[name = field]:checked', 'form').val() // i do not think there should be "" around genre
//   console.log(name)
//   console.log(chosenField)
//   var opps;
//   if (chosenField === "science"){
//     //opps = "science camp"
//     //opps = <a href = "https://oeop.mit.edu/programs/mostec">MIT MOSTEC</a><a href = "https://summer.harvard.edu/high-school-programs/pre-college-program/">Harvard Pre-College Program</a>
//     stemlink1.title = "MIT MOSTEC"
//     stemlink1.href = "https://oeop.mit.edu/programs/mostec"
//     stemlink2.title = "Harvard Pre-College Program"
//     stemlink2.href = "https://summer.harvard.edu/high-school-programs/pre-college-program/"
//   } else if(chosenField == "technology"){
//     //opps = "technology camp"
//     //opps = <a href = "https://www.kodewithklossy.com">Kode With Klossy</a><a href =    "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute/">Google CSSI</a><a href = "https://ctlo.caltech.edu/outreach/summerprograms/id-tech">iD Tech</a>
//     stemlink1.title = "Kode With Klossy"
//     stemlink1.href = "https://www.kodewithklossy.com"
//     stemlink2.title = "Google CSSI"
//     stemlink2.href = "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute/"
//     stemlink3.title = "iD Tech (Cal Tech)"
//     stemlink3.href = "https://ctlo.caltech.edu/outreach/summerprograms/id-tech"
//   } else if(chosenField == "engineering"){
//     //opps = "engineering camp"
//     //opps = <a href = "https://oeop.mit.edu/programs/mostec">MIT MOSTEC</a><a href = "https://ctlo.caltech.edu/outreach/summerprograms/education-unlimited">Education Unlimited - CalTech</a>
//     stemlink1.title = "MIT MOSTEC"
//     stemlink1.href = "https://oeop.mit.edu/programs/mostec"
//     stemlink2.title = "Education Unlimited (Cal Tech)"
//     stemlink2.href = "https://ctlo.caltech.edu/outreach/summerprograms/education-unlimited"
//   } else if(chosenField == "math"){
//     //opps = "math camp"
//     //opps = <a href = "https://ctlo.caltech.edu/outreach/summerprograms/da-vinci-camp">Cal Tech Da Vinci Camp</a><a href = "https://sumac.spcs.stanford.edu/">Stanford University Mathematics Camp</a><a href = "https://summer.sas.upenn.edu/programs/high-school/academies/mathematics">UPenn Mathematics Academy</a><a href = "https://sites.duke.edu/swim/apply/">Duke Summer Workshop In Math</a><a href = "https://momath.org/home/transformations/">MoMath Summer Camp</a><a href = "https://www.ideamath.education/landing/programs/summer-program">IDEA MATH Summer Programs</a><a href = "https://www.awesomemath.org/summer-program/overview/program-information/">AwesomeMath Summer Program</a>
//     stemlink1.title = "Da Vinci Camp (Cal Tech)"
//     stemlink1.href = "https://ctlo.caltech.edu/outreach/summerprograms/da-vinci-camp"
//     stemlink2.title = "SUMAC (Stanford)"
//     stemlink2.href = "https://sumac.spcs.stanford.edu/"
//     stemlink3.title = "UPenn Mathematics Academy"
//     stemlink3.href = "https://summer.sas.upenn.edu/programs/high-school/academies/mathematics"
//     stemlink4.title = "SWiM (Duke)"
//     stemlink4.href = "https://sites.duke.edu/swim/apply/"
//     stemlink5.title = "MoMath Summer Camp"
//     stemlink5.href = "https://momath.org/home/transformations/"
//   } else{
//     opps = "NOT DETECTED."
//   }
//   oppsText.text(`Hello ${name}! Based on your selection, you should check out:`)
//   name.val = "";
//   // stemlink1.href = ""
//   // stemlink2.href = ""
//   // stemlink3.href = ""
//   // stemlink4.href = ""
//   // stemlink5.href = ""
// }