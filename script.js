const length = document.querySelector(".l"),
  width = document.querySelector(".w"),
  depth = document.querySelector(".d"),
  calculate = document.querySelector("button"),
  unit = document.querySelector("select"),
  actual = document.querySelector(".ac"),

  resullt = document.querySelector(".r");

calculate.onclick = (e) => {
  if (unit.value == "cm") {
    console.log('CBM IS '+ (((width.value * length.value * depth.value) / 1000000)));
    console.log('Volume weight is ');
    console.log((((((width.value * length.value * depth.value) / 1000))/5000)*1000).toFixed(1));
    var volWe= (((((width.value * length.value * depth.value) / 1000))/5000)*1000).toFixed(1);
    console.log(Number(volWe)>Number(actual.value)?'Chargeable weight is '+ volWe:'Chargeable weight is '+ actual.value);
    resullt.value =
      String((width.value * length.value * depth.value) / 1000000) + "CBM";
  } else if (unit.value == "mm") {
    console.log((width.value * length.value * depth.value) / 1000000000);
    resullt.value =
      String(Number((width.value * length.value * depth.value) / 1000000000)) +
      "CBM";
  } else if (unit.value == "m") {
    console.log('CBM IS '+ (((width.value * length.value * depth.value))));
    console.log('Volume weight is ')
    console.log(((((Number(width.value)*100)*(Number(length.value)*100)*(Number(depth.value)*100)/1000)/5000)*1000).toFixed(1))
    console.log(((((Number(width.value)*100)*(Number(length.value)*100)*(Number(depth.value)*100)*5)/1000)).toFixed(1))
    var volWe=((((Number(width.value)*100)*(Number(length.value)*100)*(Number(depth.value)*100)/1000)/5000)*1000).toFixed(1);
    console.log(Number(volWe)>Number(actual.value)?'Chargeable weight is '+ volWe:'Chargeable weight is '+ actual.value);
    //resullt.value = width.value * length.value * depth.value;
  }
};

