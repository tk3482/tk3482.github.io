var VERSION = "build:20201218";

var st_image = "./img/skill_table.png";
var st_style = "./css/skill_table.css";
var IMG_EVE_DRC = 26;

window["Base71"]=new (function(c,b){this.encode=function(n,r){r="";do{r=c.charAt(n%b)+r}while(n=Math.floor(n/b));return r};this.decode=function(n,r,i,l){for(r=0,i=l=n.length;i;){r+=Math.pow(b,l-i--)*c.indexOf(n.charAt(i))}return r}})("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!'()-~*._",71);

(function(){

	var img, map, query, splitted, css, ind, st, st_data;

	//スキル画像プリロード
	img = document.body.appendChild(new Image());
	img.style.display = "none";
	img.src = st_image;

	st_data = location.href.split("?")[1];

	if(window["MabiStAccounts"][st_data]){
		st_data = window["MabiStAccounts"][st_data];
	}

	if(!st_data){
		st_data = "data:";
	}
	
	map = {
		slc		: "0",
		data	: "",
		race	: "H",
		style	: "blue",
		d		: ""
	};

	//クエリ分解
	query = st_data.split(',');
	for(var i = 0; i<query.length; ++i){
		splitted = query[i].split(":");
		map[splitted[0]] = splitted[1];
	}

	//スタイル適用
	switch(map.style){
		case "black":
		case "blue":
		case "green":
		case "pink":
		case "red":
			css = "./css/skill_table_" + map.style + ".css";
			break;
		default:
			css = st_style;
	}
	loadCss(css);

	//解凍
	if(map.d.length){
		map.data = decompress(decodeURIComponent(map.d));
	}

	//大文字にそろえる
	map.data = map.data.toUpperCase();

	//データ格納
	st_dataSet.reset();
	st_dataSet.addData(st_skillData.setData(map.data));
	st_dataSet.untrainedFilter();

	ind = parseInt(map.slc);
	if(isNaN(ind) || ind < 0 || st_dataSet.length <= ind){
		ind = 0;
	}

	//テーブル生成
	st = new SkillTable(map.race);
	st.createDiv();
	st.changeCategory(ind);
})();

function SkillTable(race){

	var field = null;
	var slc = null;

	var changeCategory = function(index){

		if(!st_dataSet[index]){
			return;
		}

		field.innerHTML = "";

		var table, tbody, tr, td;

		table = field.appendChild(document.createElement("table"));
		tbody = table.appendChild(document.createElement("tbody"));

		var skills = st_dataSet[index].skills;
		for(var i = 0; i<skills.length; ++i){

			if(!skills[i]){
				continue;
			}
			if(race != null && skills[i].race.indexOf(race) == -1){
				continue;
			}

			tr = tbody.appendChild(document.createElement("tr"));

			td = tr.appendChild(document.createElement("td"));
			td.rowSpan = "2";
			setImage(td, skills[i].yIndex, skills[i].xIndex);

			td = tr.appendChild(document.createElement("td"));
			td.innerHTML = skills[i].name;
			td.style.verticalAlign = "bottom";

			tr = tbody.appendChild(document.createElement("tr"));
			td = tr.appendChild(document.createElement("td"));
			do{
				var rank = skills[i].rank;
				if(rank == '未'){
					td.innerHTML = "未習得";
					break;
				}
				if(rank == 'G'){
					td.innerHTML = "練習ランク";
					break;
				}
				if(rank == '0'){
					td.innerHTML = "マスター";
					td.style.color = "#FF6666";
					break;
				}
				td.innerHTML = "ランク "+rank;
				if(rank == '1'){
					td.style.color = "yellow";
				}
			}while(false);
			td.style.verticalAlign = "middle";
		}
		slc.selectedIndex = index;
	};
	var setImage = function(obj, yIndex, xIndex){

		var div, img;

		div = obj.appendChild(document.createElement("div"));
		div.style.margin = "1px 2px 1px 0px";
		div.style.padding = "0px";
		div.style.border = "solid 1px black";
		div.style.overflow = "hidden";
		div.style.width = IMG_EVE_DRC+"px";
		div.style.height = IMG_EVE_DRC+"px";

		img = div.appendChild(new Image());
		img.src = st_image;
		img.style.marginTop    = -1*(yIndex*IMG_EVE_DRC)+"px";
		img.style.marginRight  = 0+"px";
		img.style.marginBottom = 0+"px";
		img.style.marginLeft   = -1*(xIndex*IMG_EVE_DRC)+"px";
		img.style.padding = "0px";
		img.style.position = "relative";
		img.style.borderStyle = "none";
		img.style.display = "block";
	};
	this.changeCategory = function(index){
		changeCategory(index);
	};
	this.createDiv = function(){

		var st_div = document.getElementById("st_div");
		if(st_div){
			return st_div;
		}
		document.write("<div id=st_div></div>");
		st_div = document.getElementById("st_div");
		st_div.className = "st_div";

		var div, select, option, cat;

		div = st_div.appendChild(document.createElement("div"));
		div.innerHTML = "スキル";
		div.className = "st_title";

		select =  st_div.appendChild(document.createElement("select"));
		select.className = "st_select";
		for(var i = 0; i<st_dataSet.length; ++i){
			cat = st_dataSet[i];
			if(parseInt(cat.available) == 0){
				continue;
			}
			option = select.appendChild(document.createElement("option"));
			option.className = "st_option";
			option.value = i;
			option.innerHTML = cat.name;
		}
		select.onchange = function(){
			changeCategory(parseInt(this.value));
		};
		slc = select;

		div =  st_div.appendChild(document.createElement("div"));
		div.className = "st_body";
		field = div;

		document.write("<div id=st_link><a href=\"https://mabilog.harekaze.jp/tools/skill_table/\" target=\"_blank\">スキルウィンドウ ["+VERSION+"]</a></div>");
		return st_div;
	};
}

function loadCss(href) {
	var head = document.getElementsByTagName("head")[0];
	var link = head.appendChild(document.createElement("link"));
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = href;
}

function decompress(d){

	var data = "";
	
	for(var i = 0; i < d.length; i += 2){
	
		data += ("00" + Base71.decode(d.substring(i, i + 2)).toString(17)).slice(-3);
	}
	return data;
}
















