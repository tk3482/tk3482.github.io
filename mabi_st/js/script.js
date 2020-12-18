(function(){

	var mabi_st = document.getElementById("mabi_st");

	if(!mabi_st){
		return;
	}
	
	var data = mabi_st.getAttribute("data-query");

	data = {
		"rywJ": "slc:0,race:H,style:blue,d:000h0y0P0*1e1v1M1)2b2s2J2!383p3G454m4D4U595k5B5R5_6gzvzMz)AbGaGsGIGZH76x6O6~7d7u7L8Z979o9La4alaCaTb1bibzbQcfcwcNc-d'e9y1EgEOE~HoKwKNK-LKeqeHeYf6fnfEfVgkgBgSh0hhhyhPh*ieiBiMi)jbjsjRj!CDCUD2DjLcLtkpkGkXl5lmlDlUm2mjmAmRm_ngnxnOn~ouoLo(paprpIFdFuFLF(pZq7qoqFqWr4rlrCrTs1sAsQs_tftwtNt-ucutuKu'DADRD_P0v9vqvHvYw6wEwVx3xkxBxSAJA!B8BpBGBXC5Cm9WyhyyyPy*zeNWO4OTHFHWI4IlITJ1JiJzJRJ_KgL(MaMrMZN7NoNFPhPyPPP*QeQvQ)RbRsRJR!S8SpSVT4TlTC"
	}[data] || data;

	document.write('<iframe style="width:180px;height:280px;margin:0px;padding:0px;" width="180" height="280" allowtransparency="true" scrolling="no" frameborder="0" border="0" src="https://tk3482.github.io/mabi_st?' + data + '"></iframe>');

})();
