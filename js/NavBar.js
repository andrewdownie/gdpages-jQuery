var NAV_FILE_PATH = "/nav.html"


/////
///// LoadNavBar
/////
function LoadNavBar(navbarReady, insertionElement_ID){
/// insertionElement_ID
///     - where the navbar is to be inserted onto the page
///     - should be the first element in the body, so the nav bar will appear at
///         the top of the page
/// navbarReady
///     - callback function for when the navbar has been loaded to the page
///

    $("#" + insertionElement_ID).load(NAV_FILE_PATH, function(){
        navbarReady()
    });
}


/////
///// AddNavBarLink
/////
function AddNavBarLink(name, id, insertionSelector){
/// DESCRIPTION
///     - Adds a link to the nav bar, by loading folders from the target google
///         drive folder
/// name
///     - the visible text that should be shown in the link
/// id
///     - the html id that should be added to the link
/// insertionSelector
///     - where on the page to insert the link
///     - this must be a valid jQuery selector
///

    $(insertionSelector).append('<li><a id="' + id + '">' + name + '</a></li>')

}
