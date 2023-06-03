export class MoveBlock {
	constructor(breakpoints) {
		this.breakpoints = breakpoints;
		this.setMedia();
	}

	setMedia() {
		this.breakpoints.forEach((point) => {
			const { solution } = point;
			let mediaQuery = window.matchMedia(`${solution}`);
			if (mediaQuery.matches) this.moveBlock(point);
			mediaQuery.addEventListener('change', (e) => {
				if (e.matches) this.moveBlock(point);
			});
		});
	}

	moveBlock(point) {
		const { targetEl, elToMove, insertMethod } = point;
		const elToMoveArr = elToMove.map((item) =>
			this.isArray(item) ? item : [item]
		);
		console.log(elToMoveArr);
		targetEl.forEach((el, i) => {
			const method = this.isString(insertMethod)
				? insertMethod
				: insertMethod[i];
			this.checkMethod(method, el, elToMoveArr[i]);
		});
	}

	checkMethod(method, target, elemToPaste) {
		switch (method) {
			case 'append':
				target.append(...elemToPaste);
				break;
			case 'prepend':
				target.prepend(...elemToPaste);
				break;
			case 'after':
				target.after(...elemToPaste);
				break;
			case 'before':
				target.before(...elemToPaste);
				break;
			default:
				target.replaceWith(...elemToPaste);
				break;
		}
	}

	isArray(value) {
		return Array.isArray(value);
	}
	isString(value) {
		return typeof value === 'string';
	}
}

/*
Инициализация:
new MoveBlock([
  {
    solution: "(min-width: 1000px)",
    targetEl: [el1, el2],
    elToMove: [[bl1,bl2], bl3],
    insertMethod: ["append", "prepend"]/"append"
  }
])
  - solution = str, указываем разрешение в котором дейсвтуют данные настройки. для промежутчных значений указываем как нижнуюю, так и вернхнюю границу: "(min-width: 600px) and (max-width: 999px)";
  - targetEl = array, массив элементов в которые/рядом с которыми переносим элементы;
  -elToMove = array, массив с элементами, которые переносим, может содержать также массивы(если в одно место переносим группу элементов);
  -insertMethod = array/str, метод вставки, может быть массивом с именем методов вставки, если отличаются для каждой пары targetEl и elToMove, если для всех пар метод один, достаточно единожды его указать
*/
