/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewSpotAssignment.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.SpotAssignment.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.SpotAssignment." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

