let a = function () {
  let e = document.getElementById("eps");
  let str1 = document.getElementById("inputform_0").value;
  let x = str1.split(",");
  console.log(x);
  let eps = 0;
  for (let i = 0; i < x.length; i++) {
    for (let j = i; j < x.length; j++) {
      if (x[i] > x[j]) {
        eps++;
      }
    }
  }
  if (eps % 2 == 0) {
    e.value = "1";
  } else {
    e.value = "-1";
  }
};
