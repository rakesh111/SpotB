/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function CardAssignment(entitySet) {
        /// <summary>
        /// Represents the CardAssignment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cardAssignment.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this cardAssignment.
        /// </field>
        /// <field name="CardId" type="String">
        /// Gets or sets the cardId for this cardAssignment.
        /// </field>
        /// <field name="SpotId" type="String">
        /// Gets or sets the spotId for this cardAssignment.
        /// </field>
        /// <field name="FromDate" type="Date">
        /// Gets or sets the fromDate for this cardAssignment.
        /// </field>
        /// <field name="ToDate" type="Date">
        /// Gets or sets the toDate for this cardAssignment.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this cardAssignment.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this cardAssignment.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this cardAssignment.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this cardAssignment.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this cardAssignment.
        /// </field>
        /// <field name="details" type="msls.application.CardAssignment.Details">
        /// Gets the details for this cardAssignment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Card(entitySet) {
        /// <summary>
        /// Represents the Card entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this card.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this card.
        /// </field>
        /// <field name="ClientId" type="String">
        /// Gets or sets the clientId for this card.
        /// </field>
        /// <field name="Title" type="String">
        /// Gets or sets the title for this card.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this card.
        /// </field>
        /// <field name="ImageURL" type="String">
        /// Gets or sets the imageURL for this card.
        /// </field>
        /// <field name="VideoURL" type="String">
        /// Gets or sets the videoURL for this card.
        /// </field>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this card.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this card.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this card.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this card.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this card.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this card.
        /// </field>
        /// <field name="details" type="msls.application.Card.Details">
        /// Gets the details for this card.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Client(entitySet) {
        /// <summary>
        /// Represents the Client entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this client.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this client.
        /// </field>
        /// <field name="UserId" type="String">
        /// Gets or sets the userId for this client.
        /// </field>
        /// <field name="Password" type="String">
        /// Gets or sets the password for this client.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this client.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this client.
        /// </field>
        /// <field name="Address1" type="String">
        /// Gets or sets the address1 for this client.
        /// </field>
        /// <field name="Address2" type="String">
        /// Gets or sets the address2 for this client.
        /// </field>
        /// <field name="Pin" type="Number">
        /// Gets or sets the pin for this client.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this client.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this client.
        /// </field>
        /// <field name="Notes" type="String">
        /// Gets or sets the notes for this client.
        /// </field>
        /// <field name="Hubs" type="msls.EntityCollection" elementType="msls.application.Hub">
        /// Gets the hubs for this client.
        /// </field>
        /// <field name="Spots" type="msls.EntityCollection" elementType="msls.application.Spot">
        /// Gets the spots for this client.
        /// </field>
        /// <field name="Cards" type="msls.EntityCollection" elementType="msls.application.Card">
        /// Gets the cards for this client.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this client.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this client.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this client.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this client.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this client.
        /// </field>
        /// <field name="details" type="msls.application.Client.Details">
        /// Gets the details for this client.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Hub(entitySet) {
        /// <summary>
        /// Represents the Hub entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this hub.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this hub.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this hub.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this hub.
        /// </field>
        /// <field name="ClientId" type="String">
        /// Gets or sets the clientId for this hub.
        /// </field>
        /// <field name="Lat" type="String">
        /// Gets or sets the lat for this hub.
        /// </field>
        /// <field name="Lon" type="String">
        /// Gets or sets the lon for this hub.
        /// </field>
        /// <field name="MapX" type="Number">
        /// Gets or sets the mapX for this hub.
        /// </field>
        /// <field name="MapY" type="Number">
        /// Gets or sets the mapY for this hub.
        /// </field>
        /// <field name="Decriptions" type="String">
        /// Gets or sets the decriptions for this hub.
        /// </field>
        /// <field name="Detail" type="String">
        /// Gets or sets the detail for this hub.
        /// </field>
        /// <field name="ParentHubId" type="String">
        /// Gets or sets the parentHubId for this hub.
        /// </field>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this hub.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this hub.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this hub.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this hub.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this hub.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this hub.
        /// </field>
        /// <field name="details" type="msls.application.Hub.Details">
        /// Gets the details for this hub.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SpotAssignment(entitySet) {
        /// <summary>
        /// Represents the SpotAssignment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this spotAssignment.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this spotAssignment.
        /// </field>
        /// <field name="HubId" type="String">
        /// Gets or sets the hubId for this spotAssignment.
        /// </field>
        /// <field name="SpotId" type="String">
        /// Gets or sets the spotId for this spotAssignment.
        /// </field>
        /// <field name="FromDate" type="Date">
        /// Gets or sets the fromDate for this spotAssignment.
        /// </field>
        /// <field name="ToDate" type="Date">
        /// Gets or sets the toDate for this spotAssignment.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this spotAssignment.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this spotAssignment.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this spotAssignment.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this spotAssignment.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this spotAssignment.
        /// </field>
        /// <field name="details" type="msls.application.SpotAssignment.Details">
        /// Gets the details for this spotAssignment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Spot(entitySet) {
        /// <summary>
        /// Represents the Spot entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this spot.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this spot.
        /// </field>
        /// <field name="ClientId" type="String">
        /// Gets or sets the clientId for this spot.
        /// </field>
        /// <field name="MapX" type="Number">
        /// Gets or sets the mapX for this spot.
        /// </field>
        /// <field name="MapY" type="Number">
        /// Gets or sets the mapY for this spot.
        /// </field>
        /// <field name="MapZ" type="Number">
        /// Gets or sets the mapZ for this spot.
        /// </field>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this spot.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this spot.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this spot.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this spot.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this spot.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this spot.
        /// </field>
        /// <field name="details" type="msls.application.Spot.Details">
        /// Gets the details for this spot.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="CardAssignments" type="msls.EntitySet">
        /// Gets the CardAssignments entity set.
        /// </field>
        /// <field name="Cards" type="msls.EntitySet">
        /// Gets the Cards entity set.
        /// </field>
        /// <field name="Clients" type="msls.EntitySet">
        /// Gets the Clients entity set.
        /// </field>
        /// <field name="Hubs" type="msls.EntitySet">
        /// Gets the Hubs entity set.
        /// </field>
        /// <field name="SpotAssignments" type="msls.EntitySet">
        /// Gets the SpotAssignments entity set.
        /// </field>
        /// <field name="Spots" type="msls.EntitySet">
        /// Gets the Spots entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        CardAssignment: $defineEntity(CardAssignment, [
            { name: "Id", type: Number },
            { name: "CardId", type: String },
            { name: "SpotId", type: String },
            { name: "FromDate", type: Date },
            { name: "ToDate", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Card: $defineEntity(Card, [
            { name: "Id", type: Number },
            { name: "ClientId", type: String },
            { name: "Title", type: String },
            { name: "Description", type: String },
            { name: "ImageURL", type: String },
            { name: "VideoURL", type: String },
            { name: "Client", kind: "reference", type: Client },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Client: $defineEntity(Client, [
            { name: "Id", type: Number },
            { name: "UserId", type: String },
            { name: "Password", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "Address1", type: String },
            { name: "Address2", type: String },
            { name: "Pin", type: Number },
            { name: "Email", type: String },
            { name: "Phone", type: String },
            { name: "Notes", type: String },
            { name: "Hubs", kind: "collection", elementType: Hub },
            { name: "Spots", kind: "collection", elementType: Spot },
            { name: "Cards", kind: "collection", elementType: Card },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Hub: $defineEntity(Hub, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "ClientId", type: String },
            { name: "Lat", type: String },
            { name: "Lon", type: String },
            { name: "MapX", type: Number },
            { name: "MapY", type: Number },
            { name: "Decriptions", type: String },
            { name: "Detail", type: String },
            { name: "ParentHubId", type: String },
            { name: "Client", kind: "reference", type: Client },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        SpotAssignment: $defineEntity(SpotAssignment, [
            { name: "Id", type: Number },
            { name: "HubId", type: String },
            { name: "SpotId", type: String },
            { name: "FromDate", type: Date },
            { name: "ToDate", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Spot: $defineEntity(Spot, [
            { name: "Id", type: Number },
            { name: "ClientId", type: String },
            { name: "MapX", type: Number },
            { name: "MapY", type: Number },
            { name: "MapZ", type: Number },
            { name: "Client", kind: "reference", type: Client },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "CardAssignments", elementType: CardAssignment },
            { name: "Cards", elementType: Card },
            { name: "Clients", elementType: Client },
            { name: "Hubs", elementType: Hub },
            { name: "SpotAssignments", elementType: SpotAssignment },
            { name: "Spots", elementType: Spot }
        ], [
            {
                name: "CardAssignments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.CardAssignments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/CardAssignments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Cards_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Cards },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Cards(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Clients_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Clients },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Clients(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Hubs_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Hubs },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Hubs(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "SpotAssignments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.SpotAssignments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/SpotAssignments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Spots_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Spots },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Spots(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
