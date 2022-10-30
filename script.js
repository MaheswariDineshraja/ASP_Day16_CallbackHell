const displaytext = document.getElementById("text");

setTimeout(() => {
  displaytext.innerText = 10;
  setTimeout(() => {
    displaytext.innerText = 9;
    setTimeout(() => {
      displaytext.innerText = 8;
      setTimeout(() => {
        displaytext.innerText = 7;
        setTimeout(() => {
          displaytext.innerText = 6;
          setTimeout(() => {
            displaytext.innerText = 5;
            setTimeout(() => {
              displaytext.innerText = 4;
              setTimeout(() => {
                displaytext.innerText = 3;
                setTimeout(() => {
                  displaytext.innerText = 2;
                  setTimeout(() => {
                    displaytext.innerText = 1;
                    setTimeout(() => {
                        displaytext.innerText = "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);