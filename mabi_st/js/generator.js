String.prototype.replaceAll = function (org, dest){   
	return this.split(org).join(dest);
};

window["Base71"]=new (function(c,b){this.encode=function(n,r){r="";do{r=c.charAt(n%b)+r}while(n=Math.floor(n/b));return r};this.decode=function(n,r,i,l){for(r=0,i=l=n.length;i;){r+=Math.pow(b,l-i--)*c.indexOf(n.charAt(i))}return r}})("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!'()-~*._",71);

$(function(){

	st_dataSet.reset();
	st_dataSet.addData(st_skillData);
	
	var $tab_group, $tab_group_sub, $tab, $client_group, $client, $client_skill, $obj;
	var $label, $input, $select, $option;
	
	$tab_group = $(".tab_group");
	$client_group = $(".client_group");
	
	$tab_group_sub = $('<div class="tab_group_sub" />').appendTo($tab_group);
	
	var skill;
	var rank;
	
	for(var i = 0; i < st_dataSet.length; ++i){

		$client = $('<div class="client" />').appendTo($client_group).hide();
		
		$tab = $('<a href="#" class="tab" />').html(st_dataSet[i].name).data("client", $client).appendTo($tab_group_sub).click(function(){
			var $this = $(this);
			$(".client", $client_group).hide();
			$(".tab", $tab_group).removeClass("active");
			$this.data("client").show();
			$this.addClass("active").show();
			if($this.closest(".tab_group_sub")[0] != $(".tab_group_sub").last()[0]){
				$(".tab_group_sub").last().after($this.closest(".tab_group_sub"));
			}
			return false;
		});
		
		if($(".tab", $tab_group_sub).eq(0).offset().top != $tab.offset().top){
			$tab_group_sub = $('<div class="tab_group_sub" />').appendTo($tab_group);
			$tab.appendTo($tab_group_sub);
		}
		
		$label = $('<label class="default_ability" />').html("この才能を最初から表示する").appendTo($client);
		$input = $('<input type="radio" name="slc" />').attr("id", "slc:" + i).val(i).prependTo($label).click(genCode);
		
		for(var j = 0; j < st_dataSet[i].skills.length; ++j){

			skill = st_dataSet[i].skills[j];

			$client_skill = $('<div class="client_skill" />').html('<span class="name">' + skill.name + '</span>').appendTo($client);
			$select = $('<select name="rank" />').attr("id", "rank:" + skill.id).data("race", skill.race).appendTo($client_skill).change(genCode);
			
			for(var n = 0; n <= 17; ++n){
				rank = n.toString(17).toUpperCase();
				$option = $('<option value="' + rank + '" />').html(rank).appendTo($select);
				switch(n){
					case 0:
						$option.html("マスター");
						break;
					case 15:
						$option.attr("selected", "selected");
						break;
					case 16:
						$option.html("練習");
						break;
					case 17:
						$option.html("未習得");
						break;
				}
			}
		}
		
		if(i == 0){
			$client.show();
			$input.prop("checked", true);
		}
	}
	
	$(".tab").eq(0).click();
	
	applyRace();
	genCode();
	
	$("[name=race]").click(function(){
		applyRace();
		genCode();
	});
	
	$("[name=style]").click(function(){
		genCode();
	});
	
});

function genCode(){
	$("#st_div_code").val('<script charset="utf-8" name="mabi_st" src="https://tk3482.github.io/mabi_st/@.js?' + genParams() + '"></sc' + 'ript>');
}

function load(params){
	
	var map;
	var decompress = function(d){
		var data = "";
		for(var i = 0; i < d.length; i += 2){
			data += ("00" + Base71.decode(d.substring(i, i + 2)).toString(17)).slice(-3);
		}
		return data;
	};
	var setData = function(data){
		$("[name=rank]").prop("selectedIndex", 17);
		for(var i = 0; i < data.length; i += 3){
			document.getElementById("rank:$" + data.slice(i, i + 2)).selectedIndex = parseInt(data.charAt(i + 2), 17);
		}
	};
	
	params = params || getSrcParams($("#st_div_code_input").val());

	if(window["MabiStAccounts"][params]){
		params = window["MabiStAccounts"][params];
	}

	map = params.split(",");
	for(var i = 0; i < map.length; ++i){
		if(!map[i].indexOf("d:")){
			setData(decompress(map[i].slice(2)).toUpperCase());
			continue;
		}
		if(!map[i].indexOf("data:")){
			setData(map[i].slice(5).toUpperCase());
			continue;
		}
		if(!map[i].indexOf("slc:")){
			document.getElementById(map[i]).checked = true;
			continue;
		}
		if(!map[i].indexOf("race:")){
			document.getElementById(map[i]).checked = true;
			continue;
		}
		if(!map[i].indexOf("style:")){
			document.getElementById(map[i]).checked = true;
			continue;
		}
	}
	
	$(".tab").each(function(){
		var $this = $(this);
		if($("[name=slc]:checked", $this.data("client")).length){
			$this.click();
			return false;
		}
	});
}

function applyRace(){

	var race = $("[name=race]:checked").val();
	
	$("[name=rank]").each(function(){
		this.disabled = $(this).data("race").indexOf(race) == -1;
	});
}



/*-----------------------------------------------------------------------------
 *
 * AJax用
 *
 *-----------------------------------------------------------------------------*/

/*
function regist(){

	var id = $("#txt_id").val();
	var pw = $("#txt_pw").val();
	var code = genParams();

	var query = "?id=" + id + "&pw=" + pw + "&code=" + code;

	setCode_s.type = "regist";
	$("body").append('<script type="text/javascript" src="regist.aspx' + query + '" />');
}

function update(){

	var id = $("#txt_id_input").val();
	var pw = $("#txt_pw_input").val();
	var code = genParams();

	var query = "?id=" + id + "&pw=" + pw + "&code=" + code;

	setCode_s.type = "update";
	$("body").append('<script type="text/javascript" src="regist.aspx' + query + '" />');
}

function setCode_s(str){
	switch(setCode_s.type){
		case "update":
			$("#st_div_code_s_update").val(str);
			break;
		case "regist":
			$("#st_div_code_s_regist").val(str);
			break;
	}
	setCode_s.action && setCode_s.action();
	setCode_s.type = null;
	setCode_s.action = null;
}
setCode_s.type = null;
setCode_s.action = null;

function getCode(){

	var id = $("#txt_id_input").val();
	var pw = $("#txt_pw_input").val();
	var addr = getSrcParams($("#st_div_code_s_input").val());

	var query;

	if(id != "" && pw != ""){
		query = "?id=" + encodeURIComponent(id) + "&pw=" + encodeURIComponent(pw);
	}else if(addr != ""){
		query = "?addr=" + encodeURIComponent(addr);
	}else{
		return false;
	}

	$("body").append('<script type="text/javascript" src="get_code.aspx' + query + '" />');
	return true;
}


function getCode_callback(str){

	if(str == null){
		alert("アカウント情報が間違っています。。");
		return;
	}
	load(str);
	genCode();
	//alert("読み込みました。\n編集後は[登録]ボタンをクリックしてください。");
	getCode_callback.action && getCode_callback.action();
	getCode_callback.action = null;
}
getCode_callback.action = null;
*/


/*-----------------------------------------------------------------------------
 *
 * イベント用
 *
 *-----------------------------------------------------------------------------*/

function preview(){

	window.open(
			"https://tk3482.github.io/mabi_st?" + genParams(),
			"",
			"width=240,height=320,menubar=no,toolbar=no,location=yes,status=no,resizable=no,scrollbars=no"
	);
}




/*-----------------------------------------------------------------------------
 *
 * ユーティリ
 *
 *-----------------------------------------------------------------------------*/

function getSrcParams(str){
	
	var re;
	var matches;
	var attrs = "";
	var src = "";
	var params;
	
	re = new RegExp(/<(.*?)\s+(.*?)>/g);
	while(matches = re.exec(str)){
		if(matches[1] == "script"){
			attrs = matches[2];
			break;
		}
	}
	
	re = new RegExp(/(.*?)=(".*?"|.*?)(\s+|$)/g);
	while(matches = re.exec(attrs)){
		if(matches[1] == "src"){
			src = matches[2];
			break;
		}
	}
	
	if(src.charAt(0) == '\"' && src.charAt(src.length - 1) == '\"'){
		src = src.slice(1, src.length - 1);
	}
	
	params = src.split("?")[1];
	
	if(!params){
		params = "";
	}
	
	return params;
}

function genParams(){

	var str = "";
	
	//才能
	var slc = $("[name=slc]:checked").val();
	if(slc){
		str += "slc:" + slc + ",";
	}

	//種族
	var race = $("[name=race]:checked").val();
	if(race){
		str += "race:" + race + ",";
	}

	//スタイル
	var style = $("[name=style]:checked").val();
	if(style){
		str += "style:" + style + ",";
	}

	//データ
	str += "d:";
	$("[name=rank]").each(function(){
		var rank = this.value;
 		if(rank != "10" && $(this).data("race").indexOf(race) != -1){
			str += ("0" + Base71.encode(parseInt(this.id.slice(6) + rank, 17))).slice(-2);
		}
	});
	
	return str;
}




/*-----------------------------------------------------------------------------
 *
 * ウィザードスクリプト
 *
 *-----------------------------------------------------------------------------*/
$(function(){

	var currentSection = "#section2";
	
	var section4Next = "#section5";
	
	var history = [];
	
	var showCurrentSection = function(){
		
		$("#section_group_inner").animate({
			"left": $("#section_group_inner").offset().left - $(currentSection).offset().left + "px"
		});
		
	};
	
	var go = function(nextSection){
		
		if(!$(nextSection).length){
			return;
		}
		
		history.push(currentSection);
		currentSection = nextSection;
		showCurrentSection();
		
		return false;
	};

	var prev = function(){
	
		var prevSection = history.pop();
		currentSection = prevSection;
		showCurrentSection();
		
		return false;
	};

	$(".go_next").click(function(){
	
		var retVal = this.tagName.toLowerCase() != "a";
		var nextSection = $(this).data("nextsection");
		
		
		if(history[history.length - 1] == "#section4" && nextSection != "#section8"){
		
			if(currentSection == "#section2" || currentSection == "#section3"){
				prev();
				return retVal;
			}
		}
		
		if(nextSection == "#section4"){
		
			switch(currentSection){
				case "#section3":
					section4Next = "#section5";
					break;
				case "#section8":
					section4Next = "#section5";
					break;
				/*
				case "#section7":
					section4Next = "#section9";
					break;
				*/
			}
		}
		
		if(nextSection == "section4Next"){
			nextSection = section4Next;
		}
	
		/*
		if(currentSection == "#section7"){
			getCode_callback.action = function(){
				go(nextSection);
			};
			getCode();
			return retVal;
		}
	
		if(nextSection == "#section9"){
			setCode_s.action = function(){
				go(nextSection);
			};
			update();
			return retVal;
		}
		
		if(nextSection == "#section11"){
			setCode_s.action = function(){
				go(nextSection);
			};
			regist();
			return retVal;
		}
		*/
	
		go(nextSection);
		
		return retVal;
	});

	$(".go_prev").click(function(){
		prev();
		return this.tagName.toLowerCase() != "a";
	});

});
































