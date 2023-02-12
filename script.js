< script >
    /* When the user clicks on the button,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            toggle between hiding and showing the dropdown content */
    function myyFunction() {
        document.getElementById("myDropdownn").classList.toggle("show");
    }

function filterrFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInputt");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdownn");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
<
/Script>