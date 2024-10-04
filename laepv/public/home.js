function openContent(idTab) {
    var content = document.getElementsByClassName('content')
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
    }
    document.getElementById(idTab).style.display = 'block';
}
