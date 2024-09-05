import {
  Card,
  CardTitle,
  Form,
  FormField,
  FormFieldSecret,
  Select,
  SiteGeneralConfigurationSurface,
} from "@netlify/sdk/ui/react/components";

export const SiteGeneralConfiguration = () => {
  const onSubmit = (values: any) => {
    // Do something with form values
  };

  return (
    <SiteGeneralConfigurationSurface>
      <Card>
        <h2>Woohoo</h2>
        <p>This is not bad
          
        </p>
        <Form onSubmit={onSubmit}>
          <FormField name="username" label="Username" />
          <FormFieldSecret name="password" label="password" />

          <Select
            name="notification_provider"
            label="Notification Provider"
            options={[
              { label: "SMS", value: "SMS" },
              { label: "Email", value: "email" },
              { label: "Carrier Pigeon", value: "carrier_pigeon" },
            ]}
          />
        </Form>
      </Card>
    </SiteGeneralConfigurationSurface>
  );
};