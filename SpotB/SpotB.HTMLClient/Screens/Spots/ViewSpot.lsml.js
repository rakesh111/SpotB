/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewSpot.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Spot.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Spot." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

