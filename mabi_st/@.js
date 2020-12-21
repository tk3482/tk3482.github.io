(function(){

	var eScripts = document.querySelectorAll("script[name='mabi_st']");

	for(var i = 0; i < eScripts.length; ++i){

		var eScript = eScripts[i];

		if(eScript.getAttribute("processed")){
			continue;
		}
		eScript.setAttribute("processed", "1");

		var data = eScript.src.split("?")[1];

		var eIframe = document.createElement("iframe");
		
		eIframe.style.width = "180px";
		eIframe.style.height = "280px";
		eIframe.style.margin = "0";
		eIframe.style.padding = "0";
		
		eIframe.width = "180";
		eIframe.height = "280";
		eIframe.allowtransparency = true;
		eIframe.scrolling = "no";
		eIframe.frameborder = "0";
		eIframe.border = "0";
		eIframe.src = "https://tk3482.github.io/mabi_st?" + data;
		
		eScript.parentNode.insertBefore(eIframe, eScript);
	}
})();
