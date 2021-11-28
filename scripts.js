function genscopyIP() {
    var ip = "03Gens.minehut.gg";
    navigator.clipboard.writeText(ip).then(function () {
        alert("Copied the IP: 03Gens.minehut.gg");
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}
function boxmixcopyIP() {
    var ip = "BoxMix11.minehut.gg";
    navigator.clipboard.writeText(ip).then(function () {
        alert("Copied the IP: BoxMix11.minehut.gg");
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}