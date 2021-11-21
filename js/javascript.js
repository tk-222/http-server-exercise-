<script>
  function clickHandler() {
    const box = document.getElementById("box");
    const p = document.createElement("p");
    p.innerText = "Added by JS";
  }
</script>
<body>
…
  <button onclick="clickHandler()">JS</button>
  <div id="box"></div>
</body>
<script>
  function clickHandler() {
    const box = document.getElementById("box");
    const p = document.createElement("p");
    p.innerText = "Added by JS";
    box.appendChild(p);
  }
</script>
<body>
…
  <button onclick="clickHandler()">JS</button>
  <div id="box"></div>
</body>
