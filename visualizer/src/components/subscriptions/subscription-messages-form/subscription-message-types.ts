export const subscriptionMessageTypes = [
  'ApprovalFlowApproved',
  'ApprovalFlowCompleted',
  'ApprovalFlowCreated',
  'ApprovalFlowRejected',
  'ApprovalRuleApproversSet',
  'ApprovalRuleCreated',
  'ApprovalRuleDescriptionSet',
  'ApprovalRuleKeySet',
  'ApprovalRuleNameSet',
  'ApprovalRulePredicateSet',
  'ApprovalRuleRequestersSet',
  'ApprovalRuleStatusSet',
  'AssociateRoleBuyerAssignableChanged',
  'AssociateRoleCreated',
  'AssociateRoleDeleted',
  'AssociateRoleNameChanged',
  'AssociateRolePermissionAdded',
  'AssociateRolePermissionRemoved',
  'AssociateRolePermissionsSet',
  'BusinessUnitAddressAdded',
  'BusinessUnitAddressChanged',
  'BusinessUnitAddressCustomFieldAdded',
  'BusinessUnitAddressCustomFieldChanged',
  'BusinessUnitAddressCustomFieldRemoved',
  'BusinessUnitAddressCustomTypeRemoved',
  'BusinessUnitAddressCustomTypeSet',
  'BusinessUnitAddressRemoved',
  'BusinessUnitApprovalRuleModeChanged',
  'BusinessUnitAssociateAdded',
  'BusinessUnitAssociateChanged',
  'BusinessUnitAssociateModeChanged',
  'BusinessUnitAssociateRemoved',
  'BusinessUnitAssociatesSet',
  'BusinessUnitBillingAddressAdded',
  'BusinessUnitBillingAddressRemoved',
  'BusinessUnitContactEmailSet',
  'BusinessUnitCreated',
  'BusinessUnitCustomFieldAdded',
  'BusinessUnitCustomFieldChanged',
  'BusinessUnitCustomFieldRemoved',
  'BusinessUnitCustomTypeRemoved',
  'BusinessUnitCustomTypeSet',
  'BusinessUnitDefaultBillingAddressSet',
  'BusinessUnitDefaultShippingAddressSet',
  'BusinessUnitDeleted',
  'BusinessUnitNameChanged',
  'BusinessUnitParentChanged',
  'BusinessUnitShippingAddressAdded',
  'BusinessUnitShippingAddressRemoved',
  'BusinessUnitStatusChanged',
  'BusinessUnitStoreAdded',
  'BusinessUnitStoreModeChanged',
  'BusinessUnitStoreRemoved',
  'BusinessUnitStoresSet',
  'CartDiscountCreated',
  'CartDiscountDeleted',
  'CartDiscountStoreAdded',
  'CartDiscountStoreRemoved',
  'CartDiscountStoresSet',
  'CategoryCreated',
  'CategorySlugChanged',
  'CustomLineItemStateTransition',
  'CustomerAddressAdded',
  'CustomerAddressChanged',
  'CustomerAddressCustomFieldAdded',
  'CustomerAddressCustomFieldChanged',
  'CustomerAddressCustomFieldRemoved',
  'CustomerAddressCustomTypeRemoved',
  'CustomerAddressCustomTypeSet',
  'CustomerAddressRemoved',
  'CustomerCompanyNameSet',
  'CustomerCreated',
  'CustomerCustomFieldAdded',
  'CustomerCustomFieldChanged',
  'CustomerCustomFieldRemoved',
  'CustomerCustomTypeRemoved',
  'CustomerCustomTypeSet',
  'CustomerDateOfBirthSet',
  'CustomerDeleted',
  'CustomerEmailChanged',
  'CustomerEmailTokenCreated',
  'CustomerEmailVerified',
  'CustomerFirstNameSet',
  'CustomerGroupCustomFieldAdded',
  'CustomerGroupCustomFieldChanged',
  'CustomerGroupCustomFieldRemoved',
  'CustomerGroupCustomTypeRemoved',
  'CustomerGroupCustomTypeSet',
  'CustomerGroupSet',
  'CustomerLastNameSet',
  'CustomerPasswordTokenCreated',
  'CustomerPasswordUpdated',
  'CustomerTitleSet',
  'DeliveryAdded',
  'DeliveryAddressSet',
  'DeliveryCustomFieldAdded',
  'DeliveryCustomFieldChanged',
  'DeliveryCustomFieldRemoved',
  'DeliveryCustomTypeRemoved',
  'DeliveryCustomTypeSet',
  'DeliveryItemsUpdated',
  'DeliveryRemoved',
  'DiscountCodeCreated',
  'DiscountCodeDeleted',
  'DiscountCodeKeySet',
  'InventoryEntryCreated',
  'InventoryEntryDeleted',
  'InventoryEntryQuantitySet',
  'LineItemStateTransition',
  'OrderBillingAddressSet',
  'OrderCreated',
  'OrderCustomFieldAdded',
  'OrderCustomFieldChanged',
  'OrderCustomFieldRemoved',
  'OrderCustomLineItemAdded',
  'OrderCustomLineItemDiscountSet',
  'OrderCustomLineItemQuantityChanged',
  'OrderCustomLineItemRemoved',
  'OrderCustomTypeRemoved',
  'OrderCustomTypeSet',
  'OrderCustomerEmailSet',
  'OrderCustomerGroupSet',
  'OrderCustomerSet',
  'OrderDeleted',
  'OrderDiscountCodeAdded',
  'OrderDiscountCodeRemoved',
  'OrderDiscountCodeStateSet',
  'OrderEditApplied',
  'OrderImported',
  'OrderLineItemAdded',
  'OrderLineItemDiscountSet',
  'OrderLineItemDistributionChannelSet',
  'OrderLineItemRemoved',
  'OrderPaymentAdded',
  'OrderPaymentStateChanged',
  'OrderPurchaseOrderNumberSet',
  'OrderReturnShipmentStateChanged',
  'OrderShipmentStateChanged',
  'OrderShippingAddressSet',
  'OrderShippingInfoSet',
  'OrderShippingRateInputSet',
  'OrderStateChanged',
  'OrderStateTransition',
  'OrderStoreSet',
  'ParcelAddedToDelivery',
  'ParcelItemsUpdated',
  'ParcelMeasurementsUpdated',
  'ParcelRemovedFromDelivery',
  'ParcelTrackingDataUpdated',
  'PaymentCreated',
  'PaymentInteractionAdded',
  'PaymentStatusInterfaceCodeSet',
  'PaymentStatusStateTransition',
  'PaymentTransactionAdded',
  'PaymentTransactionStateChanged',
  'ProductAddedToCategory',
  'ProductCreated',
  'ProductDeleted',
  'ProductImageAdded',
  'ProductPriceAdded',
  'ProductPriceChanged',
  'ProductPriceCustomFieldAdded',
  'ProductPriceCustomFieldChanged',
  'ProductPriceCustomFieldRemoved',
  'ProductPriceCustomFieldsRemoved',
  'ProductPriceCustomFieldsSet',
  'ProductPriceDiscountsSet',
  'ProductPriceExternalDiscountSet',
  'ProductPriceKeySet',
  'ProductPriceModeSet',
  'ProductPriceRemoved',
  'ProductPricesSet',
  'ProductPublished',
  'ProductRemovedFromCategory',
  'ProductRevertedStagedChanges',
  'ProductSelectionCreated',
  'ProductSelectionDeleted',
  'ProductSelectionProductAdded',
  'ProductSelectionProductExcluded',
  'ProductSelectionProductRemoved',
  'ProductSelectionVariantExclusionChanged',
  'ProductSelectionVariantSelectionChanged',
  'ProductSlugChanged',
  'ProductStateTransition',
  'ProductTailoringCreated',
  'ProductTailoringDeleted',
  'ProductTailoringDescriptionSet',
  'ProductTailoringImageAdded',
  'ProductTailoringImagesSet',
  'ProductTailoringNameSet',
  'ProductTailoringPublished',
  'ProductTailoringSlugSet',
  'ProductTailoringUnpublished',
  'ProductUnpublished',
  'ProductVariantAdded',
  'ProductVariantDeleted',
  'ProductVariantTailoringAdded',
  'ProductVariantTailoringRemoved',
  'QuoteCreated',
  'QuoteCustomerChanged',
  'QuoteDeleted',
  'QuoteRenegotiationRequested',
  'QuoteRequestCreated',
  'QuoteRequestCustomerChanged',
  'QuoteRequestDeleted',
  'QuoteRequestStateChanged',
  'QuoteRequestStateTransition',
  'QuoteStateChanged',
  'QuoteStateTransition',
  'ReturnInfoAdded',
  'ReturnInfoSet',
  'ReviewCreated',
  'ReviewRatingSet',
  'ReviewStateTransition',
  'StagedQuoteCreated',
  'StagedQuoteDeleted',
  'StagedQuoteSellerCommentSet',
  'StagedQuoteStateChanged',
  'StagedQuoteStateTransition',
  'StagedQuoteValidToSet',
  'StandalonePriceActiveChanged',
  'StandalonePriceCreated',
  'StandalonePriceDeleted',
  'StandalonePriceDiscountSet',
  'StandalonePriceExternalDiscountSet',
  'StandalonePriceKeySet',
  'StandalonePriceStagedChangesApplied',
  'StandalonePriceStagedChangesRemoved',
  'StandalonePriceTierAdded',
  'StandalonePriceTierRemoved',
  'StandalonePriceTiersSet',
  'StandalonePriceValidFromAndUntilSet',
  'StandalonePriceValidFromSet',
  'StandalonePriceValidUntilSet',
  'StandalonePriceValueChanged',
  'StoreCountriesChanged',
  'StoreCreated',
  'StoreDeleted',
  'StoreDistributionChannelsChanged',
  'StoreLanguagesChanged',
  'StoreNameSet',
  'StoreProductSelectionsChanged',
  'StoreSupplyChannelsChanged',
];
