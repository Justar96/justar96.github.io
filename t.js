// Getting the list of keywords for help & posting it to the screen
var postHelpList = function () {
    // Array of all the help keywords
    var helpKeyWords = [
        "- 'about' : about Nalongkorn P.",
        "- 'github' : link to all my offline projects.",
        "- 'leetcode' : link to my leetcode profile.",
        "- 'linkdin' : link to my linkdin profile.",
        "- 'email' : send an email to me.",
        "- 'phone' : to call me.",
        "- 'clr' : clear the terminal.",

    ].join('<br>');
    addTextToResults(helpKeyWords);
}
// Opening links in a new window
var openLinkInNewWindow = function (linkToOpen) {
    window.open(linkToOpen, '_blank');
    clearInput();
}

// Having a specific text reply to specific strings
var textReplies = function () {
    switch (textInputValueLowerCase) {
        // replies
        case "about":
            clearInput();
            addTextToResults("Hi.my name is Guitar and i have been programming for 4 months now and some of the language that I am fluent in include JavaScript , Python");
            break;

        case "github":
            clearInput();
            addTextToResults("https://github.com/Justar96");
            break;

        case "leetcode":
            clearInput();
            addTextToResults("https://leetcode.com/justar1996/");
            break;

        case "linkdin":
            clearInput();
            addTextToResults('https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo');
            break;

        case "email":
            clearInput();
            addTextToResults("nalongkon1996@gmail.com");
            break;

        case "phone":
            clearInput();
            addTextToResults("TH : 090-9091325");
            break;

        case "help":
            clearInput();
            postHelpList();
            break;

        default:
            clearInput();
            addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
            break;
    }
}