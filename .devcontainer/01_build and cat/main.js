function switchOff(){
    document.getElementById("buldImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent="Switch Off";
    document.getElementById("buttonOn").style.backgroundColor="#22c55e";
    document.getElementById("buttonOff").style.backgroundColor="#cbd2d9";
  }

  function switchOn(){
    document.getElementById("buldImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent="Switch On";
    document.getElementById("buttonOn").style.backgroundColor="#cbd2d9";
    document.getElementById("buttonOff").style.backgroundColor="#e12d39";
  }