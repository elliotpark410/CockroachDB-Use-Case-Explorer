import React from 'react';
import { VStack, Stack, SimpleGrid, Checkbox, Select, Input, NumberInput, NumberInputField, RadioGroup, Radio, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Field } from 'formik';

const ProspectForm = () => {
  return (
    <VStack spacing={4} align="stretch">
      <SimpleGrid columns={2} spacing={4}>
        <Field name="contactName">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.contactName && form.touched.contactName}>
              <FormLabel>Contact Name</FormLabel>
              <Input {...field} />
              <FormErrorMessage>{form.errors.contactName}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="email">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.email && form.touched.email}>
              <FormLabel>Email</FormLabel>
              <Input {...field} type="email" />
              <FormErrorMessage>{form.errors.email}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={4}>
        <Field name="companyName">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.companyName && form.touched.companyName}>
              <FormLabel>Company Name</FormLabel>
              <Input {...field} />
              <FormErrorMessage>{form.errors.companyName}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

        <Field name="industry">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.industry && form.touched.industry}>
              <FormLabel>Industry</FormLabel>
              <Input {...field} />
              <FormErrorMessage>{form.errors.industry}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
      </SimpleGrid>

      <Field name="role">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.role && form.touched.role}>
            <FormLabel>Role</FormLabel>
            <Input {...field} />
            <FormErrorMessage>{form.errors.role}</FormErrorMessage>
          </FormControl>
        )}
      </Field>

      <Field name="dataWorkloadType">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.dataWorkloadType && form.touched.dataWorkloadType}>
            <FormLabel>Data Workload Type</FormLabel>
            <Select {...field} placeholder="Select data workload type">
              <option value="TRANSACTIONAL">Transactional</option>
              <option value="ANALYTICAL">Analytical</option>
              <option value="HYBRID">Hybrid</option>
              <option value="OTHER">Other</option>
            </Select>
            <FormErrorMessage>{form.errors.dataWorkloadType}</FormErrorMessage>
          </FormControl>
        )}
      </Field>

      <Field name="cloudProvider">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.cloudProvider && form.touched.cloudProvider}>
            <FormLabel>Cloud Provider</FormLabel>
            <Select {...field} placeholder="Select cloud provider">
              <option value="AWS">AWS</option>
              <option value="GCP">GCP</option>
              <option value="AZURE">Azure</option>
              <option value="MULTI_CLOUD">Multi-cloud</option>
              <option value="ON_PREMISE">On-premise</option>
              <option value="HYBRID">Hybrid</option>
            </Select>
            <FormErrorMessage>{form.errors.cloudProvider}</FormErrorMessage>
          </FormControl>
        )}
      </Field>

      <Field name="currentDatabase">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.currentDatabase && form.touched.currentDatabase}>
            <FormLabel>Current Database(s)</FormLabel>
            <SimpleGrid columns={3} spacing={2}>
              {['MYSQL', 'POSTGRES', 'ORACLE', 'SQL_SERVER', 'MARIA_DB', 'AURORA', 'DYNAMO_DB', 'SPANNER', 'TERADATA', 'COUCHBASE', 'MONGO_DB', 'IBM_DB2', 'CASSANDRA', 'ELASTICSEARCH', 'REDIS', 'OTHER', 'NONE'].map((db) => (
                <Checkbox
                  key={db}
                  {...field}
                  value={db}
                  isChecked={field.value.includes(db)}
                >
                  {db}
                </Checkbox>
              ))}
            </SimpleGrid>
            <FormErrorMessage>{form.errors.currentDatabase}</FormErrorMessage>
          </FormControl>
        )}
      </Field>

      <Field name="isNewApp">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.isNewApp && form.touched.isNewApp}>
            <FormLabel>Is this a new application?</FormLabel>
            <RadioGroup {...field} onChange={(value) => form.setFieldValue('isNewApp', value)}>
              <Stack direction="row">
                <Radio value="true">Yes</Radio>
                <Radio value="false">No</Radio>
              </Stack>
            </RadioGroup>
            <FormErrorMessage>{form.errors.isNewApp}</FormErrorMessage>
          </FormControl>
        )}
      </Field>

      <FormLabel>Key Requirements</FormLabel>
      <SimpleGrid columns={2} spacing={2}>
        {['scalability', 'consistency', 'multiRegion', 'dataLocality', 'dataCompliance', 'highAvailability', 'faultTolerance', 'performance'].map((requirement) => (
          <Field key={requirement} name={requirement}>
            {({ field }) => (
              <Checkbox {...field}>
                {requirement.charAt(0).toUpperCase() + requirement.slice(1)}
              </Checkbox>
            )}
          </Field>
        ))}
      </SimpleGrid>

      <Field name="queryLatency">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.queryLatency && form.touched.queryLatency}>
            <FormLabel>Acceptable Query Latency (ms)</FormLabel>
            <NumberInput
              min={0}
              value={field.value}
              onChange={(valueString) => form.setFieldValue('queryLatency', Number(valueString))}
            >
              <NumberInputField />
            </NumberInput>
            <FormErrorMessage>{form.errors.queryLatency}</FormErrorMessage>
          </FormControl>
        )}
      </Field>

      <Field name="timeline">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.timeline && form.touched.timeline}>
            <FormLabel>Project Timeline</FormLabel>
            <Select {...field} placeholder="Select project timeline">
              <option value="0-3 months">0-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="12+ months">12+ months</option>
            </Select>
            <FormErrorMessage>{form.errors.timeline}</FormErrorMessage>
          </FormControl>
        )}
      </Field>

      <Field name="dataVolume">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.dataVolume && form.touched.dataVolume}>
            <FormLabel>Expected Data Volume</FormLabel>
            <Select {...field} placeholder="Select expected data volume">
              <option value="0-100GB">0-100GB</option>
              <option value="100GB-1TB">100GB-1TB</option>
              <option value="1TB-10TB">1TB-10TB</option>
              <option value="10TB+">10TB+</option>
            </Select>
            <FormErrorMessage>{form.errors.dataVolume}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </VStack>
  );
};

export default ProspectForm;