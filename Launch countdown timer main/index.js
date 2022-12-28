const dhms = document.querySelectorAll("h1");

const inter = setInterval(() => {
  dhms[3].innerHTML = dhms[3].innerHTML - 1;
  if (dhms[3].innerHTML.length <= 1) {
    dhms[3].innerHTML = "0" + dhms[3].innerHTML;
  }
  if (dhms[3].innerHTML < 0) {
    dhms[3].innerHTML = 59;
    dhms[2].innerHTML = dhms[2].innerHTML - 1;
    if (dhms[2].innerHTML.length <= 1) {
      dhms[2].innerHTML = "0" + dhms[2].innerHTML;
    }
    if (dhms[2].innerHTML < 0) {
      dhms[2].innerHTML = 59;
      dhms[1].innerHTML = dhms[1].innerHTML - 1;
      if (dhms[1].innerHTML.length <= 1) {
        dhms[1].innerHTML = "0" + dhms[1].innerHTML;
      }
      if (dhms[1].innerHTML < 0) {
        dhms[1].innerHTML = 59;
        dhms[0].innerHTML = dhms[0].innerHTML - 1;
        if (dhms[0].innerHTML.length <= 1) {
          dhms[0].innerHTML = "0" + dhms[0].innerHTML;
        }
      }
    }
  }
}, 1000);

switch (dhms) {
    case dhms[3], dhms[2], dhms[1], dhms[0] == 0 :
        console.log(acabou)
        
        break;

    default:
        break;
}