import {
  transformLocalizedStringToLocalizedField,
  transformLocalizedFieldToLocalizedString,
} from '@commercetools-frontend/l10n';
import { isApolloError, ApolloError, type ServerError } from '@apollo/client';
import type { TChannel } from './types/generated/ctp';
import {
  TGraphqlUpdateAction,
  TSyncAction,
  TChangeNameActionPayload,
  TSetDescriptionActionPayload,
  TChangeLocalizedEnumValueLabelActionPayload,
} from './types';

export const getErrorMessage = (error: ApolloError) =>
  error.graphQLErrors?.map((e) => e.message).join('\n') || error.message;

const isServerError = (
  error: ApolloError['networkError']
): error is ServerError => {
  return Boolean((error as ServerError)?.result);
};

export const extractErrorFromGraphQlResponse = (graphQlResponse: unknown) => {
  if (graphQlResponse instanceof Error && isApolloError(graphQlResponse)) {
    if (
      isServerError(graphQlResponse.networkError) &&
      typeof graphQlResponse.networkError?.result !== 'string' &&
      graphQlResponse.networkError?.result?.errors.length > 0
    ) {
      return graphQlResponse?.networkError?.result.errors;
    }

    if (graphQlResponse.graphQLErrors?.length > 0) {
      return graphQlResponse.graphQLErrors;
    }
  }

  return graphQlResponse;
};

const getNameFromPayload = (payload: TChangeNameActionPayload) => ({
  name: transformLocalizedStringToLocalizedField(payload.name),
});

const getDescriptionFromPayload = (payload: TSetDescriptionActionPayload) => ({
  description: transformLocalizedStringToLocalizedField(payload.description),
});
const getChangeLocalizedEnumValueFromPayload = (
  payload: TChangeLocalizedEnumValueLabelActionPayload
) => {
  return {
    fieldName: payload.fieldName,
    value: {
      key: payload.value.key,
      label: transformLocalizedStringToLocalizedField(payload.value.label),
    },
  };
};

const isChangeNameActionPayload = (
  actionPayload: Record<string, unknown>
): actionPayload is TChangeNameActionPayload => {
  return (actionPayload as TChangeNameActionPayload)?.name !== undefined;
};
const isSetDescriptionActionPayload = (
  actionPayload: Record<string, unknown>
): actionPayload is TSetDescriptionActionPayload => {
  return (
    (actionPayload as TSetDescriptionActionPayload)?.description !== undefined
  );
};
const isUpdateLocalizedEnumValueLabel = (
  actionPayload: Record<string, unknown>
): actionPayload is TChangeLocalizedEnumValueLabelActionPayload => {
  return (
    (actionPayload as TChangeLocalizedEnumValueLabelActionPayload)
      ?.fieldName !== undefined &&
    (actionPayload as TChangeLocalizedEnumValueLabelActionPayload)?.value !==
      undefined
  );
};
const convertAction = (action: TSyncAction): TGraphqlUpdateAction => {
  const { action: actionName, ...actionPayload } = action;
  let actionPL = actionPayload;
  switch (actionName) {
    case 'changeName': {
      if (isChangeNameActionPayload(actionPayload)) {
        actionPL = getNameFromPayload(actionPayload);
      }
      break;
    }
    case 'setDescription': {
      if (isSetDescriptionActionPayload(actionPayload)) {
        actionPL = getDescriptionFromPayload(actionPayload);
      }
      break;
    }
    case 'changeLocalizedEnumValueLabel': {
      if (isUpdateLocalizedEnumValueLabel(actionPayload)) {
        actionPL = getChangeLocalizedEnumValueFromPayload(actionPayload);
      }
      break;
    }
    case 'addLocalizedEnumValue': {
      if (isUpdateLocalizedEnumValueLabel(actionPayload)) {
        actionPL = getChangeLocalizedEnumValueFromPayload(actionPayload);
      }
    }
  }
  return {
    [actionName]: actionPL,
  };
};

export const createGraphQlUpdateActions = (actions: TSyncAction[]) =>
  actions.reduce<TGraphqlUpdateAction[]>(
    (previousActions, syncAction) => [
      ...previousActions,
      convertAction(syncAction),
    ],
    []
  );

export const convertToActionData = (draft: Partial<TChannel>) => ({
  ...draft,
  name: transformLocalizedFieldToLocalizedString(draft.nameAllLocales || []),
});
