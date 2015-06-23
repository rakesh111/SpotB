/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditCardAssignment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCardAssignment
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCardAssignment,
            data: lightSwitchApplication.AddEditCardAssignment,
            value: lightSwitchApplication.AddEditCardAssignment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditCardAssignment,
            data: lightSwitchApplication.AddEditCardAssignment,
            value: lightSwitchApplication.CardAssignment
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: lightSwitchApplication.CardAssignment
        },
        CardId: {
            _$class: msls.ContentItem,
            _$name: "CardId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: String
        },
        SpotId: {
            _$class: msls.ContentItem,
            _$name: "SpotId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: lightSwitchApplication.CardAssignment
        },
        FromDate: {
            _$class: msls.ContentItem,
            _$name: "FromDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: Date
        },
        ToDate: {
            _$class: msls.ContentItem,
            _$name: "ToDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCardAssignment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCardAssignment, {
        /// <field>
        /// Called when a new AddEditCardAssignment screen is created.
        /// <br/>created(msls.application.AddEditCardAssignment screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCardAssignment],
        /// <field>
        /// Called before changes on an active AddEditCardAssignment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCardAssignment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCardAssignment],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditCardAssignment().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCardAssignment().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCardAssignment().findContentItem("left"); }],
        /// <field>
        /// Called after the CardId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CardId_postRender: [$element, function () { return new lightSwitchApplication.AddEditCardAssignment().findContentItem("CardId"); }],
        /// <field>
        /// Called after the SpotId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpotId_postRender: [$element, function () { return new lightSwitchApplication.AddEditCardAssignment().findContentItem("SpotId"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCardAssignment().findContentItem("right"); }],
        /// <field>
        /// Called after the FromDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FromDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCardAssignment().findContentItem("FromDate"); }],
        /// <field>
        /// Called after the ToDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ToDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCardAssignment().findContentItem("ToDate"); }]
    });

    lightSwitchApplication.BrowseCardAssignments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCardAssignments
        },
        CardAssignmentList: {
            _$class: msls.ContentItem,
            _$name: "CardAssignmentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCardAssignments,
            data: lightSwitchApplication.BrowseCardAssignments,
            value: lightSwitchApplication.BrowseCardAssignments
        },
        CardAssignments: {
            _$class: msls.ContentItem,
            _$name: "CardAssignments",
            _$parentName: "CardAssignmentList",
            screen: lightSwitchApplication.BrowseCardAssignments,
            data: lightSwitchApplication.BrowseCardAssignments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCardAssignments,
                _$entry: {
                    elementType: lightSwitchApplication.CardAssignment
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "CardAssignments",
            screen: lightSwitchApplication.BrowseCardAssignments,
            data: lightSwitchApplication.CardAssignment,
            value: lightSwitchApplication.CardAssignment
        },
        CardId: {
            _$class: msls.ContentItem,
            _$name: "CardId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCardAssignments,
            data: lightSwitchApplication.CardAssignment,
            value: String
        },
        SpotId: {
            _$class: msls.ContentItem,
            _$name: "SpotId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCardAssignments,
            data: lightSwitchApplication.CardAssignment,
            value: String
        },
        FromDate: {
            _$class: msls.ContentItem,
            _$name: "FromDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCardAssignments,
            data: lightSwitchApplication.CardAssignment,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCardAssignments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCardAssignments, {
        /// <field>
        /// Called when a new BrowseCardAssignments screen is created.
        /// <br/>created(msls.application.BrowseCardAssignments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCardAssignments],
        /// <field>
        /// Called before changes on an active BrowseCardAssignments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCardAssignments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCardAssignments],
        /// <field>
        /// Called after the CardAssignmentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CardAssignmentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCardAssignments().findContentItem("CardAssignmentList"); }],
        /// <field>
        /// Called after the CardAssignments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CardAssignments_postRender: [$element, function () { return new lightSwitchApplication.BrowseCardAssignments().findContentItem("CardAssignments"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseCardAssignments().findContentItem("rows"); }],
        /// <field>
        /// Called after the CardId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CardId_postRender: [$element, function () { return new lightSwitchApplication.BrowseCardAssignments().findContentItem("CardId"); }],
        /// <field>
        /// Called after the SpotId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpotId_postRender: [$element, function () { return new lightSwitchApplication.BrowseCardAssignments().findContentItem("SpotId"); }],
        /// <field>
        /// Called after the FromDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FromDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCardAssignments().findContentItem("FromDate"); }]
    });

    lightSwitchApplication.ViewCardAssignment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewCardAssignment
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.ViewCardAssignment,
            value: lightSwitchApplication.ViewCardAssignment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.ViewCardAssignment,
            value: lightSwitchApplication.CardAssignment
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: lightSwitchApplication.CardAssignment
        },
        CardId: {
            _$class: msls.ContentItem,
            _$name: "CardId",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: String
        },
        SpotId: {
            _$class: msls.ContentItem,
            _$name: "SpotId",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: String
        },
        FromDate: {
            _$class: msls.ContentItem,
            _$name: "FromDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: Date
        },
        ToDate: {
            _$class: msls.ContentItem,
            _$name: "ToDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: lightSwitchApplication.CardAssignment
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCardAssignment,
            data: lightSwitchApplication.CardAssignment,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewCardAssignment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewCardAssignment, {
        /// <field>
        /// Called when a new ViewCardAssignment screen is created.
        /// <br/>created(msls.application.ViewCardAssignment screen)
        /// </field>
        created: [lightSwitchApplication.ViewCardAssignment],
        /// <field>
        /// Called before changes on an active ViewCardAssignment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewCardAssignment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewCardAssignment],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("left"); }],
        /// <field>
        /// Called after the CardId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CardId_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("CardId"); }],
        /// <field>
        /// Called after the SpotId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpotId_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("SpotId"); }],
        /// <field>
        /// Called after the FromDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FromDate_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("FromDate"); }],
        /// <field>
        /// Called after the ToDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ToDate_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("ToDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("right"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewCardAssignment().findContentItem("Modified"); }]
    });

    lightSwitchApplication.AddEditCard.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCard
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.AddEditCard,
            value: lightSwitchApplication.AddEditCard
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.AddEditCard,
            value: lightSwitchApplication.Card
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.Card,
            value: lightSwitchApplication.Card
        },
        ClientId: {
            _$class: msls.ContentItem,
            _$name: "ClientId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.Card,
            value: lightSwitchApplication.Card
        },
        ImageURL: {
            _$class: msls.ContentItem,
            _$name: "ImageURL",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        VideoURL: {
            _$class: msls.ContentItem,
            _$name: "VideoURL",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.Card,
            value: lightSwitchApplication.Client
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Client",
            screen: lightSwitchApplication.AddEditCard,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCard
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCard, {
        /// <field>
        /// Called when a new AddEditCard screen is created.
        /// <br/>created(msls.application.AddEditCard screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCard],
        /// <field>
        /// Called before changes on an active AddEditCard screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCard screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCard],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("left"); }],
        /// <field>
        /// Called after the ClientId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("ClientId"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("Title"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("right"); }],
        /// <field>
        /// Called after the ImageURL content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImageURL_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("ImageURL"); }],
        /// <field>
        /// Called after the VideoURL content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VideoURL_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("VideoURL"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("Client"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditCard().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseCards.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCards
        },
        CardList: {
            _$class: msls.ContentItem,
            _$name: "CardList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCards,
            data: lightSwitchApplication.BrowseCards,
            value: lightSwitchApplication.BrowseCards
        },
        Cards: {
            _$class: msls.ContentItem,
            _$name: "Cards",
            _$parentName: "CardList",
            screen: lightSwitchApplication.BrowseCards,
            data: lightSwitchApplication.BrowseCards,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCards,
                _$entry: {
                    elementType: lightSwitchApplication.Card
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Cards",
            screen: lightSwitchApplication.BrowseCards,
            data: lightSwitchApplication.Card,
            value: lightSwitchApplication.Card
        },
        ClientId: {
            _$class: msls.ContentItem,
            _$name: "ClientId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCards,
            data: lightSwitchApplication.Card,
            value: String
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCards,
            data: lightSwitchApplication.Card,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCards,
            data: lightSwitchApplication.Card,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCards
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCards, {
        /// <field>
        /// Called when a new BrowseCards screen is created.
        /// <br/>created(msls.application.BrowseCards screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCards],
        /// <field>
        /// Called before changes on an active BrowseCards screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCards screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCards],
        /// <field>
        /// Called after the CardList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CardList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCards().findContentItem("CardList"); }],
        /// <field>
        /// Called after the Cards content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Cards_postRender: [$element, function () { return new lightSwitchApplication.BrowseCards().findContentItem("Cards"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseCards().findContentItem("rows"); }],
        /// <field>
        /// Called after the ClientId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId_postRender: [$element, function () { return new lightSwitchApplication.BrowseCards().findContentItem("ClientId"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.BrowseCards().findContentItem("Title"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseCards().findContentItem("Description"); }]
    });

    lightSwitchApplication.ViewCard.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewCard
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.ViewCard,
            value: lightSwitchApplication.ViewCard
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.ViewCard,
            value: lightSwitchApplication.Card
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: lightSwitchApplication.Card
        },
        ClientId: {
            _$class: msls.ContentItem,
            _$name: "ClientId",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        ImageURL: {
            _$class: msls.ContentItem,
            _$name: "ImageURL",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        VideoURL: {
            _$class: msls.ContentItem,
            _$name: "VideoURL",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: lightSwitchApplication.Card
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: lightSwitchApplication.Client
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewCard,
            data: lightSwitchApplication.Card,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewCard
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewCard, {
        /// <field>
        /// Called when a new ViewCard screen is created.
        /// <br/>created(msls.application.ViewCard screen)
        /// </field>
        created: [lightSwitchApplication.ViewCard],
        /// <field>
        /// Called before changes on an active ViewCard screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewCard screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewCard],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("left"); }],
        /// <field>
        /// Called after the ClientId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("ClientId"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("Title"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("Description"); }],
        /// <field>
        /// Called after the ImageURL content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImageURL_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("ImageURL"); }],
        /// <field>
        /// Called after the VideoURL content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VideoURL_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("VideoURL"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("right"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("Client"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewCard().findContentItem("Modified"); }]
    });

    lightSwitchApplication.AddEditClient.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditClient
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.AddEditClient
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.Client
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        UserId: {
            _$class: msls.ContentItem,
            _$name: "UserId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Password: {
            _$class: msls.ContentItem,
            _$name: "Password",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Pin: {
            _$class: msls.ContentItem,
            _$name: "Pin",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: Number
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Phone: {
            _$class: msls.ContentItem,
            _$name: "Phone",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Notes: {
            _$class: msls.ContentItem,
            _$name: "Notes",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditClient
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditClient, {
        /// <field>
        /// Called when a new AddEditClient screen is created.
        /// <br/>created(msls.application.AddEditClient screen)
        /// </field>
        created: [lightSwitchApplication.AddEditClient],
        /// <field>
        /// Called before changes on an active AddEditClient screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditClient screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditClient],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("left"); }],
        /// <field>
        /// Called after the UserId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserId_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("UserId"); }],
        /// <field>
        /// Called after the Password content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Password_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Password"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Description"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Address1"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("right"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Address2"); }],
        /// <field>
        /// Called after the Pin content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Pin_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Pin"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Phone"); }],
        /// <field>
        /// Called after the Notes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Notes_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Notes"); }]
    });

    lightSwitchApplication.BrowseClients.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseClients
        },
        ClientList: {
            _$class: msls.ContentItem,
            _$name: "ClientList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.BrowseClients,
            value: lightSwitchApplication.BrowseClients
        },
        Clients: {
            _$class: msls.ContentItem,
            _$name: "Clients",
            _$parentName: "ClientList",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.BrowseClients,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseClients,
                _$entry: {
                    elementType: lightSwitchApplication.Client
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Clients",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        UserId: {
            _$class: msls.ContentItem,
            _$name: "UserId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: String
        },
        Password: {
            _$class: msls.ContentItem,
            _$name: "Password",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseClients
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseClients, {
        /// <field>
        /// Called when a new BrowseClients screen is created.
        /// <br/>created(msls.application.BrowseClients screen)
        /// </field>
        created: [lightSwitchApplication.BrowseClients],
        /// <field>
        /// Called before changes on an active BrowseClients screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseClients screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseClients],
        /// <field>
        /// Called after the ClientList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientList_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("ClientList"); }],
        /// <field>
        /// Called after the Clients content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Clients_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("Clients"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("rows"); }],
        /// <field>
        /// Called after the UserId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserId_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("UserId"); }],
        /// <field>
        /// Called after the Password content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Password_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("Password"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("Name"); }]
    });

    lightSwitchApplication.ViewClient.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewClient
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.ViewClient,
            value: lightSwitchApplication.ViewClient
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.ViewClient,
            value: lightSwitchApplication.Client
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        UserId: {
            _$class: msls.ContentItem,
            _$name: "UserId",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Password: {
            _$class: msls.ContentItem,
            _$name: "Password",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Address1: {
            _$class: msls.ContentItem,
            _$name: "Address1",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Address2: {
            _$class: msls.ContentItem,
            _$name: "Address2",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Pin: {
            _$class: msls.ContentItem,
            _$name: "Pin",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Phone: {
            _$class: msls.ContentItem,
            _$name: "Phone",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Notes: {
            _$class: msls.ContentItem,
            _$name: "Notes",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Client,
            value: Date
        },
        Hubs: {
            _$class: msls.ContentItem,
            _$name: "Hubs",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.ViewClient,
            value: lightSwitchApplication.ViewClient
        },
        Hubs1: {
            _$class: msls.ContentItem,
            _$name: "Hubs1",
            _$parentName: "Hubs",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.ViewClient,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewClient,
                _$entry: {
                    elementType: lightSwitchApplication.Hub
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Hubs1",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Hub,
            value: lightSwitchApplication.Hub
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Hub,
            value: String
        },
        ClientId: {
            _$class: msls.ContentItem,
            _$name: "ClientId",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Spots: {
            _$class: msls.ContentItem,
            _$name: "Spots",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.ViewClient,
            value: lightSwitchApplication.ViewClient
        },
        Spots1: {
            _$class: msls.ContentItem,
            _$name: "Spots1",
            _$parentName: "Spots",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.ViewClient,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewClient,
                _$entry: {
                    elementType: lightSwitchApplication.Spot
                }
            }
        },
        rows1: {
            _$class: msls.ContentItem,
            _$name: "rows1",
            _$parentName: "Spots1",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Spot,
            value: lightSwitchApplication.Spot
        },
        ClientId1: {
            _$class: msls.ContentItem,
            _$name: "ClientId1",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Spot,
            value: String
        },
        MapX: {
            _$class: msls.ContentItem,
            _$name: "MapX",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Spot,
            value: Number
        },
        MapY: {
            _$class: msls.ContentItem,
            _$name: "MapY",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Spot,
            value: Number
        },
        Cards: {
            _$class: msls.ContentItem,
            _$name: "Cards",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.ViewClient,
            value: lightSwitchApplication.ViewClient
        },
        Cards1: {
            _$class: msls.ContentItem,
            _$name: "Cards1",
            _$parentName: "Cards",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.ViewClient,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewClient,
                _$entry: {
                    elementType: lightSwitchApplication.Card
                }
            }
        },
        rows2: {
            _$class: msls.ContentItem,
            _$name: "rows2",
            _$parentName: "Cards1",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Card,
            value: lightSwitchApplication.Card
        },
        ClientId2: {
            _$class: msls.ContentItem,
            _$name: "ClientId2",
            _$parentName: "rows2",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Card,
            value: String
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "rows2",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Card,
            value: String
        },
        Description2: {
            _$class: msls.ContentItem,
            _$name: "Description2",
            _$parentName: "rows2",
            screen: lightSwitchApplication.ViewClient,
            data: lightSwitchApplication.Card,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewClient
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewClient, {
        /// <field>
        /// Called when a new ViewClient screen is created.
        /// <br/>created(msls.application.ViewClient screen)
        /// </field>
        created: [lightSwitchApplication.ViewClient],
        /// <field>
        /// Called before changes on an active ViewClient screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewClient screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewClient],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("left"); }],
        /// <field>
        /// Called after the UserId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserId_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("UserId"); }],
        /// <field>
        /// Called after the Password content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Password_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Password"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Description"); }],
        /// <field>
        /// Called after the Address1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address1_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Address1"); }],
        /// <field>
        /// Called after the Address2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address2_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Address2"); }],
        /// <field>
        /// Called after the Pin content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Pin_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Pin"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("right"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Phone"); }],
        /// <field>
        /// Called after the Notes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Notes_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Notes"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Modified"); }],
        /// <field>
        /// Called after the Hubs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hubs_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Hubs"); }],
        /// <field>
        /// Called after the Hubs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hubs1_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Hubs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Description1"); }],
        /// <field>
        /// Called after the ClientId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("ClientId"); }],
        /// <field>
        /// Called after the Spots content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Spots_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Spots"); }],
        /// <field>
        /// Called after the Spots1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Spots1_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Spots1"); }],
        /// <field>
        /// Called after the rows1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows1_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("rows1"); }],
        /// <field>
        /// Called after the ClientId1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId1_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("ClientId1"); }],
        /// <field>
        /// Called after the MapX content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapX_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("MapX"); }],
        /// <field>
        /// Called after the MapY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapY_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("MapY"); }],
        /// <field>
        /// Called after the Cards content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Cards_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Cards"); }],
        /// <field>
        /// Called after the Cards1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Cards1_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Cards1"); }],
        /// <field>
        /// Called after the rows2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows2_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("rows2"); }],
        /// <field>
        /// Called after the ClientId2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId2_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("ClientId2"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Title"); }],
        /// <field>
        /// Called after the Description2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description2_postRender: [$element, function () { return new lightSwitchApplication.ViewClient().findContentItem("Description2"); }]
    });

    lightSwitchApplication.AddEditHub.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditHub
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.AddEditHub,
            value: lightSwitchApplication.AddEditHub
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.AddEditHub,
            value: lightSwitchApplication.Hub
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: lightSwitchApplication.Hub
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        ClientId: {
            _$class: msls.ContentItem,
            _$name: "ClientId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Lat: {
            _$class: msls.ContentItem,
            _$name: "Lat",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Lon: {
            _$class: msls.ContentItem,
            _$name: "Lon",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        MapX: {
            _$class: msls.ContentItem,
            _$name: "MapX",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: lightSwitchApplication.Hub
        },
        MapY: {
            _$class: msls.ContentItem,
            _$name: "MapY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: Number
        },
        Decriptions: {
            _$class: msls.ContentItem,
            _$name: "Decriptions",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Detail: {
            _$class: msls.ContentItem,
            _$name: "Detail",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        ParentHubId: {
            _$class: msls.ContentItem,
            _$name: "ParentHubId",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Hub,
            value: lightSwitchApplication.Client
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Client",
            screen: lightSwitchApplication.AddEditHub,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditHub
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditHub, {
        /// <field>
        /// Called when a new AddEditHub screen is created.
        /// <br/>created(msls.application.AddEditHub screen)
        /// </field>
        created: [lightSwitchApplication.AddEditHub],
        /// <field>
        /// Called before changes on an active AddEditHub screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditHub screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditHub],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("Description"); }],
        /// <field>
        /// Called after the ClientId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("ClientId"); }],
        /// <field>
        /// Called after the Lat content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lat_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("Lat"); }],
        /// <field>
        /// Called after the Lon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lon_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("Lon"); }],
        /// <field>
        /// Called after the MapX content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapX_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("MapX"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("right"); }],
        /// <field>
        /// Called after the MapY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapY_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("MapY"); }],
        /// <field>
        /// Called after the Decriptions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Decriptions_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("Decriptions"); }],
        /// <field>
        /// Called after the Detail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Detail_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("Detail"); }],
        /// <field>
        /// Called after the ParentHubId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ParentHubId_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("ParentHubId"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("Client"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditHub().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseHubs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseHubs
        },
        HubList: {
            _$class: msls.ContentItem,
            _$name: "HubList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseHubs,
            data: lightSwitchApplication.BrowseHubs,
            value: lightSwitchApplication.BrowseHubs
        },
        Hubs: {
            _$class: msls.ContentItem,
            _$name: "Hubs",
            _$parentName: "HubList",
            screen: lightSwitchApplication.BrowseHubs,
            data: lightSwitchApplication.BrowseHubs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseHubs,
                _$entry: {
                    elementType: lightSwitchApplication.Hub
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Hubs",
            screen: lightSwitchApplication.BrowseHubs,
            data: lightSwitchApplication.Hub,
            value: lightSwitchApplication.Hub
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseHubs,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseHubs,
            data: lightSwitchApplication.Hub,
            value: String
        },
        ClientId: {
            _$class: msls.ContentItem,
            _$name: "ClientId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseHubs,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseHubs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseHubs, {
        /// <field>
        /// Called when a new BrowseHubs screen is created.
        /// <br/>created(msls.application.BrowseHubs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseHubs],
        /// <field>
        /// Called before changes on an active BrowseHubs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseHubs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseHubs],
        /// <field>
        /// Called after the HubList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HubList_postRender: [$element, function () { return new lightSwitchApplication.BrowseHubs().findContentItem("HubList"); }],
        /// <field>
        /// Called after the Hubs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hubs_postRender: [$element, function () { return new lightSwitchApplication.BrowseHubs().findContentItem("Hubs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseHubs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseHubs().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseHubs().findContentItem("Description"); }],
        /// <field>
        /// Called after the ClientId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId_postRender: [$element, function () { return new lightSwitchApplication.BrowseHubs().findContentItem("ClientId"); }]
    });

    lightSwitchApplication.ViewHub.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewHub
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.ViewHub,
            value: lightSwitchApplication.ViewHub
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.ViewHub,
            value: lightSwitchApplication.Hub
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: lightSwitchApplication.Hub
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        ClientId: {
            _$class: msls.ContentItem,
            _$name: "ClientId",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Lat: {
            _$class: msls.ContentItem,
            _$name: "Lat",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Lon: {
            _$class: msls.ContentItem,
            _$name: "Lon",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        MapX: {
            _$class: msls.ContentItem,
            _$name: "MapX",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: Number
        },
        MapY: {
            _$class: msls.ContentItem,
            _$name: "MapY",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: Number
        },
        Decriptions: {
            _$class: msls.ContentItem,
            _$name: "Decriptions",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: lightSwitchApplication.Hub
        },
        Detail: {
            _$class: msls.ContentItem,
            _$name: "Detail",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        ParentHubId: {
            _$class: msls.ContentItem,
            _$name: "ParentHubId",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: lightSwitchApplication.Client
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewHub,
            data: lightSwitchApplication.Hub,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewHub
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewHub, {
        /// <field>
        /// Called when a new ViewHub screen is created.
        /// <br/>created(msls.application.ViewHub screen)
        /// </field>
        created: [lightSwitchApplication.ViewHub],
        /// <field>
        /// Called before changes on an active ViewHub screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewHub screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewHub],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("Description"); }],
        /// <field>
        /// Called after the ClientId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("ClientId"); }],
        /// <field>
        /// Called after the Lat content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lat_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("Lat"); }],
        /// <field>
        /// Called after the Lon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lon_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("Lon"); }],
        /// <field>
        /// Called after the MapX content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapX_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("MapX"); }],
        /// <field>
        /// Called after the MapY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapY_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("MapY"); }],
        /// <field>
        /// Called after the Decriptions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Decriptions_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("Decriptions"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("right"); }],
        /// <field>
        /// Called after the Detail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Detail_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("Detail"); }],
        /// <field>
        /// Called after the ParentHubId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ParentHubId_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("ParentHubId"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("Client"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewHub().findContentItem("Modified"); }]
    });

    lightSwitchApplication.AddEditSpotAssignment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSpotAssignment
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditSpotAssignment,
            data: lightSwitchApplication.AddEditSpotAssignment,
            value: lightSwitchApplication.AddEditSpotAssignment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditSpotAssignment,
            data: lightSwitchApplication.AddEditSpotAssignment,
            value: lightSwitchApplication.SpotAssignment
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: lightSwitchApplication.SpotAssignment
        },
        HubId: {
            _$class: msls.ContentItem,
            _$name: "HubId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: String
        },
        SpotId: {
            _$class: msls.ContentItem,
            _$name: "SpotId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: lightSwitchApplication.SpotAssignment
        },
        FromDate: {
            _$class: msls.ContentItem,
            _$name: "FromDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: Date
        },
        ToDate: {
            _$class: msls.ContentItem,
            _$name: "ToDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSpotAssignment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditSpotAssignment, {
        /// <field>
        /// Called when a new AddEditSpotAssignment screen is created.
        /// <br/>created(msls.application.AddEditSpotAssignment screen)
        /// </field>
        created: [lightSwitchApplication.AddEditSpotAssignment],
        /// <field>
        /// Called before changes on an active AddEditSpotAssignment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditSpotAssignment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditSpotAssignment],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpotAssignment().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpotAssignment().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpotAssignment().findContentItem("left"); }],
        /// <field>
        /// Called after the HubId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HubId_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpotAssignment().findContentItem("HubId"); }],
        /// <field>
        /// Called after the SpotId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpotId_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpotAssignment().findContentItem("SpotId"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpotAssignment().findContentItem("right"); }],
        /// <field>
        /// Called after the FromDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FromDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpotAssignment().findContentItem("FromDate"); }],
        /// <field>
        /// Called after the ToDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ToDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpotAssignment().findContentItem("ToDate"); }]
    });

    lightSwitchApplication.BrowseSpotAssignments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSpotAssignments
        },
        SpotAssignmentList: {
            _$class: msls.ContentItem,
            _$name: "SpotAssignmentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseSpotAssignments,
            data: lightSwitchApplication.BrowseSpotAssignments,
            value: lightSwitchApplication.BrowseSpotAssignments
        },
        SpotAssignments: {
            _$class: msls.ContentItem,
            _$name: "SpotAssignments",
            _$parentName: "SpotAssignmentList",
            screen: lightSwitchApplication.BrowseSpotAssignments,
            data: lightSwitchApplication.BrowseSpotAssignments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseSpotAssignments,
                _$entry: {
                    elementType: lightSwitchApplication.SpotAssignment
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "SpotAssignments",
            screen: lightSwitchApplication.BrowseSpotAssignments,
            data: lightSwitchApplication.SpotAssignment,
            value: lightSwitchApplication.SpotAssignment
        },
        HubId: {
            _$class: msls.ContentItem,
            _$name: "HubId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSpotAssignments,
            data: lightSwitchApplication.SpotAssignment,
            value: String
        },
        SpotId: {
            _$class: msls.ContentItem,
            _$name: "SpotId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSpotAssignments,
            data: lightSwitchApplication.SpotAssignment,
            value: String
        },
        FromDate: {
            _$class: msls.ContentItem,
            _$name: "FromDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSpotAssignments,
            data: lightSwitchApplication.SpotAssignment,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSpotAssignments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseSpotAssignments, {
        /// <field>
        /// Called when a new BrowseSpotAssignments screen is created.
        /// <br/>created(msls.application.BrowseSpotAssignments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseSpotAssignments],
        /// <field>
        /// Called before changes on an active BrowseSpotAssignments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseSpotAssignments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseSpotAssignments],
        /// <field>
        /// Called after the SpotAssignmentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpotAssignmentList_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpotAssignments().findContentItem("SpotAssignmentList"); }],
        /// <field>
        /// Called after the SpotAssignments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpotAssignments_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpotAssignments().findContentItem("SpotAssignments"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpotAssignments().findContentItem("rows"); }],
        /// <field>
        /// Called after the HubId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HubId_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpotAssignments().findContentItem("HubId"); }],
        /// <field>
        /// Called after the SpotId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpotId_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpotAssignments().findContentItem("SpotId"); }],
        /// <field>
        /// Called after the FromDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FromDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpotAssignments().findContentItem("FromDate"); }]
    });

    lightSwitchApplication.ViewSpotAssignment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewSpotAssignment
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.ViewSpotAssignment,
            value: lightSwitchApplication.ViewSpotAssignment
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.ViewSpotAssignment,
            value: lightSwitchApplication.SpotAssignment
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: lightSwitchApplication.SpotAssignment
        },
        HubId: {
            _$class: msls.ContentItem,
            _$name: "HubId",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: String
        },
        SpotId: {
            _$class: msls.ContentItem,
            _$name: "SpotId",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: String
        },
        FromDate: {
            _$class: msls.ContentItem,
            _$name: "FromDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: Date
        },
        ToDate: {
            _$class: msls.ContentItem,
            _$name: "ToDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: lightSwitchApplication.SpotAssignment
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSpotAssignment,
            data: lightSwitchApplication.SpotAssignment,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewSpotAssignment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewSpotAssignment, {
        /// <field>
        /// Called when a new ViewSpotAssignment screen is created.
        /// <br/>created(msls.application.ViewSpotAssignment screen)
        /// </field>
        created: [lightSwitchApplication.ViewSpotAssignment],
        /// <field>
        /// Called before changes on an active ViewSpotAssignment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewSpotAssignment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewSpotAssignment],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("left"); }],
        /// <field>
        /// Called after the HubId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HubId_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("HubId"); }],
        /// <field>
        /// Called after the SpotId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpotId_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("SpotId"); }],
        /// <field>
        /// Called after the FromDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FromDate_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("FromDate"); }],
        /// <field>
        /// Called after the ToDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ToDate_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("ToDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("right"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewSpotAssignment().findContentItem("Modified"); }]
    });

    lightSwitchApplication.AddEditSpot.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSpot
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditSpot,
            data: lightSwitchApplication.AddEditSpot,
            value: lightSwitchApplication.AddEditSpot
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditSpot,
            data: lightSwitchApplication.AddEditSpot,
            value: lightSwitchApplication.Spot
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSpot,
            data: lightSwitchApplication.Spot,
            value: lightSwitchApplication.Spot
        },
        ClientId: {
            _$class: msls.ContentItem,
            _$name: "ClientId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSpot,
            data: lightSwitchApplication.Spot,
            value: String
        },
        MapX: {
            _$class: msls.ContentItem,
            _$name: "MapX",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSpot,
            data: lightSwitchApplication.Spot,
            value: Number
        },
        MapY: {
            _$class: msls.ContentItem,
            _$name: "MapY",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSpot,
            data: lightSwitchApplication.Spot,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSpot,
            data: lightSwitchApplication.Spot,
            value: lightSwitchApplication.Spot
        },
        MapZ: {
            _$class: msls.ContentItem,
            _$name: "MapZ",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSpot,
            data: lightSwitchApplication.Spot,
            value: Number
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSpot,
            data: lightSwitchApplication.Spot,
            value: lightSwitchApplication.Client
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Client",
            screen: lightSwitchApplication.AddEditSpot,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSpot
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditSpot, {
        /// <field>
        /// Called when a new AddEditSpot screen is created.
        /// <br/>created(msls.application.AddEditSpot screen)
        /// </field>
        created: [lightSwitchApplication.AddEditSpot],
        /// <field>
        /// Called before changes on an active AddEditSpot screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditSpot screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditSpot],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpot().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpot().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpot().findContentItem("left"); }],
        /// <field>
        /// Called after the ClientId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpot().findContentItem("ClientId"); }],
        /// <field>
        /// Called after the MapX content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapX_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpot().findContentItem("MapX"); }],
        /// <field>
        /// Called after the MapY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapY_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpot().findContentItem("MapY"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpot().findContentItem("right"); }],
        /// <field>
        /// Called after the MapZ content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapZ_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpot().findContentItem("MapZ"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpot().findContentItem("Client"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditSpot().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseSpots.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSpots
        },
        SpotList: {
            _$class: msls.ContentItem,
            _$name: "SpotList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseSpots,
            data: lightSwitchApplication.BrowseSpots,
            value: lightSwitchApplication.BrowseSpots
        },
        Spots: {
            _$class: msls.ContentItem,
            _$name: "Spots",
            _$parentName: "SpotList",
            screen: lightSwitchApplication.BrowseSpots,
            data: lightSwitchApplication.BrowseSpots,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseSpots,
                _$entry: {
                    elementType: lightSwitchApplication.Spot
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Spots",
            screen: lightSwitchApplication.BrowseSpots,
            data: lightSwitchApplication.Spot,
            value: lightSwitchApplication.Spot
        },
        ClientId: {
            _$class: msls.ContentItem,
            _$name: "ClientId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSpots,
            data: lightSwitchApplication.Spot,
            value: String
        },
        MapX: {
            _$class: msls.ContentItem,
            _$name: "MapX",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSpots,
            data: lightSwitchApplication.Spot,
            value: Number
        },
        MapY: {
            _$class: msls.ContentItem,
            _$name: "MapY",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSpots,
            data: lightSwitchApplication.Spot,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSpots
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseSpots, {
        /// <field>
        /// Called when a new BrowseSpots screen is created.
        /// <br/>created(msls.application.BrowseSpots screen)
        /// </field>
        created: [lightSwitchApplication.BrowseSpots],
        /// <field>
        /// Called before changes on an active BrowseSpots screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseSpots screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseSpots],
        /// <field>
        /// Called after the SpotList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpotList_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpots().findContentItem("SpotList"); }],
        /// <field>
        /// Called after the Spots content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Spots_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpots().findContentItem("Spots"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpots().findContentItem("rows"); }],
        /// <field>
        /// Called after the ClientId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpots().findContentItem("ClientId"); }],
        /// <field>
        /// Called after the MapX content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapX_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpots().findContentItem("MapX"); }],
        /// <field>
        /// Called after the MapY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapY_postRender: [$element, function () { return new lightSwitchApplication.BrowseSpots().findContentItem("MapY"); }]
    });

    lightSwitchApplication.ViewSpot.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewSpot
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.ViewSpot,
            value: lightSwitchApplication.ViewSpot
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.ViewSpot,
            value: lightSwitchApplication.Spot
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: lightSwitchApplication.Spot
        },
        ClientId: {
            _$class: msls.ContentItem,
            _$name: "ClientId",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: String
        },
        MapX: {
            _$class: msls.ContentItem,
            _$name: "MapX",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: Number
        },
        MapY: {
            _$class: msls.ContentItem,
            _$name: "MapY",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: Number
        },
        MapZ: {
            _$class: msls.ContentItem,
            _$name: "MapZ",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: Number
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: lightSwitchApplication.Client
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: lightSwitchApplication.Spot
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSpot,
            data: lightSwitchApplication.Spot,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewSpot
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewSpot, {
        /// <field>
        /// Called when a new ViewSpot screen is created.
        /// <br/>created(msls.application.ViewSpot screen)
        /// </field>
        created: [lightSwitchApplication.ViewSpot],
        /// <field>
        /// Called before changes on an active ViewSpot screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewSpot screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewSpot],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("left"); }],
        /// <field>
        /// Called after the ClientId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientId_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("ClientId"); }],
        /// <field>
        /// Called after the MapX content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapX_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("MapX"); }],
        /// <field>
        /// Called after the MapY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapY_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("MapY"); }],
        /// <field>
        /// Called after the MapZ content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MapZ_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("MapZ"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("Client"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("right"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewSpot().findContentItem("Modified"); }]
    });

}(msls.application));