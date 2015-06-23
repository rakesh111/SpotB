/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditCardAssignment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCardAssignment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CardAssignment" type="msls.application.CardAssignment">
        /// Gets or sets the cardAssignment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCardAssignment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCardAssignment", parameters);
    }

    function BrowseCardAssignments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCardAssignments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CardAssignments" type="msls.VisualCollection" elementType="msls.application.CardAssignment">
        /// Gets the cardAssignments for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCardAssignments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCardAssignments", parameters);
    }

    function ViewCardAssignment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewCardAssignment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CardAssignment" type="msls.application.CardAssignment">
        /// Gets or sets the cardAssignment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewCardAssignment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewCardAssignment", parameters);
    }

    function AddEditCard(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCard screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Card" type="msls.application.Card">
        /// Gets or sets the card for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCard.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCard", parameters);
    }

    function BrowseCards(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCards screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Cards" type="msls.VisualCollection" elementType="msls.application.Card">
        /// Gets the cards for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCards.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCards", parameters);
    }

    function ViewCard(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewCard screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Card" type="msls.application.Card">
        /// Gets or sets the card for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewCard.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewCard", parameters);
    }

    function AddEditClient(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditClient screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditClient.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditClient", parameters);
    }

    function BrowseClients(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseClients screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Clients" type="msls.VisualCollection" elementType="msls.application.Client">
        /// Gets the clients for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseClients.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseClients", parameters);
    }

    function ViewClient(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewClient screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this screen.
        /// </field>
        /// <field name="Hubs" type="msls.VisualCollection" elementType="msls.application.Hub">
        /// Gets the hubs for this screen.
        /// </field>
        /// <field name="Spots" type="msls.VisualCollection" elementType="msls.application.Spot">
        /// Gets the spots for this screen.
        /// </field>
        /// <field name="Cards" type="msls.VisualCollection" elementType="msls.application.Card">
        /// Gets the cards for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewClient.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewClient", parameters);
    }

    function AddEditHub(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditHub screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Hub" type="msls.application.Hub">
        /// Gets or sets the hub for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditHub.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditHub", parameters);
    }

    function BrowseHubs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseHubs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Hubs" type="msls.VisualCollection" elementType="msls.application.Hub">
        /// Gets the hubs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseHubs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseHubs", parameters);
    }

    function ViewHub(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewHub screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Hub" type="msls.application.Hub">
        /// Gets or sets the hub for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewHub.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewHub", parameters);
    }

    function AddEditSpotAssignment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSpotAssignment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SpotAssignment" type="msls.application.SpotAssignment">
        /// Gets or sets the spotAssignment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSpotAssignment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSpotAssignment", parameters);
    }

    function BrowseSpotAssignments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseSpotAssignments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SpotAssignments" type="msls.VisualCollection" elementType="msls.application.SpotAssignment">
        /// Gets the spotAssignments for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseSpotAssignments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseSpotAssignments", parameters);
    }

    function ViewSpotAssignment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewSpotAssignment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SpotAssignment" type="msls.application.SpotAssignment">
        /// Gets or sets the spotAssignment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewSpotAssignment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewSpotAssignment", parameters);
    }

    function AddEditSpot(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSpot screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Spot" type="msls.application.Spot">
        /// Gets or sets the spot for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSpot.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSpot", parameters);
    }

    function BrowseSpots(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseSpots screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Spots" type="msls.VisualCollection" elementType="msls.application.Spot">
        /// Gets the spots for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseSpots.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseSpots", parameters);
    }

    function ViewSpot(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewSpot screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Spot" type="msls.application.Spot">
        /// Gets or sets the spot for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewSpot.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewSpot", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditCardAssignment: $defineScreen(AddEditCardAssignment, [
            { name: "CardAssignment", kind: "local", type: lightSwitchApplication.CardAssignment }
        ], [
        ]),

        BrowseCardAssignments: $defineScreen(BrowseCardAssignments, [
            {
                name: "CardAssignments", kind: "collection", elementType: lightSwitchApplication.CardAssignment,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.CardAssignments;
                }
            }
        ], [
        ]),

        ViewCardAssignment: $defineScreen(ViewCardAssignment, [
            { name: "CardAssignment", kind: "local", type: lightSwitchApplication.CardAssignment }
        ], [
        ]),

        AddEditCard: $defineScreen(AddEditCard, [
            { name: "Card", kind: "local", type: lightSwitchApplication.Card }
        ], [
        ]),

        BrowseCards: $defineScreen(BrowseCards, [
            {
                name: "Cards", kind: "collection", elementType: lightSwitchApplication.Card,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Cards;
                }
            }
        ], [
        ]),

        ViewCard: $defineScreen(ViewCard, [
            { name: "Card", kind: "local", type: lightSwitchApplication.Card }
        ], [
        ]),

        AddEditClient: $defineScreen(AddEditClient, [
            { name: "Client", kind: "local", type: lightSwitchApplication.Client }
        ], [
        ]),

        BrowseClients: $defineScreen(BrowseClients, [
            {
                name: "Clients", kind: "collection", elementType: lightSwitchApplication.Client,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Clients;
                }
            }
        ], [
        ]),

        ViewClient: $defineScreen(ViewClient, [
            { name: "Client", kind: "local", type: lightSwitchApplication.Client },
            {
                name: "Hubs", kind: "collection", elementType: lightSwitchApplication.Hub,
                getNavigationProperty: function () {
                    if (this.owner.Client) {
                        return this.owner.Client.details.properties.Hubs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "Spots", kind: "collection", elementType: lightSwitchApplication.Spot,
                getNavigationProperty: function () {
                    if (this.owner.Client) {
                        return this.owner.Client.details.properties.Spots;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "Cards", kind: "collection", elementType: lightSwitchApplication.Card,
                getNavigationProperty: function () {
                    if (this.owner.Client) {
                        return this.owner.Client.details.properties.Cards;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditHub: $defineScreen(AddEditHub, [
            { name: "Hub", kind: "local", type: lightSwitchApplication.Hub }
        ], [
        ]),

        BrowseHubs: $defineScreen(BrowseHubs, [
            {
                name: "Hubs", kind: "collection", elementType: lightSwitchApplication.Hub,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Hubs;
                }
            }
        ], [
        ]),

        ViewHub: $defineScreen(ViewHub, [
            { name: "Hub", kind: "local", type: lightSwitchApplication.Hub }
        ], [
        ]),

        AddEditSpotAssignment: $defineScreen(AddEditSpotAssignment, [
            { name: "SpotAssignment", kind: "local", type: lightSwitchApplication.SpotAssignment }
        ], [
        ]),

        BrowseSpotAssignments: $defineScreen(BrowseSpotAssignments, [
            {
                name: "SpotAssignments", kind: "collection", elementType: lightSwitchApplication.SpotAssignment,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.SpotAssignments;
                }
            }
        ], [
        ]),

        ViewSpotAssignment: $defineScreen(ViewSpotAssignment, [
            { name: "SpotAssignment", kind: "local", type: lightSwitchApplication.SpotAssignment }
        ], [
        ]),

        AddEditSpot: $defineScreen(AddEditSpot, [
            { name: "Spot", kind: "local", type: lightSwitchApplication.Spot }
        ], [
        ]),

        BrowseSpots: $defineScreen(BrowseSpots, [
            {
                name: "Spots", kind: "collection", elementType: lightSwitchApplication.Spot,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Spots;
                }
            }
        ], [
        ]),

        ViewSpot: $defineScreen(ViewSpot, [
            { name: "Spot", kind: "local", type: lightSwitchApplication.Spot }
        ], [
        ]),

        showAddEditCardAssignment: $defineShowScreen(function showAddEditCardAssignment(CardAssignment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCardAssignment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCardAssignment", parameters, options);
        }),

        showBrowseCardAssignments: $defineShowScreen(function showBrowseCardAssignments(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCardAssignments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseCardAssignments", parameters, options);
        }),

        showViewCardAssignment: $defineShowScreen(function showViewCardAssignment(CardAssignment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewCardAssignment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewCardAssignment", parameters, options);
        }),

        showAddEditCard: $defineShowScreen(function showAddEditCard(Card, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCard screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCard", parameters, options);
        }),

        showBrowseCards: $defineShowScreen(function showBrowseCards(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCards screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseCards", parameters, options);
        }),

        showViewCard: $defineShowScreen(function showViewCard(Card, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewCard screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewCard", parameters, options);
        }),

        showAddEditClient: $defineShowScreen(function showAddEditClient(Client, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditClient screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditClient", parameters, options);
        }),

        showBrowseClients: $defineShowScreen(function showBrowseClients(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseClients screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseClients", parameters, options);
        }),

        showViewClient: $defineShowScreen(function showViewClient(Client, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewClient screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewClient", parameters, options);
        }),

        showAddEditHub: $defineShowScreen(function showAddEditHub(Hub, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditHub screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditHub", parameters, options);
        }),

        showBrowseHubs: $defineShowScreen(function showBrowseHubs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseHubs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseHubs", parameters, options);
        }),

        showViewHub: $defineShowScreen(function showViewHub(Hub, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewHub screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewHub", parameters, options);
        }),

        showAddEditSpotAssignment: $defineShowScreen(function showAddEditSpotAssignment(SpotAssignment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSpotAssignment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSpotAssignment", parameters, options);
        }),

        showBrowseSpotAssignments: $defineShowScreen(function showBrowseSpotAssignments(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseSpotAssignments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseSpotAssignments", parameters, options);
        }),

        showViewSpotAssignment: $defineShowScreen(function showViewSpotAssignment(SpotAssignment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewSpotAssignment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewSpotAssignment", parameters, options);
        }),

        showAddEditSpot: $defineShowScreen(function showAddEditSpot(Spot, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSpot screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSpot", parameters, options);
        }),

        showBrowseSpots: $defineShowScreen(function showBrowseSpots(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseSpots screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseSpots", parameters, options);
        }),

        showViewSpot: $defineShowScreen(function showViewSpot(Spot, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewSpot screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewSpot", parameters, options);
        })

    });

}(msls.application));
