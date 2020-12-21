(function(){

	var eScripts = document.querySelectorAll("script[name='mabi_st']");

	var accounts = {
		"rywJ": "slc:0,race:H,style:blue,d:000h0y0P0*1e1v1M1)2b2s2J2!383p3G454m4D4U595k5B5R5_6gzvzMz)AbGaGsGIGZH76x6O6~7d7u7L8Z979o9La4alaCaTb1bibzbQcfcwcNc-d'e9y1EgEOE~HoKwKNK-LKeqeHeYf6fnfEfVgkgBgSh0hhhyhPh*ieiBiMi)jbjsjRj!CDCUD2DjLcLtkpkGkXl5lmlDlUm2mjmAmRm_ngnxnOn~ouoLo(paprpIFdFuFLF(pZq7qoqFqWr4rlrCrTs1sAsQs_tftwtNt-ucutuKu'DADRD_P0v9vqvHvYw6wEwVx3xkxBxSAJA!B8BpBGBXC5Cm9WyhyyyPy*zeNWO4OTHFHWI4IlITJ1JiJzJRJ_KgL(MaMrMZN7NoNFPhPyPPP*QeQvQ)RbRsRJR!S8SpSVT4TlTC"
	};

	for(var i = 0; i < eScripts.length; ++i){

		var eScript = eScripts[i];

		if(eScript.getAttribute("processed")){
			continue;
		}
		eScript.setAttribute("processed", "1");

		var data = eScript.src.split("?")[1];

		data = accounts[data] || data;

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
