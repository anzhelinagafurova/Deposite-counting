/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showResult\": () => (/* binding */ showResult),\n/* harmony export */   \"setRangeSlider\": () => (/* binding */ setRangeSlider)\n/* harmony export */ });\nfunction showResult(value) {\n  addMoneyValues(value);\n  addCoins(value);\n  setAnchors();\n  setPopups();\n  showHiddenBlocks();\n}\n\nfunction addMoneyValues(value) {\n  resultValue.innerHTML = value;\n  var benefit = calculateBenefit(value);\n  var nodes = document.querySelectorAll(\".result\");\n\n  for (var i = 0; i < nodes.length; i++) {\n    nodes[i].innerHTML = \"~ \".concat(formatNumber(benefit[i]), \" \\u20BD\");\n  }\n}\n\nfunction addCoins(value) {\n  var coins = calculateCoins(value);\n  var nodes = document.querySelectorAll(\".money\");\n  nodes.forEach(function (e) {\n    return e.innerHTML = null;\n  });\n\n  for (var i = 0; i < nodes.length; i++) {\n    for (var j = 0; j < coins[i]; j++) {\n      var img = document.createElement(\"img\");\n      img.src = \"./src/img/money.png\";\n      nodes[i].append(img);\n    }\n  }\n}\n\nfunction calculateBenefit(money) {\n  var firstYear = money * 12 + money * 12 * 0.0689;\n  var secondYear = firstYear + money * 12 + (firstYear + money * 12) * 0.0689;\n  var thirdYear = secondYear + money * 12 + (secondYear + money * 12) * 0.0689;\n  return [money * 36, thirdYear, money * 36 + money * 36 * 0.7121];\n}\n\nfunction formatNumber(value) {\n  return value.toFixed().replace(/(\\d)(?=(\\d{3})+$)/g, '$1 ');\n}\n\nfunction calculateCoins(value) {\n  var maxValue = calculateBenefit(50000);\n  var result = [];\n  maxValue.forEach(function (e) {\n    return result.push(Math.ceil(value * 36 / (e / 10)));\n  });\n  return result;\n}\n\nfunction setAnchors() {\n  window.location.href = \"#finalDisplay\";\n\n  document.querySelectorAll(\".statistics__intro\")[1].onclick = function () {\n    document.querySelector(\".statistics\").open = false;\n  };\n\n  document.querySelector(\".statistics__intro\").onclick = function () {\n    window.location.href = \"#info\";\n  };\n}\n\nfunction showHiddenBlocks() {\n  document.querySelector(\".final-display\").style.display = \"block\";\n  document.querySelector(\".statistics\").style.display = \"flex\";\n  document.querySelector(\".outro\").style.display = \"flex\";\n}\n\nfunction setRangeSlider() {\n  var rangeSlider = sliderForm.slider;\n  var value = rangeSlider.value;\n  var indicator = sliderForm.sliderValue;\n  var width = rangeSlider.getBoundingClientRect().width;\n  var coords = width / 50000 * value;\n  indicator.value = \"\".concat(formatNumber(+value), \" \\u20BD\");\n  indicator.style.left = coords + \"px\";\n}\n\nfunction setPopups() {\n  var popupButttons = document.querySelectorAll(\".final-display__popup-button\");\n  var popupMessages = document.querySelectorAll(\".final-display__popup-message\");\n\n  var _loop = function _loop(i) {\n    popupButttons[i].onclick = function () {\n      if (!popupMessages[i].hidden) popupMessages[i].hidden = true;else {\n        popupMessages.forEach(function (e) {\n          return e.hidden = true;\n        });\n        popupMessages[i].hidden = false;\n      }\n    };\n  };\n\n  for (var i = 0; i < popupButttons.length; i++) {\n    _loop(i);\n  }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXN0Ly4vc3JjL2pzL2Z1bmN0aW9ucy5qcz9iZTA0Il0sIm5hbWVzIjpbInNob3dSZXN1bHQiLCJ2YWx1ZSIsImFkZE1vbmV5VmFsdWVzIiwiYWRkQ29pbnMiLCJzZXRBbmNob3JzIiwic2V0UG9wdXBzIiwic2hvd0hpZGRlbkJsb2NrcyIsInJlc3VsdFZhbHVlIiwiaW5uZXJIVE1MIiwiYmVuZWZpdCIsImNhbGN1bGF0ZUJlbmVmaXQiLCJub2RlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJmb3JtYXROdW1iZXIiLCJjb2lucyIsImNhbGN1bGF0ZUNvaW5zIiwiZm9yRWFjaCIsImUiLCJqIiwiaW1nIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFwcGVuZCIsIm1vbmV5IiwiZmlyc3RZZWFyIiwic2Vjb25kWWVhciIsInRoaXJkWWVhciIsInRvRml4ZWQiLCJyZXBsYWNlIiwibWF4VmFsdWUiLCJyZXN1bHQiLCJwdXNoIiwiTWF0aCIsImNlaWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJvbmNsaWNrIiwicXVlcnlTZWxlY3RvciIsIm9wZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRSYW5nZVNsaWRlciIsInJhbmdlU2xpZGVyIiwic2xpZGVyRm9ybSIsInNsaWRlciIsImluZGljYXRvciIsInNsaWRlclZhbHVlIiwid2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb29yZHMiLCJsZWZ0IiwicG9wdXBCdXR0dG9ucyIsInBvcHVwTWVzc2FnZXMiLCJoaWRkZW4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFDdEJDLGdCQUFjLENBQUNELEtBQUQsQ0FBZDtBQUNBRSxVQUFRLENBQUNGLEtBQUQsQ0FBUjtBQUNBRyxZQUFVO0FBQ1ZDLFdBQVM7QUFDVEMsa0JBQWdCO0FBQ25COztBQUNELFNBQVNKLGNBQVQsQ0FBd0JELEtBQXhCLEVBQThCO0FBQzFCTSxhQUFXLENBQUNDLFNBQVosR0FBd0JQLEtBQXhCO0FBQ0EsTUFBTVEsT0FBTyxHQUFHQyxnQkFBZ0IsQ0FBQ1QsS0FBRCxDQUFoQztBQUNBLE1BQU1VLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixDQUFkOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFHSCxLQUFLLENBQUNJLE1BQXhCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQW9DO0FBQ2hDSCxTQUFLLENBQUNHLENBQUQsQ0FBTCxDQUFTTixTQUFULGVBQTBCUSxZQUFZLENBQUNQLE9BQU8sQ0FBQ0ssQ0FBRCxDQUFSLENBQXRDO0FBQ0g7QUFDSjs7QUFFRCxTQUFTWCxRQUFULENBQWtCRixLQUFsQixFQUF3QjtBQUNwQixNQUFNZ0IsS0FBSyxHQUFHQyxjQUFjLENBQUNqQixLQUFELENBQTVCO0FBQ0EsTUFBTVUsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLENBQWQ7QUFFQUYsT0FBSyxDQUFDUSxPQUFOLENBQWMsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1osU0FBRixHQUFjLElBQWxCO0FBQUEsR0FBZjs7QUFFQSxPQUFJLElBQUlNLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBR0gsS0FBSyxDQUFDSSxNQUF2QixFQUErQkQsQ0FBQyxFQUFoQyxFQUFtQztBQUMvQixTQUFJLElBQUlPLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBR0osS0FBSyxDQUFDSCxDQUFELENBQXRCLEVBQTJCTyxDQUFDLEVBQTVCLEVBQStCO0FBQzNCLFVBQUlDLEdBQUcsR0FBR1YsUUFBUSxDQUFDVyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQUQsU0FBRyxDQUFDRSxHQUFKLEdBQVUscUJBQVY7QUFDQWIsV0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU1csTUFBVCxDQUFnQkgsR0FBaEI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsU0FBU1osZ0JBQVQsQ0FBMEJnQixLQUExQixFQUFnQztBQUM1QixNQUFNQyxTQUFTLEdBQUdELEtBQUssR0FBRyxFQUFSLEdBQWNBLEtBQUssR0FBRyxFQUFSLEdBQWEsTUFBN0M7QUFDQSxNQUFNRSxVQUFVLEdBQUdELFNBQVMsR0FBR0QsS0FBSyxHQUFHLEVBQXBCLEdBQXlCLENBQUNDLFNBQVMsR0FBR0QsS0FBSyxHQUFHLEVBQXJCLElBQTJCLE1BQXZFO0FBQ0EsTUFBTUcsU0FBUyxHQUFHRCxVQUFVLEdBQUdGLEtBQUssR0FBRyxFQUFyQixHQUEwQixDQUFDRSxVQUFVLEdBQUdGLEtBQUssR0FBRyxFQUF0QixJQUE0QixNQUF4RTtBQUVBLFNBQU8sQ0FDSEEsS0FBSyxHQUFHLEVBREwsRUFFSEcsU0FGRyxFQUdGSCxLQUFLLEdBQUcsRUFBUixHQUFjQSxLQUFLLEdBQUcsRUFBVCxHQUFlLE1BSDFCLENBQVA7QUFLSDs7QUFFRCxTQUFTVixZQUFULENBQXNCZixLQUF0QixFQUE0QjtBQUN4QixTQUFPQSxLQUFLLENBQUM2QixPQUFOLEdBQWdCQyxPQUFoQixDQUF3QixvQkFBeEIsRUFBOEMsS0FBOUMsQ0FBUDtBQUNIOztBQUVELFNBQVNiLGNBQVQsQ0FBd0JqQixLQUF4QixFQUE4QjtBQUMxQixNQUFNK0IsUUFBUSxHQUFHdEIsZ0JBQWdCLENBQUMsS0FBRCxDQUFqQztBQUNBLE1BQUl1QixNQUFNLEdBQUcsRUFBYjtBQUNBRCxVQUFRLENBQUNiLE9BQVQsQ0FBa0IsVUFBQUMsQ0FBQztBQUFBLFdBQUlhLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxJQUFJLENBQUNDLElBQUwsQ0FBVW5DLEtBQUssR0FBRyxFQUFSLElBQWFtQixDQUFDLEdBQUcsRUFBakIsQ0FBVixDQUFaLENBQUo7QUFBQSxHQUFuQjtBQUNBLFNBQU9hLE1BQVA7QUFDSDs7QUFJRCxTQUFTN0IsVUFBVCxHQUFxQjtBQUNqQmlDLFFBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBcUIsZUFBckI7O0FBQ0EzQixVQUFRLENBQUNDLGdCQUFULENBQTBCLG9CQUExQixFQUFnRCxDQUFoRCxFQUFtRDJCLE9BQW5ELEdBQTZELFlBQVU7QUFDbkU1QixZQUFRLENBQUM2QixhQUFULENBQXVCLGFBQXZCLEVBQXNDQyxJQUF0QyxHQUE2QyxLQUE3QztBQUNILEdBRkQ7O0FBR0E5QixVQUFRLENBQUM2QixhQUFULENBQXVCLG9CQUF2QixFQUE2Q0QsT0FBN0MsR0FBdUQsWUFBVTtBQUM3REgsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUFxQixPQUFyQjtBQUNILEdBRkQ7QUFHSDs7QUFFRCxTQUFTakMsZ0JBQVQsR0FBMkI7QUFDdkJNLFVBQVEsQ0FBQzZCLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDRSxLQUF6QyxDQUErQ0MsT0FBL0MsR0FBeUQsT0FBekQ7QUFDQWhDLFVBQVEsQ0FBQzZCLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NFLEtBQXRDLENBQTRDQyxPQUE1QyxHQUFzRCxNQUF0RDtBQUNBaEMsVUFBUSxDQUFDNkIsYUFBVCxDQUF1QixRQUF2QixFQUFpQ0UsS0FBakMsQ0FBdUNDLE9BQXZDLEdBQWlELE1BQWpEO0FBQ0g7O0FBRUQsU0FBU0MsY0FBVCxHQUF5QjtBQUNyQixNQUFNQyxXQUFXLEdBQUdDLFVBQVUsQ0FBQ0MsTUFBL0I7QUFDQSxNQUFNL0MsS0FBSyxHQUFHNkMsV0FBVyxDQUFDN0MsS0FBMUI7QUFDQSxNQUFNZ0QsU0FBUyxHQUFHRixVQUFVLENBQUNHLFdBQTdCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHTCxXQUFXLENBQUNNLHFCQUFaLEdBQW9DRCxLQUFsRDtBQUNBLE1BQU1FLE1BQU0sR0FBR0YsS0FBSyxHQUFHLEtBQVIsR0FBZ0JsRCxLQUEvQjtBQUVBZ0QsV0FBUyxDQUFDaEQsS0FBVixhQUFxQmUsWUFBWSxDQUFDLENBQUNmLEtBQUYsQ0FBakM7QUFDQWdELFdBQVMsQ0FBQ04sS0FBVixDQUFnQlcsSUFBaEIsR0FBdUJELE1BQU0sR0FBRyxJQUFoQztBQUNIOztBQUVELFNBQVNoRCxTQUFULEdBQW9CO0FBQ2hCLE1BQU1rRCxhQUFhLEdBQUczQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLDhCQUExQixDQUF0QjtBQUNBLE1BQU0yQyxhQUFhLEdBQUc1QyxRQUFRLENBQUNDLGdCQUFULENBQTBCLCtCQUExQixDQUF0Qjs7QUFGZ0IsNkJBSVJDLENBSlE7QUFLWnlDLGlCQUFhLENBQUN6QyxDQUFELENBQWIsQ0FBaUIwQixPQUFqQixHQUEyQixZQUFNO0FBQzdCLFVBQUcsQ0FBQ2dCLGFBQWEsQ0FBQzFDLENBQUQsQ0FBYixDQUFpQjJDLE1BQXJCLEVBQTZCRCxhQUFhLENBQUMxQyxDQUFELENBQWIsQ0FBaUIyQyxNQUFqQixHQUEwQixJQUExQixDQUE3QixLQUNJO0FBQ0FELHFCQUFhLENBQUNyQyxPQUFkLENBQXNCLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDcUMsTUFBRixHQUFXLElBQWY7QUFBQSxTQUF2QjtBQUNBRCxxQkFBYSxDQUFDMUMsQ0FBRCxDQUFiLENBQWlCMkMsTUFBakIsR0FBMEIsS0FBMUI7QUFDSDtBQUNKLEtBTkQ7QUFMWTs7QUFJaEIsT0FBSSxJQUFJM0MsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHeUMsYUFBYSxDQUFDeEMsTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBNkM7QUFBQSxVQUFyQ0EsQ0FBcUM7QUFRNUM7QUFDSiIsImZpbGUiOiIuL3NyYy9qcy9mdW5jdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzaG93UmVzdWx0KHZhbHVlKXsgICBcclxuICAgIGFkZE1vbmV5VmFsdWVzKHZhbHVlKTtcclxuICAgIGFkZENvaW5zKHZhbHVlKTsgICBcclxuICAgIHNldEFuY2hvcnMoKTtcclxuICAgIHNldFBvcHVwcygpOyBcclxuICAgIHNob3dIaWRkZW5CbG9ja3MoKTsgXHJcbn1cclxuZnVuY3Rpb24gYWRkTW9uZXlWYWx1ZXModmFsdWUpe1xyXG4gICAgcmVzdWx0VmFsdWUuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICBjb25zdCBiZW5lZml0ID0gY2FsY3VsYXRlQmVuZWZpdCh2YWx1ZSk7XHJcbiAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdWx0XCIpO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgbm9kZXNbaV0uaW5uZXJIVE1MID0gYH4gJHtmb3JtYXROdW1iZXIoYmVuZWZpdFtpXSl9IOKCvWAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb2lucyh2YWx1ZSl7XHJcbiAgICBjb25zdCBjb2lucyA9IGNhbGN1bGF0ZUNvaW5zKHZhbHVlKTtcclxuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb25leVwiKTtcclxuXHJcbiAgICBub2Rlcy5mb3JFYWNoKGUgPT4gZS5pbm5lckhUTUwgPSBudWxsKTtcclxuICAgIFxyXG4gICAgZm9yKGxldCBpPTA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKyl7ICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBqPTA7IGogPCBjb2luc1tpXTsgaisrKXsgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gXCIuL3NyYy9pbWcvbW9uZXkucG5nXCI7XHJcbiAgICAgICAgICAgIG5vZGVzW2ldLmFwcGVuZChpbWcpO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlQmVuZWZpdChtb25leSl7XHJcbiAgICBjb25zdCBmaXJzdFllYXIgPSBtb25leSAqIDEyICsgKG1vbmV5ICogMTIgKiAwLjA2ODkpO1xyXG4gICAgY29uc3Qgc2Vjb25kWWVhciA9IGZpcnN0WWVhciArIG1vbmV5ICogMTIgKyAoZmlyc3RZZWFyICsgbW9uZXkgKiAxMikgKiAwLjA2ODk7XHJcbiAgICBjb25zdCB0aGlyZFllYXIgPSBzZWNvbmRZZWFyICsgbW9uZXkgKiAxMiArIChzZWNvbmRZZWFyICsgbW9uZXkgKiAxMikgKiAwLjA2ODk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBtb25leSAqIDM2LFxyXG4gICAgICAgIHRoaXJkWWVhcixcclxuICAgICAgICAobW9uZXkgKiAzNiArIChtb25leSAqIDM2KSAqIDAuNzEyMSlcclxuICAgIF1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKHZhbHVlKXtcclxuICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSskKS9nLCAnJDEgJylcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlQ29pbnModmFsdWUpe1xyXG4gICAgY29uc3QgbWF4VmFsdWUgPSBjYWxjdWxhdGVCZW5lZml0KDUwMDAwKTtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIG1heFZhbHVlLmZvckVhY2goIGUgPT4gcmVzdWx0LnB1c2goTWF0aC5jZWlsKHZhbHVlICogMzYvIChlIC8gMTApKSkpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBbmNob3JzKCl7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cIiNmaW5hbERpc3BsYXlcIjsgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhdGlzdGljc19faW50cm9cIilbMV0ub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0aXN0aWNzXCIpLm9wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdGlzdGljc19faW50cm9cIikub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCIjaW5mb1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SGlkZGVuQmxvY2tzKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbmFsLWRpc3BsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdGlzdGljc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHJvXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UmFuZ2VTbGlkZXIoKXtcclxuICAgIGNvbnN0IHJhbmdlU2xpZGVyID0gc2xpZGVyRm9ybS5zbGlkZXI7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHJhbmdlU2xpZGVyLnZhbHVlO1xyXG4gICAgY29uc3QgaW5kaWNhdG9yID0gc2xpZGVyRm9ybS5zbGlkZXJWYWx1ZTtcclxuICAgIGNvbnN0IHdpZHRoID0gcmFuZ2VTbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICBjb25zdCBjb29yZHMgPSB3aWR0aCAvIDUwMDAwICogdmFsdWU7XHJcblxyXG4gICAgaW5kaWNhdG9yLnZhbHVlID0gYCR7Zm9ybWF0TnVtYmVyKCt2YWx1ZSl9IOKCvWA7XHJcbiAgICBpbmRpY2F0b3Iuc3R5bGUubGVmdCA9IGNvb3JkcyArIFwicHhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UG9wdXBzKCl7XHJcbiAgICBjb25zdCBwb3B1cEJ1dHR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maW5hbC1kaXNwbGF5X19wb3B1cC1idXR0b25cIik7XHJcbiAgICBjb25zdCBwb3B1cE1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maW5hbC1kaXNwbGF5X19wb3B1cC1tZXNzYWdlXCIpO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcG9wdXBCdXR0dG9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgcG9wdXBCdXR0dG9uc1tpXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZighcG9wdXBNZXNzYWdlc1tpXS5oaWRkZW4pIHBvcHVwTWVzc2FnZXNbaV0uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHBvcHVwTWVzc2FnZXMuZm9yRWFjaChlID0+IGUuaGlkZGVuID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBwb3B1cE1lc3NhZ2VzW2ldLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd1Jlc3VsdCwgc2V0UmFuZ2VTbGlkZXJ9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/functions.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\n\nsliderForm.oninput = function () {\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.setRangeSlider)();\n};\n\nsliderForm.slider.onchange = function (event) {\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.showResult)(event.target.value);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXN0Ly4vc3JjL2pzL21haW4uanM/OTI5MSJdLCJuYW1lcyI6WyJzbGlkZXJGb3JtIiwib25pbnB1dCIsInNldFJhbmdlU2xpZGVyIiwic2xpZGVyIiwib25jaGFuZ2UiLCJldmVudCIsInNob3dSZXN1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQUEsVUFBVSxDQUFDQyxPQUFYLEdBQXFCLFlBQU07QUFDdkJDLDREQUFjO0FBQ2pCLENBRkQ7O0FBR0FGLFVBQVUsQ0FBQ0csTUFBWCxDQUFrQkMsUUFBbEIsR0FBNkIsVUFBQ0MsS0FBRCxFQUFXO0FBQ3BDQyx3REFBVSxDQUFDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBZCxDQUFWO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3NyYy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzaG93UmVzdWx0LCBzZXRSYW5nZVNsaWRlcn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5zbGlkZXJGb3JtLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRSYW5nZVNsaWRlcigpO1xyXG59XHJcbnNsaWRlckZvcm0uc2xpZGVyLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzaG93UmVzdWx0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;