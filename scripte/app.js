
function download() {
    const div = document.createElement('div');
    div.id = "menu";
    div.innerHTML = "<p id='imp'>Nur für Android</p><be>";
    document.body.appendChild(div)
    const Okay = document.createElement('button');
    const Stop = document.createElement('button');
    Okay.innerText = "Fortfahren";
    Stop.innerText = "Abbrechen";
    Okay.id = "okay";
    Stop.id = "stop";
    div.appendChild(Okay);
    div.appendChild(Stop);
    Okay.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = "Space Run.apk";
        a.download = "Space Run.apk";
        div.appendChild(a);
        a.click();
        div.remove();
    })
    Stop.addEventListener('click', () => {
        div.remove();
    })
}