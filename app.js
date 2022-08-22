// let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrese")) {
//       count--;
//     }
//     else if (styles.contains("increse")) {
//       count++;
//     }
//     else {
//       count = 0;
//     }
//     value.textContent = count;
//   });
// });


const handler = (e) => { 
  let currentValue = Number(document.getElementById('value').textContent);
  const type = e.getAttribute('data-type');
  // const newValue = type === 'res'
  //   ? 0
  //   : type === 'inc'
  //     ? currentValue ++
  //     : currentValue --;

  if (type==='res') {
    currentValue = 0;
  } else if (type==='inc') {
    currentValue++;
  } else {
    currentValue--;
  }

  document.getElementById('value').textContent = newValue;
}
