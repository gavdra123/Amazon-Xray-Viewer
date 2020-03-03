var nameList = [];

function start() {
    setTimeout(function() {
        if (window.location.origin.toUpperCase().includes("AMAZON")){
            $(".xrayQuickViewListItem").each((i,ele) =>{
                //if it contains portait image, its a person
                if ($(ele).hasClass("portraitImage")){
                    var currName = $(ele).find(".primaryText").html();
                    if (!nameList.includes(currName)){
                        console.log("Show the xray B/C " + currName);
                        showXRay();
                        nameList.push(currName);
                    }
                }
                else{
                    if (!$(ele).hasClass("alerted")){
                        console.log("Show the xray B/C " + $(ele).find(".primaryText").html());
                        showXRay();
                        $(ele).addClass("alerted");
                    }
                }
            });
        }
      start();
      //check every 5 seconds
    }, 5000);
}

function showXRay(){
    if(!$(".xrayQuickView").hasClass("show")) $(".xrayQuickView").addClass("show");
    //show xray for three seconds
    setTimeout(()=>{
        $(".xrayQuickView").removeClass("show");
    },3000);
}
//run it
start();