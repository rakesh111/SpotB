/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCard.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Card.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Card." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

