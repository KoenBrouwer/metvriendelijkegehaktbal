$(document).ready(() => {

	const timeout = 5000;
	const $gehaktbal = $(`img#gehaktbal`);

	const keys = [
		"ArrowUp",
		"ArrowUp",
		"ArrowDown",
		"ArrowDown",
		"ArrowLeft",
		"ArrowRight",
		"ArrowLeft",
		"ArrowRight",
		"a",
		"b",
		"Enter"
	];

	const keysTr = {
		"ArrowUp": "↑",
		"ArrowDown": "↓",
		"ArrowLeft": "→",
		"ArrowRight": "←",
		"a": "A",
		"b": "B",
		"Enter": "↵",
	};

	keys.map(k => {
		const text = $("#keysLegend").text();
		$("#keysLegend").text(text + keysTr[k]);
	});

	let pressedKeys = [];
	let pressedKey = false;

	const startGehaktbal = () => {
		$gehaktbal.addClass("visible");
		setTimeout(stopGehaktbal, timeout);
	};

	const stopGehaktbal = () => {
		$("body").find(".gehaktbal").removeClass("visible");
	};

	$(window).on("keydown", e => {
		if(e.key === "Escape"){
			startGehaktbal();
			pressedKeys = [];
		}

		if(!pressedKey){
			pressedKey = true;

			let nextKey = keys[pressedKeys.length];

			if(e.key === nextKey){
				pressedKeys.push(e.key);
			}
			else{
				pressedKeys = [];
			}

			console.log(pressedKeys);

			if(JSON.stringify(pressedKeys) === JSON.stringify(keys)){
				startGehaktbal();
				pressedKeys = [];
			}
		}
	});

	$(window).on("keyup", () => {
		pressedKey = false;
	});

});
