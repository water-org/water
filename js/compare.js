/* $Id: compare.js 15469 2008-12-19 06:34:44Z testyang $ */
var Compare = new Object();

Compare = {
	add: function(goodsId, goodsName, type, thumbImg) {
		var count = 0;
		for (var k in this.data) {
			if (typeof(this.data[k]) == "function") continue;
			if (this.data[k].t != type) {
				alert(goods_type_different.replace("%s", goodsName));
				return;
			}
			count++;
		}

		if (this.data[goodsId]) {
			alert(exist.replace("%s", goodsName));
			return;
		}
		else {
			this.data[goodsId] = {
				n: goodsName,
                t: type,
                timg : thumbImg
			};
		}
		this.save();
		this.init();
	},
	relocation: function() {
		if (this.compareBox.style.display != "") return;
		var diffY = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
		var percent = .2 * (diffY - this.lastScrollY);
		if (percent > 0) percent = Math.ceil(percent);
		else percent = Math.floor(percent);
		this.compareBox.style.top = parseInt(this.compareBox.style.top) + percent + "px";

		this.lastScrollY = this.lastScrollY + percent;
	},
	init: function() {
		this.data = new Object();
		var cookieValue = document.getCookie("compareItems");
		if (cookieValue != null) {
			this.data = cookieValue.parseJSON();
		}
		if (!this.compareBox) {
			this.compareBox = document.createElement("DIV");
			var submitBtn = this.submitBtn = document.createElement("INPUT");
			this.compareList = document.createElement("UL");
			this.compareBox.id = "compareBox";
			this.compareBox.style.display = "none";
			this.compareBox.align = "center";
			this.compareList.id = "compareList";
			submitBtn.type = "button";
			submitBtn.value = button_compare;
			this.compareBox.appendChild(this.compareList);
			//this.compareBox.appendChild(submitBtn);
			submitBtn.onclick = function() {
				var cookieValue = document.getCookie("compareItems");
				var obj = cookieValue.parseJSON();
				var url = document.location.href;
				url = url.substring(0, url.lastIndexOf('/') + 1) + "compare.php";
				var i = 0;
				for (var k in obj) {
					if (typeof(obj[k]) == "function") continue;
					if (i == 0) url += "?goods[]=" + k;
					else url += "&goods[]=" + k;
					i++;
				}
				if (i < 2) {
					alert(compare_no_goods);
					return;
				}
				document.location.href = url;
			}
			document.body.appendChild(this.compareBox);
		}
		this.compareList.innerHTML = "";
		var self = this;
		for (var key in this.data) {
            var dataObject = this.data[key];
			if (typeof(dataObject) == "function") continue;
			var li = document.createElement("LI");
			var warpdiv = document.createElement("div");
			warpdiv.className = 'compare-warp';
			var timg = document.createElement("IMG");
            timg.src = dataObject.timg;
            timg.className = 'compare-timg';
            warpdiv.appendChild(timg);
			var span = document.createElement("P");
            span.className = 'compare-desc';
			span.innerHTML = dataObject.n;
			warpdiv.appendChild(span);
			var delBtn = document.createElement("IMG");
			delBtn.src = "themes/3cShop/images/del.png";
            delBtn.className = 'compare-delimg';
            delBtn.setAttribute('delid', key);
			delBtn.onclick = function() {
				document.getElementById("compareList").removeChild(this.parentNode.parentNode);
				delete self.data[this.getAttribute('delid')];
				self.save();
				self.init();
			}
			warpdiv.insertBefore(delBtn, li.childNodes[0]);
			li.appendChild(warpdiv);
			this.compareList.appendChild(li);
		}
		if (this.compareList.childNodes.length > 0) {
			var li = document.createElement("LI");
			var warpdiv = document.createElement("div");
			warpdiv.className = 'compare-warp';
			warpdiv.style.border = 'none';
			warpdiv.style.borderWidth = 0;
			warpdiv.appendChild(self.submitBtn);
			li.appendChild(warpdiv);
			self.compareList.appendChild(li);
			this.compareBox.style.display = "";
            this.fixed();
			//this.timer = window.setInterval(this.relocation.bind(this), 50);
		}
		else {
			this.compareBox.style.display = "none";
			//window.clearInterval(this.timer);
			this.timer = 0;
		}
	},
    fixed : function() {
        var offsetTop,
            el = this.compareBox;

        function setNav(){
            var scrollTop;
			offsetTop = (Utils.getViewportHeight() - el.offsetHeight)/2;
        	el.style.top = offsetTop + 'px';
            if (window.pageYOffset) {
                scrollTop = window.pageYOffset;
            } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
                scrollTop = document.documentElement.scrollTop;
            } else if (document.body) {// all other Explorers
                scrollTop = document.body.scrollTop;
            } 

            if(Browser.ie < 7) {
                el.style.top = scrollTop + offsetTop + 'px';
            } else {		
                el.className = 'compare-fixed';
            }
        }
        setNav();
        window.onscroll = function(e){
            setNav();
        };
        window.onresize = function(e){
            setNav();
        };

    },
	save: function() {
		var date = new Date();
		date.setTime(date.getTime() + 99999999);
		document.setCookie("compareItems", this.data.toJSONString());
	},
	lastScrollY: 100
}

