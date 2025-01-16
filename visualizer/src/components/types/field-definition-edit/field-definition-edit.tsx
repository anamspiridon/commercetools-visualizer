import { FC, SyntheticEvent, useCallback } from 'react';
import { useIntl } from 'react-intl';
import {
  CustomFormModalPage,
  PageNotFound,
} from '@commercetools-frontend/application-components';
import { RevertIcon } from '@commercetools-uikit/icons';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { ContentNotification } from '@commercetools-uikit/notifications';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { useIsAuthorized } from '@commercetools-frontend/permissions';
import {
  showNotification,
  showApiErrorNotification,
  TApiErrorNotificationOptions,
} from '@commercetools-frontend/actions-global';
import { DOMAINS } from '@commercetools-frontend/constants';
import { getErrorMessage } from '../../../helpers';
import { PERMISSIONS } from '../../../constants';
import { transformErrors } from '../../subscriptions/transform-errors';
import messages from '../field-definition-input/messages';
import FieldDefinitionInput from '../field-definition-input/field-definition-input';
import { useTypeDefinitionUpdater } from '../../../hooks/use-types-connector';
import {
  fromFormValuesToTFieldDefinitionInput,
  initialValuesFromFieldDefinition,
  TFormValues,
} from '../field-definition-input/helpers';
import { useTypeWithDefinitionByNameFetcher } from '../../../hooks/use-types-connector/types-connector';

type Props = {
  onClose: (event: SyntheticEvent) => void;
};

const FieldDefinitionEdit: FC<Props> = ({ onClose }) => {
  const { id, fieldDefinitionName } = useParams<{
    id: string;
    fieldDefinitionName: string;
  }>();

  const canManage = useIsAuthorized({
    demandedPermissions: [PERMISSIONS.Manage],
  });

  const { dataLocale, projectLanguages } = useApplicationContext((context) => ({
    dataLocale: context.dataLocale ?? '',
    projectLanguages: context.project?.languages ?? [],
  }));
  const intl = useIntl();

  const typeDefinitionUpdater = useTypeDefinitionUpdater();

  const { fieldDefinitions, error, loading, version, refetch } =
    useTypeWithDefinitionByNameFetcher(id, [fieldDefinitionName]);

  const handleSubmit = useCallback(
    async (formikValues: TFormValues, formikHelpers) => {
      try {
        const fieldDefinitionInput =
          fromFormValuesToTFieldDefinitionInput(formikValues);
        if (fieldDefinitions) {
          await typeDefinitionUpdater.execute({
            originalDraft: fieldDefinitions[0],
            nextDraft: fieldDefinitionInput,
            id: id,
            version: version || 1,
          });
        }
        await refetch();
        showNotification({
          kind: 'success',
          domain: DOMAINS.SIDE,
          text: intl.formatMessage(messages.fieldDefinitionUpdated, {}),
        });
      } catch (graphQLErrors) {
        const transformedErrors = transformErrors(graphQLErrors);
        if (transformedErrors.unmappedErrors.length > 0) {
          showApiErrorNotification({
            errors:
              transformedErrors.unmappedErrors as TApiErrorNotificationOptions['errors'],
          });
        }

        formikHelpers.setErrors(transformedErrors.formErrors);
      }
    },
    [fieldDefinitions, id, intl, refetch, typeDefinitionUpdater, version]
  );

  if (error) {
    return (
      <ContentNotification type="error">
        <Text.Body>{getErrorMessage(error)}</Text.Body>
      </ContentNotification>
    );
  }
  if (loading) {
    return (
      <Spacings.Stack alignItems="center">
        <LoadingSpinner />
      </Spacings.Stack>
    );
  }
  if (!fieldDefinitions || fieldDefinitions.length < 1) {
    return <PageNotFound />;
  }

  return (
    <FieldDefinitionInput
      initialValues={initialValuesFromFieldDefinition(
        fieldDefinitions[0],
        projectLanguages
      )}
      onSubmit={handleSubmit}
      dataLocale={dataLocale}
    >
      {(formProps) => {
        return (
          <CustomFormModalPage
            isOpen
            onClose={onClose}
            title={intl.formatMessage(messages.modalTitle)}
            //subtitle={<LabelRequired />}
            topBarCurrentPathLabel={intl.formatMessage(messages.modalTitle)}
            formControls={
              <>
                <CustomFormModalPage.FormSecondaryButton
                  label={intl.formatMessage(messages.revert)}
                  iconLeft={<RevertIcon />}
                  onClick={onClose}
                  isDisabled={
                    formProps.isSubmitting || !formProps.isDirty || !canManage
                  }
                />
                <CustomFormModalPage.FormPrimaryButton
                  label={messages.updateButton}
                  onClick={() => formProps.submitForm()}
                  isDisabled={
                    formProps.isSubmitting || !formProps.isDirty || !canManage
                  }
                />
              </>
            }
          >
            {fieldDefinitions && formProps.formElements}
          </CustomFormModalPage>
        );
      }}
    </FieldDefinitionInput>
  );
};

FieldDefinitionEdit.displayName = 'FieldDefinitionInput';

export default FieldDefinitionEdit;
