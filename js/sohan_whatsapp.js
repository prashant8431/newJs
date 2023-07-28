(function () {
    var btn = document.getElementsByClassName("liveresult")[0];
    var newNode = document.createElement('div');
    newNode.innerHTML = '<a style="position:fixed;bottom:40px;right:5px;display: block;padding:6px 9px;font-size:17px;border:1px solid #fff;background-color:orange;color:#FFFFFF;border-radius:5px;z-index: 999;" href="https://bit.ly/45649au" target="_blank">Free Games</a>';
    btn.appendChild(newNode);
    document.body.innerHTML = document.body.innerHTML.replace('"&gt;', "");
})();