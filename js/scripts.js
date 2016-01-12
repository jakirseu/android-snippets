 
        $(document).ready(function() {
            $("#toc").append('<h2>Navigation:</h2>')
            $("h1, h2, h3").each(function(i) {
                var current = $(this);
                current.attr("id", "title" + i);

                $("#toc").append("<a id='link" + i + "' href='#title" + i + "' title='" + current.attr("tagName") + "'>" + current.html() + "</a>");
            });
        });
 
