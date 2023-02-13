const button_calcular = document.querySelector("#calcular");
button_calcular.addEventListener("click", show_result);

const input_ingreso = document.getElementById("ingreso");
// const input_discount = document.getElementById("discount");
const input_gasto = document.querySelector("#gasto");

const result = document.querySelector("#result");

function show_result() {
  result.classList.toggle('inactive')
  const ingreso = input_ingreso.value;
  const gasto = input_gasto.value;
  let new_price;

  if (!ingreso || !gasto) {
    //si no hay price ni discount
    return (result.innerText = "ERROR, no ingresastes valores");
  }else{
    const endudamiento=(Number(ingreso)-Number(gasto))*0.35
    return (result.innerText = `Tu endeudamiento es: S/.${endudamiento}`);
  }


}

///////////////////

// function show_result() {
//   const price = 800;
//   const cupon = input_cupon.value;
//   let new_price;

//   if (!price || !cupon) {
//     //si no hay price ni discount
//     return (result.innerText = "ERROR, no ingresastes valores");
//   }

//   coupons.forEach((item) => {//forEach NO SE USA RETURN,yaque es UNDEFINED
//     //UNDEFINED puede significar que no tiene que hacer nada con el resultado devuelto.
//     //no espera ningún valor de retorno, ya que su propósito es acceder a los elemento
//     if (item.name === cupon) {
//       new_price = (price * (100 - item.discount)) / 100;
//     }
//   });

//   if (!new_price) {
//     result.innerText = "Ingrese un cupon valido";
//   } else {
//     result.innerText = `el nuevo precio con cupon es de: $ ${new_price}`;
//   }

/////////////////////////////

// switch (cupon) {
//   case "rafa":
//     {
//       discount=20
//       let new_price = (price * (100 - discount)) / 100;
//       result.innerText = `el nuevo precio con cupon es de: ${new_price}`;
//     }
//     break;
//   case "leo06":
//     {
//       discount=50
//       let new_price = (price * (100 - discount)) / 100;
//       result.innerText = `el nuevo precio con cupon es: ${new_price}`;
//     }
//     break;
//   default:
//     result.innerText = "Ingrese un cupon valido";
//     break;
// }
// }
