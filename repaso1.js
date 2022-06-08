	/*******************************************************/
	/* acceso(): alert y prompt,let, if,                   */
	/*******************************************************/

	function acceso(){
		let edad=prompt("dime la edad");
		if ( edad<18 ) {
			alert("No puedes entrar");
		} else {
			alert("Bienvenid@ a mi página");
		}
	}

	/*******************************************************/
	/* suma(): vemos el operador + y la función parseInt   */
	/*******************************************************/
	function suma(){
		let x = prompt("Dime la x");
		let y = prompt("Dime la y");
		let suma =  Number(x) + Number(y);
		prompt("La suma es " + suma)
	}
	/***********************************************************/
	/* login(): operador de relación == y op. lógico && (and)  */
	/***********************************************************/
	function login(){
		let usuario = prompt("Introduzca usuario");
		let password = prompt("Introduzca contraseña");
		if (usuario == "admin" || password=="1234") {
			alert("Puede acceder a la página");
		} else {
			alert("Acceso denegado. Credenciales no válidas");
		}
	}
    /***********************************************************/
	/* doble(): función con argumento y devolución de valores  */
	/***********************************************************/
	function doble( n ){
			return 2*n;
	}
	function calculaDoble(){
		let num=prompt("Dime un número");
		alert("El doble de " + num + " es " + doble(num));
	}

	 /***********************************************************/
	/* diceAlineacion(): Arrays                                 */
	/************************************************************/
	function diceAlineacion(){
		let alineacion = ['Benzema','Bale','Marcelo','Sergio Ramos'];
		let posicion = prompt("Dime una posición");
		alert("En la posición " + posicion + " juega " 
			+ alineacion[posicion]);
	}

    /***********************************************************/
	/* sumaHasta(): Bucle for                                   */
	/************************************************************/
	function sumaHasta(){
		let num=prompt("Hasta que número quieres sumar");
		let suma=0;
		for ( let i=1; i<=num; i++) {
			suma = suma + i;
		}
		alert("La suma de los " + num + " primeros números es " + suma)
	}