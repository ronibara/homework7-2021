var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

})


document.querySelector("#slider").addEventListener("click", function() {
	Template.yourTemplate.events({
		'change input[type=range]': function(event){
		   var sliderValue = event.currentTarget.value;
		   Session.set('sliderValueIs', sliderValue);
		   var final_vol = sliderValue / 100;
		   video.volume = final_vol;
		   document.querySelector("#volume").innerHTML = sliderValue + "%";
	}
	  })
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	var val = document.getElementById("slider").value;
	document.querySelector("#volume").innerHTML = val + "%";
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted = false) {    
		video.muted = true;
		video.volume = 0;
		document.querySelector("#mute").value = "Unmute";
 	}
 	else {
	 video.muted = false;
	 document.querySelector("#mute").value = "Mute";
 	}
});

// document.removeEventListener() 

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	var stopper = video.duration - 15;
	console.log("Original Location " + video.currentTime)
	if (video.currentTime < stopper){
		video.currentTime += 15;
	}
	else {
		video.currentTime = 0;
	}
	console.log("New Location " + video.currentTime);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
	video.className = "video";

});