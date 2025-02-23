function toggleAccordion(element) {
  if (!element) return; // Проверяем, передан ли элемент

  const accordionBottom = element.nextElementSibling;
  const button = element.querySelector('.button-acc'); // Находим кнопку внутри текущего accordionTop

  if (!accordionBottom) return; // Проверяем, существует ли нижний блок

  if (accordionBottom.style.display === "none" || !accordionBottom.style.display) {
      accordionBottom.style.display = "flex";
      element.classList.add("accordion-top-active");
      accordionBottom.classList.add("accordion-bottom-active");

      if (button) {
          button.style.transition = "transform 0.3s ease";
          button.style.transform = "rotate(180deg)";
      }
  } else {
      accordionBottom.style.display = "none";
      element.classList.remove("accordion-top-active");
      accordionBottom.classList.remove("accordion-bottom-active");

      if (button) {
          button.style.transition = "transform 0.3s ease";
          button.style.transform = "rotate(0deg)";
      }
  }
}





const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

function showTab(tabId) {
    if (!tabPanels.length || !tabButtons.length) return; // Проверяем, есть ли элементы

    // Скрываем все панели
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Убираем класс active со всех кнопок
    tabButtons.forEach(button => button.classList.remove('active'));

    // Находим панель для отображения
    const tabToShow = document.getElementById(tabId);
    if (tabToShow) {
        tabToShow.classList.add('active');
    }

    // Находим кнопку и активируем её
    const buttonToActivate = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    if (buttonToActivate) {
        buttonToActivate.classList.add('active');
    }
}

// Добавляем обработчики только если есть кнопки
if (tabButtons.length) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            if (tabId) showTab(tabId);
        });
    });

    // Показываем первый таб при загрузке страницы
    showTab(tabButtons[0].dataset.tab);
}





const cards = document.querySelectorAll('.card');
const flipButtons = document.querySelectorAll('.flip-button');
const backButtons = document.querySelectorAll('.back-button');

if (cards.length && flipButtons.length && backButtons.length) {
  flipButtons.forEach((flipButton, index) => {
    flipButton.addEventListener('click', () => {
      if (cards[index]) {
        cards[index].classList.add('flipped');
      }
    });
  });

  backButtons.forEach((backButton, index) => {
    backButton.addEventListener('click', () => {
      if (cards[index]) {
        cards[index].classList.remove('flipped');
      }
    });
  });
}






document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector('.swiper-container-cult');

  if (swiperContainer) { 
    new Swiper(swiperContainer, {
      loop: true,
      slidesPerView: 3.5,
      spaceBetween: 20,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1198: {
          slidesPerView: 3.5,
          spaceBetween: 10
        },
        1022: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        906: {
          slidesPerView: 2.5,
          spaceBetween: 10
        },
        682: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        552: {
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10
        },
        
      }
    });
  }
});



document.addEventListener('DOMContentLoaded', function() {
  function resizeMap() {
      const mapContainer = document.querySelector('.map-container');
      const iframe = document.querySelector('.map-container iframe');

      if (mapContainer && iframe) {
          const width = mapContainer.offsetWidth;
          const height = width / 2;  // Соотношение 1:2
          iframe.style.height = height + 'px';
      }
  }

  // Вызываем resizeMap при загрузке страницы
  resizeMap();

  // Вызываем resizeMap при изменении размера окна
  window.addEventListener('resize', resizeMap);
});



document.addEventListener("DOMContentLoaded", function() {
  const blockHeaders = document.querySelectorAll(".block-header");

  blockHeaders.forEach(header => {
    header.addEventListener("click", function() {
      const item = this.parentNode;
      item.classList.toggle("active");

        // Получаем элемент с иконкой + или -
        const toggleIcon = this.querySelector('.block-sign');

        if (item.classList.contains('active')) {
            toggleIcon.textContent = '-'; // Заменяем на '-' при открытии
        } else {
            toggleIcon.textContent = '+'; // Заменяем на '+' при закрытии
        }
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer2 = document.querySelector('.swiper-container-lib');

  if (swiperContainer2) { 
    new Swiper(swiperContainer2, {
      loop: true,
      slidesPerView: 4.5,
      spaceBetween: 12,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});

















const conversionFactor = 180 / Math.PI;

let radianToDegrees = function(radian) {
	return radian * conversionFactor;
}
let degreesToRadian = function(degrees) {
	return degrees / conversionFactor;
}

// Taken from https://github.com/wethegit/wtc-vector
/**
 * A basic 2D Vector class that provides simple algebraic functionality in the form
 * of 2D Vectors.
 *
 * We use Getters/setters for both principle properties (x & y) as well as virtual
 * properties (rotation, length etc.).
 *
 * @class Vector
 * @author Liam Egan <liam@wethecollective.com>
 * @version 0.5
 * @created Dec 19, 2017
 */
class Vector {

	/**
	 * The Vector Class constructor
	 *
	 * @constructor
	 * @param {number} x 				The x coord
	 * @param {number} y 				The y coord
	 */
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  /**
   * Resets the vector coordinates
   *
   * @public
	 * @param {number} x 				The x coord
	 * @param {number} y 				The y coord
   */
	reset(x, y) {
    this.x = x;
    this.y = y;
	}
  resetToVector(v) {
    if(v instanceof Vector) {
      this.x = v.x;
      this.y = v.y;
    }
  }

	/**
	 * Clones the vector
	 *
	 * @public
	 * @return {Vector}					The cloned vector
	 */
  clone() {
    return new Vector(this.x, this.y);
  }

  /**
   * Adds one vector to another.
   *
   * @public
   * @chainable
   * @param  {Vector}  vector The vector to add to this one
   * @return {Vector}					Returns itself, modified
   */
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }
  /**
   * Clones the vector and adds the vector to it instead
   *
   * @public
   * @chainable
   * @param  {Vector}  vector The vector to add to this one
   * @return {Vector}					Returns the clone of itself, modified
   */
  addNew(vector) {
    let v = this.clone();
    return v.add(vector);
  }

  /**
   * Adds a scalar to the vector, modifying both the x and y
   *
   * @public
   * @chainable
   * @param  {number}  scalar The scalar to add to the vector
   * @return {Vector}					Returns itself, modified
   */
  addScalar(scalar) {
    return this.add(new Vector(scalar, scalar));
  }
  /**
   * Clones the vector and adds the scalar to it instead
   *
   * @public
   * @chainable
   * @param  {number}  scalar The scalar to add to the vector
   * @return {Vector}					Returns the clone of itself, modified
   */
  addScalarNew(scalar) {
    let v = this.clone();
    return v.addScalar(scalar);
  }

  /**
   * Subtracts one vector from another.
   *
   * @public
   * @chainable
   * @param  {Vector}  vector The vector to subtract from this one
   * @return {Vector}					Returns itself, modified
   */
  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }
  /**
   * Clones the vector and subtracts the vector from it instead
   *
   * @public
   * @chainable
   * @param  {Vector}  vector The vector to subtract from this one
   * @return {Vector}					Returns the clone of itself, modified
   */
  subtractNew(vector) {
    let v = this.clone();
    return v.subtract(vector);
  }

  /**
   * Subtracts a scalar from the vector, modifying both the x and y
   *
   * @public
   * @chainable
   * @param  {number}  scalar The scalar to subtract from the vector
   * @return {Vector}					Returns itself, modified
   */
  subtractScalar(scalar) {
    return this.subtract(new Vector(scalar, scalar));
  }
  /**
   * Clones the vector and subtracts the scalar from it instead
   *
   * @public
   * @chainable
   * @param  {number}  scalar The scalar to add to the vector
   * @return {Vector}					Returns the clone of itself, modified
   */
  subtractScalarNew(scalar) {
    let v = this.clone();
    return v.subtractScalar(scalar);
  }

  /**
   * Divides one vector by another.
   *
   * @public
   * @chainable
   * @param  {Vector}  vector The vector to divide this by
   * @return {Vector}					Returns itself, modified
   */
  divide(vector) {
    if(vector.x !== 0) {
      this.x /= vector.x
    } else {
      this.x = 0;
    }
    if(vector.y !== 0) {
      this.y /= vector.y
    } else {
      this.y = 0;
    }
    return this;
  }
  /**
   * Clones the vector and divides it by the vector instead
   *
   * @public
   * @chainable
   * @param  {Vector}  vector The vector to divide the clone by
   * @return {Vector}					Returns the clone of itself, modified
   */
  divideNew(vector) {
    let v = this.clone();
    return v.divide(vector);
  }

  /**
   * Divides the vector by a scalar.
   *
   * @public
   * @chainable
   * @param  {number}  scalar The scalar to divide both x and y by
   * @return {Vector}					Returns itself, modified
   */
  divideScalar(scalar) {
    var v = new Vector(scalar, scalar);
    return this.divide(v);
  }
  /**
   * Clones the vector and divides it by the provided scalar.
   *
   * @public
   * @chainable
   * @param  {number}  scalar The scalar to divide both x and y by
   * @return {Vector}					Returns the clone of itself, modified
   */
  divideScalarNew(scalar) {
    let v = this.clone();
    return v.divideScalar(scalar);
  }

  /**
   * Multiplies one vector by another.
   *
   * @public
   * @chainable
   * @param  {Vector}  vector The vector to multiply this by
   * @return {Vector}					Returns itself, modified
   */
  multiply(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
    return this;
  }
  /**
   * Clones the vector and multiplies it by the vector instead
   *
   * @public
   * @chainable
   * @param  {Vector}  vector The vector to multiply the clone by
   * @return {Vector}					Returns the clone of itself, modified
   */
  multiplyNew(vector) {
    let v = this.clone();
    return v.multiply(vector);
  }

  /**
   * Multiplies the vector by a scalar.
   *
   * @public
   * @chainable
   * @param  {number}  scalar The scalar to multiply both x and y by
   * @return {Vector}					Returns itself, modified
   */
  multiplyScalar(scalar) {
    var v = new Vector(scalar, scalar);
    return this.multiply(v);
  }
  /**
   * Clones the vector and multiplies it by the provided scalar.
   *
   * @public
   * @chainable
   * @param  {number}  scalar The scalar to multiply both x and y by
   * @return {Vector}					Returns the clone of itself, modified
   */
  multiplyScalarNew(scalar) {
    let v = this.clone();
    return v.multiplyScalar(scalar);
  }

  /**
   * Alias of {@link Vector#multiplyScalar__anchor multiplyScalar}
   */
  scale(scalar) {
    return this.multiplyScalar(scalar);
  }
  /**
   * Alias of {@link Vector#multiplyScalarNew__anchor multiplyScalarNew}
   */
  scaleNew(scalar) {
    return this.multiplyScalarNew(scalar);
  }

  /**
   * Rotates a vecor by a given amount, provided in radians.
   *
   * @public
   * @chainable
   * @param  {number}  radian The angle, in radians, to rotate the vector by
   * @return {Vector}					Returns itself, modified
   */
  rotate(radian) {
  	var x = (this.x * Math.cos(radian)) - (this.y * Math.sin(radian));
  	var y = (this.x * Math.sin(radian)) + (this.y * Math.cos(radian));

		this.x = x;
		this.y = y;

  	return this;
  }
  /**
   * Clones the vector and rotates it by the supplied radian value
   *
   * @public
   * @chainable
   * @param  {number}  radian The angle, in radians, to rotate the vector by
   * @return {Vector}					Returns the clone of itself, modified
   */
  rotateNew(radian) {
    let v = this.clone();
    return v.rotate(radian);
  }

	/**
	 * Rotates a vecor by a given amount, provided in degrees. Converts the degree
	 * value to radians and runs the rotaet method.
	 *
	 * @public
	 * @chainable
	 * @param  {number}  degrees The angle, in degrees, to rotate the vector by
	 * @return {Vector}						Returns itself, modified
	 */
  rotateDeg(degrees) {
    return this.rotate(degreesToRadian(degrees));
  }
  /**
   * Clones the vector and rotates it by the supplied degree value
   *
   * @public
   * @chainable
	 * @param  {number}  degrees The angle, in degrees, to rotate the vector by
   * @return {Vector}					 Returns the clone of itself, modified
   */
  rotateDegNew(degrees) {
    return this.rotateNew(degreesToRadian(degrees));
  }

  /**
   * Alias of {@link Vector#rotate__anchor rotate}
   */
  rotateBy(radian) {
		return this.rotate(radian);
  }
  /**
   * Alias of {@link Vector#rotateNew__anchor rotateNew}
   */
  rotateByNew(radian) {
    return this.rotateNew(radian);
  }

  /**
   * Alias of {@link Vector#rotateDeg__anchor rotateDeg}
   */
  rotateDegBy(degrees) {
		return this.rotateDeg(degrees);
  }
  /**
   * Alias of {@link Vector#rotateDegNew__anchor rotateDegNew}
   */
  rotateDegByNew(radian) {
    return tjos.rotateDegNew(radian);
  }

  /**
   * Rotates a vector to a specific angle
   *
   * @public
   * @chainable
   * @param  {number}  radian The angle, in radians, to rotate the vector to
   * @return {Vector}					Returns itself, modified
   */
	rotateTo(radian) {
		return this.rotate(radian-this.angle);
	};
  /**
   * Clones the vector and rotates it to the supplied radian value
   *
   * @public
   * @chainable
   * @param  {number}  radian The angle, in radians, to rotate the vector to
   * @return {Vector}					Returns the clone of itself, modified
   */
	rotateToNew(radian) {
    let v = this.clone();
    return v.rotateTo(radian);
	};

	/**
	 * Rotates a vecor to a given amount, provided in degrees. Converts the degree
	 * value to radians and runs the rotateTo method.
	 *
	 * @public
	 * @chainable
	 * @param  {number}  degrees The angle, in degrees, to rotate the vector to
	 * @return {Vector}						Returns itself, modified
	 */
  rotateToDeg(degrees) {
    return this.rotateTo(degreesToRadian(degrees));
  }
  /**
   * Clones the vector and rotates it to the supplied degree value
   *
   * @public
   * @chainable
	 * @param  {number}  degrees The angle, in degrees, to rotate the vector to
   * @return {Vector}					 Returns the clone of itself, modified
   */
  rotateToDegNew(degrees) {
    return this.rotateToNew(degreesToRadian(degrees));
  }

	/**
	 * Normalises the vector down to a length of 1 unit
	 *
	 * @public
	 * @chainable
	 * @return {Vector}					Returns itself, modified
	 */
	normalise() {
		return this.divideScalar(this.length);
	}
	/**
	 * Clones the vector and normalises it
	 *
	 * @public
	 * @chainable
	 * @return {Vector}					Returns a clone of itself, modified
	 */
	normaliseNew() {
		return this.divideScalarNew(this.length);
	}

	/**
	 * Calculates the distance between this and the supplied vector
	 *
	 * @param  {Vector} vector The vector to calculate the distance from
	 * @return {number}        The distance between this and the supplied vector
	 */
	distance(vector) {
		return this.subtractNew(vector).length;
	}

	/**
	 * Calculates the distance on the X axis between this and the supplied vector
	 *
	 * @param  {Vector} vector The vector to calculate the distance from
	 * @return {number}        The distance, along the x axis, between this and the supplied vector
	 */
	distanceX(vector) {
		return this.x - vector.x;
	}

	/**
	 * Calculated the distance on the Y axis between this and the supplied vector
	 *
	 * @param  {Vector} vector The vector to calculate the distance from
	 * @return {number}        The distance, along the y axis, between this and the supplied vector
	 */
	distanceY(vector) {
		return this.y - vector.y;
	}


	/**
	 * Calculates the dot product between this and a supplied vector
	 *
	 * @example
	 * // returns -14
	 * new Vector(2, -3).dot(new Vector(-4, 2))
	 * new Vector(-4, 2).dot(new Vector(2, -3))
	 * new Vector(2, -4).dot(new Vector(-3, 2))
	 *
	 * @param  {Vector} vector The vector object against which to calculate the dot product
	 * @return {number}        The dot product of the two vectors
	 */
	dot(vector) {
		return (this.x * vector.x) + (this.y * vector.y);
	}

	/**
	 * Calculates the cross product between this and the supplied vector.
	 *
	 * @example
	 * // returns -2
	 * new Vector(2, -3).cross(new Vector(-4, 2))
	 * new Vector(-4, 2).cross(new Vector(2, -3))
	 * // returns 2
	 * new Vector(2, -4).cross(new Vector(-3, 2))
	 *
	 * @param  {Vector} vector The vector object against which to calculate the cross product
	 * @return {number}        The cross product of the two vectors
	 */
	cross(vector) {
		return (this.x * vector.x) - (this.y * vector.y);
	}
  
  // TODO Add this to the main class
  isEqualTo(vector) {
    return this.x === vector.x && this.y === vector.y;
  }
  
  // TODO Add this to the main class
  slopeOf(vector) {
    return ( vector.y - this.y ) / ( vector.x - this.x );
  }

  /**
   * Getters and setters
   */

  /**
   * (getter/setter) The x value of the vector.
   *
   * @type {number}
   * @default 0
   */
  set x(x) {
    if(typeof x == 'number') {
      this._x = x;
    } else {
      throw new TypeError('X should be a number');
    }
  }
  get x() {
    return this._x || 0;
  }

 /**
	* (getter/setter) The y value of the vector.
	*
	* @type {number}
	* @default 0
	*/
  set y(y) {
    if(typeof y == 'number') {
      this._y = y;
    } else {
      throw new TypeError('Y should be a number');
    }
  }
  get y() {
    return this._y || 0;
  }

	/**
	* (getter/setter) The length of the vector presented as a square. If you're using
	* length for comparison, this is quicker.
	*
	* @type {number}
	* @default 0
	*/
  set lengthSquared(length) {
    var factor;
    if(typeof length == 'number') {
      factor = length / this.lengthSquared;
      this.multiplyScalar(factor);
    } else {
      throw new TypeError('length should be a number');
    }
  }
  get lengthSquared() {
    return (this.x * this.x) + (this.y * this.y);
  }

	/**
	* (getter/setter) The length of the vector
	*
	* @type {number}
	* @default 0
	*/
  set length(length) {
    var factor;
    if(typeof length == 'number') {
      factor = length / this.length;
      this.multiplyScalar(factor);
    } else {
      throw new TypeError('length should be a number');
    }
  }
  get length() {
    return Math.sqrt(this.lengthSquared);
  }

	/**
	* (getter/setter) The angle of the vector, in radians
	*
	* @type {number}
	* @default 0
	*/
  set angle(radian) {
    if(typeof radian == 'number') {
      this.rotateTo(radian);
    } else {
      throw new TypeError('angle should be a number');
    }
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }

	/**
	* (getter/setter) The angle of the vector, in degrees
	*
	* @type {number}
	* @default 0
	*/
  set angleInDegrees(degrees) {
    if(typeof degrees == 'number') {
      this.rotateToDeg(degrees);
    } else {
      throw new TypeError('angle should be a number');
    }
  }
  get angleInDegrees() {
    return radianToDegrees(Math.atan2(this.y, this.x));
  }

	/**
	 * (getter/setter) Vector width.
   * Alias of {@link Vector#x x}
	 *
	 * @type {number}
	 */
	set width(w) {
		this.x = w;
	}
	get width() {
		return this.x;
	}

	/**
	 * (getter/setter) Vector height.
   * Alias of {@link Vector#x x}
	 *
	 * @type {number}
	 */
	set height(h) {
		this.y = h;
	}
	get height() {
		return this.y;
	}

	/**
	 * (getter/setter) Vector area.
	 * @readonly
	 *
	 * @type {number}
	 */
	get area() {
		return this.x * this.y;
	}
  
  // TODO Add this to the main class
  get slope() {
    return this.y / this.x;
  }

}

// This keeps track of the actual mouse position
let mouse = new Vector(0,0);
// This is the position of the printer, lags behind the mouse pos because of `speed`
let printer = new Vector(window.innerWidth * .5,window.innerHeight * .5);
// The last position that there was a print
let lastPrintPos = new Vector(0,0);
// The speed of the printer
let speed = 2;
// The amount of space between each print, this is sort of treated like a threshold, 
// so that when the printer moves, if the movement since the last print is greater
// than this number, a new print is made
let distanceBetweenPrints = 25;
// This determines lef/right transition
let lastPrintSide = false;
// this determines how far left or right the print should be
let offsetLength = 20;
// this is used to detemine if the mouse has moved soe that we can create a pattern
// that demonstrates the effect prior to the user moving their mouse.
let mousemoved = false;

// Listen to mouse move
window.addEventListener('mousemove', (e)=> {
  mousemoved = true;
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// This is just a class that encapsulates all of the basic functionality of each paw print.
class Print {
  constructor(pos, angle) {
    this.el = document.createElement('div');
    this.el.style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${angle}deg)`;
    this.alive = true;
  }
  
  set opacity(value) {
    if(value > 0.01) {
      this._opacity = value;
      this.el.style.opacity = value;
    } if(value <= 0.01) {
      this.alive = false;
      removePrint(this);
    }
  }
  get opacity() {
    return this._opacity || 1;
  }
  
  set alive(value) {
    this._alive = value === true;
    if(this.alive === true) {
      this.el.className = 'print alive';
    } else {
      this.el.className = 'print dead';
    }
  }
  get alive() {
    return this._alive === true;
  }
}

let prints = [];
const addPrint = (pos, direction) => {
  let print = new Print(pos, direction.angleInDegrees + 90);
  document.body.appendChild(print.el);
  prints.push(print);
  
}
const removePrint = (printToRemove) => {
  prints.forEach((print, i) => {
    if(printToRemove === print) {
      prints.splice(i, 1);
      document.body.removeChild(print.el);
    }
  });
}

let tracer = document.createElement('div');
tracer.className = 'tracer';
document.body.appendChild(tracer);

let start = 3200;
const runtime = (delta) => {
  
  delta += start;
  
  // If the mouse hasn't moved yet, we just create a figure-8 pattern for the printer
  if( mousemoved === false ) {
    mouse.x = window.innerWidth * .5 + Math.cos(delta * .0005) * (window.innerWidth * .45);
    mouse.y = window.innerHeight * .5 + Math.sin(delta * .001) * (window.innerWidth * .25);
  }
  
  // First we subtract the position of the printer from the mouse to get our distance vector
  const distance = mouse.subtractNew(printer);
  // Then we normalise it and multiply it by the speed of the printer to get the directiona and the distance we need to move
  const direction = distance.normaliseNew().multiplyScalar(speed);
  // Then we add this to the printer
  printer.add(direction);
  
  // This is here for testing purposes and just allows us to see where the printer is at any given time
  // Uncomment the line in the CSS panel to see this
  tracer.style.transform = `translate(${printer.x}px, ${printer.y}px)`;
  
  // So here we test whether the distance between the last time we created a paw and the printer is
  // greater than our creation threshold (distanceBetweenPrints)
  if( printer.subtractNew(lastPrintPos).length >= distanceBetweenPrints ) {
    
    // Create the current printer location as the last print position
    lastPrintPos = printer.clone();
    // Alternate between left and right paw
    lastPrintSide = !lastPrintSide;
    // This determines how far off-center the paw appears
    let printOffset = new Vector(offsetLength, 0);
    if(lastPrintSide === true) {
      printOffset = new Vector(-offsetLength, 0);
    }
    printOffset.rotateBy(direction.angle + 1.5708);
    // Finally add the paw print
    addPrint(lastPrintPos.addNew(printOffset), direction);
  }
  
  // Reduce the opacity of each paw print by a multiplicant
  // This produces our fade
  prints.forEach((print, i) => {
    print.opacity = print.opacity * .99;
  });
  
  // Update our speed based on the distance from the printer to the mouse position and clamp it between 2 and 10
  speed = distance.length * .05;
  if(speed < 2) speed = 2;
  if(speed > 10) speed = 10;
  distanceBetweenPrints = 12 * speed * .5;
  if(distanceBetweenPrints < 25) distanceBetweenPrints = 25;
  
  
  requestAnimationFrame(runtime);
}

requestAnimationFrame(runtime);








function updateTime() {
  const now = new Date();
  const hours = now.getUTCHours() + 3; // MSK time zone
  const minutes = now.getUTCMinutes();

  // Format time as HH:MM
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  // Найти элемент
  const timeElement = document.getElementById("currentTime");

  // Обновить текст, если элемент найден
  if (timeElement) {
    timeElement.innerText = `${formattedHours}:${formattedMinutes}`;
  }
}

// Update time every minute
setInterval(updateTime, 60000);

// Initial update
updateTime();






const lapkiContainers = document.querySelectorAll('.home-lapki-cont > div');
  let lastScrollTop = 0; // Переменная для хранения предыдущей позиции прокрутки

  function checkVisibility() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Текущая позиция прокрутки
    const isScrollingDown = currentScrollTop > lastScrollTop; // Определяем направление прокрутки

    lapkiContainers.forEach((container, index) => {
      const rect = container.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        const delay = index * 200;

        setTimeout(() => {
          container.style.opacity = 1;
        }, delay);
      } else {
        if (!isScrollingDown) { // Если скроллим вверх, делаем прозрачным
          container.style.opacity = 0;
        }
      }
    });

    lastScrollTop = currentScrollTop; // Обновляем предыдущую позицию прокрутки
  }

  window.addEventListener('load', checkVisibility);
  window.addEventListener('scroll', checkVisibility);







  //popup info
  
  document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup"); // Один попап
    const triggers = document.querySelectorAll(".popup-info"); // Все кнопки-триггеры
    const close = popup ? popup.querySelector(".close") : null; // Кнопка закрытия
  
    if (triggers.length > 0) {
      triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
          if (popup) {
            popup.style.display = "flex"; // Открытие попапа
          } else {
            console.warn("Popup с id 'popup' не найден.");
          }
        });
      });
    } else {
      console.warn("Кнопки-триггеры с классом 'popup-info' не найдены.");
    }
  
    if (close) {
      close.addEventListener("click", () => {
        if (popup) {
          popup.style.display = "none"; // Закрытие попапа
        } else {
          console.warn("Popup с id 'popup' не найден.");
        }
      });
    } else {
      if (popup) {
        console.warn("Кнопка закрытия с классом 'close' внутри popup не найдена.");
      } else {
        console.warn("Popup с id 'popup' не найден.");
      }
    }
  
  
    if (popup) {
      popup.addEventListener("click", (event) => {
        if (event.target === popup) {
          popup.style.display = "none"; // Закрытие при клике вне контента
        }
      });
    } else {
      console.warn("Popup с id 'popup' не найден.");
    }
  });





var acc = document.getElementsByClassName("accordion12");
var i;

if (acc.length > 0) {
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active12");
      var panel = this.nextElementSibling;
      if (panel) { // Проверяем, существует ли следующий элемент
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      } else {
        console.warn("Нет следующего элемента за аккордеоном.");
      }
    });
  }
} else {
  console.warn("Элементы с классом 'accordion12' не найдены.");
}


 

document.addEventListener('DOMContentLoaded', function() {
  // Этот код будет выполнен только после загрузки DOM

  // Получаем все кнопки с классом 'open-events-popup'
  const buttons = document.querySelectorAll('.open-events-popup');

  // Получаем сам попап
  const popup = document.getElementById('events-popup2');

  // Получаем кнопку закрытия (крестик)
  const closeButton = document.querySelector('.close-button2');

  // Функция для открытия попапа
  function openPopup() {
    if (popup) {
      popup.style.display = 'block';
    } else {
      console.warn('Popup с id "events-popup2" не найден.');
    }
  }

  // Функция для закрытия попапа
  function closePopup() {
    if (popup) {
      popup.style.display = 'none';
    } else {
      console.warn('Popup с id "events-popup2" не найден.');
    }
  }

  // Добавляем обработчик клика для каждой кнопки
  if (buttons.length > 0) {
    buttons.forEach(button => {
      button.addEventListener('click', openPopup);
    });
  } else {
    console.warn('Кнопки с классом "open-events-popup" не найдены.');
  }

  // Добавляем обработчик клика для кнопки закрытия
  if (closeButton) {
    closeButton.addEventListener('click', closePopup);
  } else {
    console.warn('Кнопка закрытия с классом "close-button2" не найдена.');
  }

  // Закрытие попапа при клике вне попапа (необязательно, но удобно)
  window.addEventListener('click', function(event) {
    if (popup && event.target === popup) {
      closePopup();
    }
  });
});