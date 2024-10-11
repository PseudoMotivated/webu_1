import os

for entry in os.scandir("C:\\Users\\eabdawa001\\Documents\\GitHub\\webu_1\\FotoGalleri\\Compressed"):      
    
     print("<img alt=\"Im not captioning all that\" class=\"img-entry\" src=\"Compressed/" + entry.name + "\"> \n <div class=\"filler\"></div>")
