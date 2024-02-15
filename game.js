const snake = document.getElementsByClassName("field__snake")[0];
const styles = window.getComputedStyle(snake);

document.addEventListener("keydown", (e) =>{
  if (e.code != "ArrowRight" && e.code != "ArrowLeft" &&
    e.code != "ArrowUp" && e.code != "ArrowDown") return;

    if(e.code == "ArrowRight"){
      let x = parseInt(styles.left);
      x += 20;
      snake.style.left = x + "px";
    }
    else if(e.code == "ArrowLeft"){
      x = parseInt(styles.left);
      x -= 20;
      snake.style.left = x + "px";
    }
    else if(e.code == "ArrowUp"){
      let y = parseInt(styles.top);
      y -= 20;
      snake.style.top = y + "px";
    }
    else{
      y = parseInt(styles.top);
      y += 20;
      snake.style.top = y + "px";
    }
});

// document.onkeydown = function (e) {

//   switch (e.keyCode) {
//       case 37:
//           console.log("leftArrow");
//           snake.style.left = 20 + "px";
//           break;
//       case 38:
//           console.log("topArrow");
//           snake.style.top = -20 + "px";
//           break;
//       case 39:
//           console.log("rightArrow");
//           break;
//       case 40:
//           console.log("bottomArrow");
//           break;
//       default:
//           console.log(e.keyCode);
//   }
// };


// elem.addEventListener("focus", () => {
//   console.log("hi");
//   if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
//     event.code != "ArrowUp" && event.code != "ArrowDown") return;

//   let rectSnake = elem.getBoundingClientRect();
//   let x = rectSnake.x + pageXOffset,
//     y = rectSnake.y + pageYOffset;

//   if (event.code == "ArrowRight") x += elem.offsetWidth;
//   if (event.code == "ArrowLeft") x -= elem.offsetWidth;
//   if (event.code == "ArrowUp") y -= elem.offsetHeight;
//   if (event.code == "ArrowDown") y += elem.offsetHeight;

//   elem.style.left = x + "px";
//   elem.style.top = y + "px";
// });

