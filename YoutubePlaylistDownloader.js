/**
 * Youtube Playlist downloader
 * Author: Surajit Basak
 *
 * Description: It downloads all links from Youtube Playlist
 * Additional Information: To download all videos from links saved in a playlist.txt file
 * you can use youtube-dl (a command line youtube downloader)
 * example usage: 
 * youtube-dl -c --title -f best --batch-file path/to/your/playlist.txt 
 */

var vs = document.querySelectorAll('.yt-simple-endpoint.style-scope.ytd-playlist-panel-video-renderer');
var vsString = "";
vs.forEach(function(elm) {
	var links = elm.href;
	var links_parts = links.split("&");
	var link = links_parts[0];
	vsString += link + "\n";
	
});


download(vsString, 'playlist.txt', 'txt');

// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}