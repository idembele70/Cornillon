{
  "doctype": {
    "description": "Generate DOCTYPE",
    "prefix": "!",
    "body": [
      "<!DOCTYPE html>",
      "<html lang=\"fr\">",
      "\t<head>",
      "\t\t<meta charset=\"utf-8\">",
      "\t\t<link rel=\"shortcut icon\" href=\"favicon.png\" type=\"image/png\">",
      "\t\t<title>${1:TITLE}</title>\n",
      "\t\t<link rel=\"stylesheet\" href=\"css/style.css\">",
      "\t</head>\n",
      "\t<body>\n",
      "\t\t$0\n",
      "\t\t<script src=\"js/index.js\"></script>",
      "\t</body>",
      "</html>"
    ]
  }
}