$(window).on("load", function (e) {
    let result = document.getElementById("text_box");
    result.innerHTML = localStorage.getItem("db");
});

$(window).on('beforeunload', function () {
    let storage = localStorage.getItem("db");
    let text = $('#text_box').text();
    if (storage !== text) {
        return "Attention, voulez vous quittez sans sauvegarder vos dernières actions ?";
    }
});

$("#suppr").click(function () {
    localStorage.removeItem("db");
});


(function ($) {
    jQuery.fn.my_wysiwyg = function (options) {
        let parameters = $.extend({
            buttons: ["bold", "italic", "strikeThrough", "font-size", "justifyLeft", "justifyRight", "justifyCenter", "justifyFull", "foreColor", "color", "link", "Save", "Load", "font-weight"],
            style: "classic"
        }, options);

        let buttonsBar = $('<div>');
        $(buttonsBar).addClass("bar");
        // $('').addClass(parameters.style)
        $(buttonsBar).addClass(parameters.style);
        $('#text_box').addClass(parameters.style)

        $(parameters.buttons).each(function (elem) {
            let buttonNew = $('<button></button>').addClass("bar_button");
            switch (parameters.buttons[elem]) {
                case 'bold':
                    buttonNew.html("<b>B</b>");
                    buttonNew.click(function () {
                        document.execCommand("bold");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'italic':
                    buttonNew.html("<i>I</i>")
                    buttonNew.click(function () {
                        document.execCommand("italic");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'strikeThrough':
                    buttonNew.html("<del>U</del>")
                    buttonNew.click(function () {
                        document.execCommand("strikeThrough");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'font-size':
                    buttonNew.html("A+")
                    let size = 3;
                    buttonNew.click(function () {
                        size++;
                        document.execCommand("fontSize", false, size);
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);

                    let buttonNormal = $('<button>A</button>').addClass("bar_button");
                    buttonNormal.click(function () {
                        size = 3;
                        document.execCommand("fontSize", false, size);
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNormal);

                    let buttonDecrease = $('<button>A-</button>').addClass("bar_button");
                    buttonDecrease.click(function () {
                        size--;
                        document.execCommand("fontSize", false, size);
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonDecrease);
                    break;
                case 'justifyLeft':
                    buttonNew.html("JL")
                    buttonNew.click(function () {
                        document.execCommand("justifyLeft");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'justifyRight':
                    buttonNew.html("JR")
                    buttonNew.click(function () {
                        document.execCommand("justifyRight");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'justifyCenter':
                    buttonNew.html("JC")
                    buttonNew.click(function () {
                        document.execCommand("justifyCenter");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'justifyFull':
                    buttonNew.html("JF")
                    buttonNew.click(function () {
                        document.execCommand("justifyFull");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'color_red':
                    buttonNew.html("<i>Red</i>")
                    buttonNew.click(function () {
                        document.execCommand("foreColor", false, "red");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'color_green':
                    buttonNew.html("<i>green</i>")
                    buttonNew.click(function () {
                        document.execCommand('foreColor', false, "green");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'color':
                    buttonNew.html("<i>black</i>")
                    buttonNew.click(function () {
                        document.execCommand('foreColor', false, "black");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'color_blue':
                    buttonNew.html("<i>blue</i>")
                    buttonNew.click(function () {
                        document.execCommand('foreColor', false, "blue");
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'link':
                    buttonNew.html("<i>Link</i>")
                    buttonNew.click(function () {
                        var linkURL = prompt('Enter a URL:', 'http://');
                        document.execCommand('createLink', false, linkURL);
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);
                    break
                case 'Save':
                    buttonNew.html("Save")
                    buttonNew.click(function () {
                        let text = $('#text_box').text();
                        localStorage.setItem("db", text);

                        function setlocal() {
                            let text = $('#text_box').text();
                            localStorage.setItem("db", text);
                        }
                        let interval = setInterval(setlocal(), 900000);
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'Load':
                    buttonNew.html("Load")
                    buttonNew.click(function () {
                        let result = document.getElementById("text_box");
                        result.innerHTML = localStorage.getItem("db");
                    });
                    buttonsBar.append(buttonNew);
                    break;
                case 'font-weight':
                    buttonNew.html("F+")
                    let weight = [];
                    let i = 2;
                    weight[0] = "Arial Nova Light";
                    weight[1] = "Arial Nova Cond";
                    weight[2] = "Arial Nova";
                    weight[3] = "Arial";
                    weight[4] = "Arial Black";
                    buttonNew.click(function () {
                        i++;
                        document.execCommand("fontName", false, weight[i]);
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(buttonNew);

                    let weightNormal = $('<button>F </button>').addClass("bar_button");
                    weightNormal.click(function () {
                        i = 3;
                        document.execCommand("fontName", false, weight[i]);
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(weightNormal);

                    let weightDecrease = $('<button>F-</button>').addClass("bar_button");
                    weightDecrease.click(function () {
                        i--;
                        document.execCommand("fontName", false, weight[i]);
                        let field = document.getElementById("text_box");
                        field.focus();
                    });
                    buttonsBar.append(weightDecrease);
                    break;
            }
        });
        let thisParent = $(this).parent();
        $(thisParent).append(buttonsBar);

        return buttonsBar;
    };
})(jQuery)