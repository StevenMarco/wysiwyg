<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>Rush WYSIWYG</title>
</head>

<body>
    <div class="top">
        <p>What you see is what you get</p>
        <h1 class="title">My Wysiwyg</h1>
        <br />
    </div>
    <div id="suppr">
        <button id="suppr">Effacer le storage</button>
        <br /><br />
    </div>
    <main>
        <div id="wysiwyg">
            <textarea>
                </textarea>
            <div contenteditable=true name="text_box" id="text_box" class="text_box">
            </div>
        </div>
    </main>
    <div class="footer">
        <p></p>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous">
    </script>
    <script src="my_wysiwyg.js"></script>
    <script type="text/javascript">
        $('textarea').my_wysiwyg({
            buttons: ["bold", "line-through", "italic", "strikeThrough", "font-size", "justifyLeft", "justifyRight", "justifyCenter", "justifyFull",
                "color", "color_red", "color_blue", "color_green", "link", "Save", "Load", "image", "font-weight"
            ]
        });
    </script>
</body>

</html>