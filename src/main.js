function WaitForCalendarToLoad() {  
	document.querySelectorAll('.ms-acal-item').forEach((element) => {element.style.display = 'none';});
	LoadSodByKey("SP.UI.ApplicationPages.Calendar.js", function(){window.setInterval(ColorCalendar, 50);});
}
function Start(){
	ColorCalendar(); 
	var _onItemsSucceed = SP.UI.ApplicationPages.CalendarStateHandler.prototype.onItemsSucceed; 
	SP.UI.ApplicationPages.CalendarStateHandler.prototype.onItemsSucceed = function($p0, $p1){
		_onItemsSucceed.call(this, $p0, $p1); 

		ColorCalendar();
	}
}

function contains(selector, text) {
	var elements = document.querySelectorAll(selector);
	return [].filter.call(elements, function(element){
		return RegExp(text).test(element.textContent);
	});
}

function ColorCalendar(){
        if(contains('a', SEPARATOR) != null)
        {             
			contains('a', SEPARATOR).map((element, index, array) => {
				let box = element.closest('div[title]');
				let bgColor = GetBGColor(element.innerHTML);
				let fontColor = GetFontColor(element.innerHTML);
				let link = GetLink(element.innerHTML);
				element.innerHTML = GetActualText(element.innerHTML);
				if (link != '') {
					box.querySelector('a[onclick').setAttribute('onclick', '')
					box.querySelector('a[href]').setAttribute('href',link);
				}
				box.setAttribute("title", GetActualText(box.getAttribute('title')));
				box.style('backgroundColor', bgColor);
				element.setAttribute('style',  'color: ' + fontColor + ' !important');
				box.setAttribute('display', 'block');
			});      
		}  
}   
function GetActualText(originalText) {     
	var parts = originalText.split(SEPARATOR);
	return parts[0] ;   
}
function GetBGColor(originalText) {
	var parts = originalText.split(SEPARATOR);
	return parts[2];   
}
function GetFontColor(originalText){
	var parts = originalText.split(SEPARATOR);
	return parts[3];   
}
function GetLink(linkText) {     
	var parts = linkText.split(SEPARATOR);
	return parts[4];   
}
var SEPARATOR = "|||"; 	

window.WaitForCalendarToLoad = WaitForCalendarToLoad; 
_spBodyOnLoadFunctionNames.push('WaitForCalendarToLoad');
