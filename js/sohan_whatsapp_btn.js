(function () {
    var btn = document.getElementsByClassName("liveresult")[0];
    var newNode = document.createElement('div');
    newNode.innerHTML = '<a style="position:fixed;bottom:40px;display: block;left:5px;padding:5px 8px;font-size:17px;border:1px solid #fff;background-color:blue;color:#FFFFFF;border-radius:5px;z-index: 999;" href="https://bit.ly/3YtOAHI">Whatsapp</a>';
    btn.appendChild(newNode);
    document.body.innerHTML = document.body.innerHTML.replace('"&gt;', "");
})();