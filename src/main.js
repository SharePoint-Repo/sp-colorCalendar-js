function WaitForCalendarToLoad() {
  
	// Hide display until update is complete
  document.querySelectorAll(".ms-acal-item").forEach((element) => {
    element.style.display = "none";
  });
	
	//Week or Day Calendar View
  LoadSodByKey("SP.UI.ApplicationPages.Calendar.js", function () {
    SP.UI.ApplicationPages.DetailCalendarView.prototype.renderGrids_Old =
      SP.UI.ApplicationPages.DetailCalendarView.prototype.renderGrids;
    SP.UI.ApplicationPages.DetailCalendarView.prototype.renderGrids =
      function SP_UI_ApplicationPages_DetailCalendarView$renderGrids($p0) {
        this.renderGrids_Old($p0);
        ColorCalendar();
      };

    //Month Calendar View
    SP.UI.ApplicationPages.SummaryCalendarView.prototype.renderGrids_Old =
      SP.UI.ApplicationPages.SummaryCalendarView.prototype.renderGrids;
    SP.UI.ApplicationPages.SummaryCalendarView.prototype.renderGrids =
      function SP_UI_ApplicationPages_SummaryCalendarView$renderGrids($p0) {
        this.renderGrids_Old($p0);
        ColorCalendar();
      };

    //Resize Calendar
    SP.UI.ApplicationPages.CalendarStateHandler.prototype.parentResized_Old =
      SP.UI.ApplicationPages.CalendarStateHandler.prototype.parentResized;
    SP.UI.ApplicationPages.CalendarStateHandler.prototype.parentResized =
      function SP_UI_ApplicationPages_CalendarStateHandler$parentResized() {
        this.parentResized_Old();
        ColorCalendar();
      };

    ColorCalendar();
  });
}

function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function (element) {
    return RegExp(text).test(element.textContent);
  });
}

function ColorCalendar() {
  if (contains("a", SEPARATOR) != null) {
    contains("a", SEPARATOR).map((element, index, array) => {
      let box = element.closest("div[title]");
      let bgColor = GetBGColor(element.innerHTML);
      let fontColor = GetFontColor(element.innerHTML);
      let link = GetLink(element.innerHTML);
      let decoration = GetTextDecoration(element.innerHTML);
      element.innerHTML = GetActualText(element.innerHTML);
      if (box != null) {
        box.querySelector("a[onclick]").setAttribute("onclick", "");

        if (link != null) {
          box.querySelector("a[href]").setAttribute("href", link);
        }

        box.setAttribute("title", GetActualText(box.getAttribute("title")));

        if (bgColor != null) {
          const boxStyle = box.getAttribute("style");
          box.setAttribute(
            "style",
            boxStyle + "; background-color: " + bgColor
          );
        }

        if (fontColor != null) {
          const elStyle = element.getAttribute("style");
          element.setAttribute(
            "style",
            elStyle + "; color: " + fontColor + " !important"
          );
        }

        if (decoration != null) {
          const elStyle = element.getAttribute("style");
          element.setAttribute(
            "style",
            elStyle + "; text-decoration: " + decoration + " !important"
          );
        }

        box.setAttribute("display", "block");
      }
    });
  }
}

function GetActualText(originalText) {
  var parts = originalText.split(SEPARATOR);
  return parts[0];
}
function GetBGColor(originalText) {
  var parts = originalText.split(SEPARATOR);
  return parts[2];
}
function GetFontColor(originalText) {
  var parts = originalText.split(SEPARATOR);
  return parts[3];
}
function GetTextDecoration(originalTex) {
  var parts = originalTex.split(SEPARATOR);
  return parts[4];
}
function GetLink(linkText) {
  var parts = linkText.split(SEPARATOR);
  return parts[5];
}

// Closest Element IE polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

var SEPARATOR = "|||";
window.WaitForCalendarToLoad = WaitForCalendarToLoad;
window.ColorCalendar = ColorCalendar;
_spBodyOnLoadFunctionNames.push("WaitForCalendarToLoad");