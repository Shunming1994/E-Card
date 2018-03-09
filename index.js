		var world4 = document.getElementById("world4"),
			poison = document.getElementById("poison"),
			world5 = document.getElementById("world5"),
			japan = document.getElementById("japan"),
			taiwan = document.getElementById("taiwan"),
			china = document.getElementById("china"),
			korea = document.getElementById("korea"),
			vietnam = document.getElementById("vietnam"),
			world6 = document.getElementById("world6"),
			bead = document.getElementById("bead"),
			information = document.getElementById("displayinfo"),
			world7 = document.getElementById("world7"),
			mugwort = document.getElementById("mugwort"),
			yuQuan = document.getElementById("yuQuan");
			
			var bar1 = document.getElementById("bar1"),
                bar2 = document.getElementById("bar2"),
                bar3 = document.getElementById("bar3"),
                bar4 = document.getElementById("bar4"),
                bar5 = document.getElementById("bar5"),
                bar6 = document.getElementById("bar6"),
                bar7 = document.getElementById("bar7"),
                ProgressF = document.getElementById("ProgressF"),
                barcount = 0,
                barclaim1 = 0,
                barclaim2 = 0,
                barclaim3 = 0,
                barclaim4 = 0,
                barclaim5 = 0,
                barclaim6 = 0,
                barclaim7 = 0,
                barclaim8 = 0;

        $(document).ready(function() {
			console.log("ready");
		//World 1 Animations			
		$("#world1").click(function(){
			$("#yuQuan").addClass("iImages");
            $("#yuQuan").fadeIn(2000).delay(1000);
            $("#yuQuan").animate({
			top: "+340",
			opacity: "0"
  			});
			$("#world1").delay(3000).fadeOut(2000);
			information.innerHTML = "The holiday commemorates the life and death of a famous Chinese scholar named Qu Yuan who had died in a river";
			
			if (barclaim1 == 0){
                
                barcount++;
                bar1.style.opacity = "1";
                barclaim1++
                }
                
                
                if (barcount == 8){ 
                    ProgressF.style.opacity = "1";
                    ProgressF.style.zIndex = "30";
                    
					information.style.fontSize = "10pt";
                    information.innerHTML = "Click on the Blue Bar";                    }
                                        
        });
		//World 2 Animations	
		$("#world2").click(function(){
			$("#zongZi").fadeIn(1000).delay( 2000 );
        	$("#zongZi").toggleClass('zongZianimate');
			$("#zongZi").slideUp(2000);
			$("#world2").fadeOut(6000);
			information.innerHTML = "Zongzi is a sticky rice with various fillings that was used to feed the fishes. They do this because it is believed to distract the fishes from eating Qu Yuan.";
			
			if (barclaim2 == 0){
                
                barcount++;
                bar2.style.opacity = "1";
                barclaim2++
                }
                
                
                if (barcount == 8){ 
                    ProgressF.style.opacity = "1";
                    ProgressF.style.zIndex = "30";
                    
                    information.style.fontSize = "10pt";
                    information.innerHTML = "Click on the Blue Bar";
                    }
                                        
		});
		//World 3 Animations	
		$("#world3").click(function(){
			$("#boat").fadeIn(2000);
			$("#boat").toggleClass('boatanimate');
			$("#boat").delay( 2000 ).animate({
				right: "200",
				opacity: "0"
			});
			information.style.fontSize = "10pt";
			information.innerHTML = "Dragon boat races are typically 500 meters, but occasionally there are 250m, 1000m, 2000m, and marathon races. The leader of the boat sits in the front, beating his drum to encourage his team. Today, a boat usually has 22 paddlers, a drummer in the front and a setterer at the rear. ";
			
			$("#world3").toggleClass('world3animate');
			 setTimeout(function() {
				 $('#world3').slideUp(500);
			 		}, 6000);
			
			if (barclaim3 == 0){
                
                barcount++;
                bar3.style.opacity = "1";
                barclaim3++
                }
                
                
                if (barcount == 8){ 
                    ProgressF.style.opacity = "1";
                    ProgressF.style.zIndex = "30";
                    
                    information.style.fontSize = "10pt";
                    information.innerHTML = "Click on the Blue Bar";
                    }
                                        
		});
			});	
			
		//World 4 Animations	
		world4.addEventListener("click", function(){
			poison.style.opacity ="1";
			poison.style.bottom = "190px";
			poison.style.width = "100px";
			poison.style.left = "115px";
			poison.classList.add("poisonanimate");
			$("#poison").delay(6000).fadeOut(1000);
			$("#world4").delay(6000).fadeOut(2000);			
			information.style.fontSize = "10pt";
			information.innerHTML = "According to the superstitious, the water in a well is poisonous on that day, so people  would prepare enough water in advance and avoid drinking from the well during the festival."
			
			if (barclaim4 == 0){
                
                barcount++;
                bar4.style.opacity = "1";
                barclaim4++
                }
                
                
                if (barcount == 8){ 
                    ProgressF.style.opacity = "1";
                    ProgressF.style.zIndex = "30";
                    
                    information.style.fontSize = "10pt";
                    information.innerHTML = "Click on the Blue Bar";
                    }
                                        
		});
		//world 5 Animations
			japan.addEventListener("click", function(){
			japan.style.opacity = "0";
			korea.classList.add("koreaAnimate");
			taiwan.classList.add("taiwanAnimate");
			china.classList.add("chinaAnimate");
			vietnam.classList.add("vietanimate");
			$("#world5").delay(10000).fadeOut(1000);
			information.innerHTML = "Countries that celebrate this Festival are China, Vietnam, South Korea, Japan, and Taiwan."
				
				if (barclaim5 == 0){
                
                barcount++;
                bar5.style.opacity = "1";
                barclaim5++
                }
                
                
                if (barcount == 8){ 
                    ProgressF.style.opacity = "1";
                    ProgressF.style.zIndex = "30";
                    
                    information.style.fontSize = "10pt";
                    information.innerHTML = "Click on the Blue Bar";
                    }
                                        
		});
		// World 6 Animations
			bead.addEventListener("click", function(){
				console.log("bead");
				bead.classList.add("iImages");
				bead.classList.add("beadanimate");
				bead.style.opacity = "0";
				world6.style.opacity= "0";
				information.innerHTML = "During the festival, children have colored silks tied (green, white, yellow, red, and black) around their wrists and ankles to protect them from illness"
				
				if (barclaim6 == 0){
                
                barcount++;
                bar6.style.opacity = "1";
                barclaim6++
                }
                
                
                if (barcount == 8){ 
                    ProgressF.style.opacity = "1";
                    ProgressF.style.zIndex = "30";
                    
                    information.style.fontSize = "10pt";
                    information.innerHTML = "Click on the Blue Bar";
                    }
                                        
			});
			// World 7 Animations 
			mugwort.addEventListener("click", function(){
				information.style.fontSize = "11pt";
				information.innerHTML = " Chinese mugwort (considered a magic herbal medicine to cure heat and damp related disease in ancient time) would be placed on the doors of residents, believed to keep sickness away.";
				mugwort.style.opacity = "0";
				world7.style.opacity = "0";
				
				if (barclaim7 == 0){
                
                barcount++;
                bar7.style.opacity = "1";
                barclaim7++
                }
                
                
                if (barcount == 8){ 
                    ProgressF.style.opacity = "1";
                    ProgressF.style.zIndex = "30";
                    
                    information.style.fontSize = "10pt";
                    information.innerHTML = "Click on the Blue Bar";
                    }
                                        
			});

var  finalW = document.getElementById("FinalWrap");
var fTaiwan = document.getElementById("finalTaiwan");
var fViet = document.getElementById("finalViet");
var fIndia = document.getElementById("finalIndia");
var finalI = document.getElementById("FinalInformation");
var finalP = document.getElementById("displayFinal");

ProgressF.addEventListener("click", function(){
	barclaim8++;
	console.log("ProgressF")
	finalW.style.width = "700px";
	finalW.style.height = "700px";
	finalW.style.zIndex = "999";
	fViet.style.display = "block";
	fTaiwan.style.display = "block";
	fIndia.style.display = "block";
	});
fTaiwan.addEventListener("click", function(){
	finalP.innerHTML = "Wrong. Taiwan does celebrate this Festival.";
});
fViet.addEventListener("click", function(){
	finalP.innerHTML = "Wrong. Vietnam does celebrate this Festival.";
});
fIndia.addEventListener("click", function(){
	finalP.innerHTML = "Correct. India does not celebrate this Festival.";
});




