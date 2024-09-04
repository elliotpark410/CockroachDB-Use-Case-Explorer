import React from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  CheckboxGroup,
  SimpleGrid,
  RadioGroup,
  Radio,
  HStack,
} from '@chakra-ui/react';
import { Field, useFormikContext } from 'formik';

const ProspectForm = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <VStack spacing={4} align="stretch">
      <FormControl isRequired>
        <FormLabel>Contact Name</FormLabel>
        <Field name="contactName" as={Input} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Field name="email" type="email" as={Input} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Company Name</FormLabel>
        <Field name="companyName" as={Input} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Industry</FormLabel>
        <Field name="industry" as={Input} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Role</FormLabel>
        <Field name="role" as={Input} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Data Workload Type</FormLabel>
        <Field name="dataWorkloadType" as={Select}>
          <option value="">Select a data workload type</option>
          <option value="TRANSACTIONAL">Transactional</option>
          <option value="ANALYTICAL">Analytical</option>
          <option value="HYBRID">Hybrid</option>
          <option value="OTHER">Other</option>
        </Field>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Cloud Provider</FormLabel>
        <Field name="cloudProvider" as={Select}>
          <option value="">Select a cloud provider</option>
          <option value="AWS">AWS</option>
          <option value="GCP">GCP</option>
          <option value="AZURE">Azure</option>
          <option value="MULTI_CLOUD">Multi-cloud</option>
          <option value="ON_PREMISE">On-premise</option>
          <option value="HYBRID">Hybrid</option>
          <option value="OTHER">Other</option>
        </Field>
      </FormControl>

      <FormControl>
        <FormLabel>Tech Stack</FormLabel>
        <Field name="techStack">
          {({ field }) => (
            <CheckboxGroup
              {...field}
              value={values.techStack || []}
              onChange={(values) => setFieldValue('techStack', values)}
            >
              <SimpleGrid columns={3} spacing={2}>
                {['MYSQL', 'POSTGRES', 'ORACLE', 'SQL_SERVER', 'MARIA_DB', 'AURORA', 'DYNAMO_DB', 'SPANNER', 'TERADATA', 'COUCHBASE', 'MONGO_DB', 'IBM_DB2', 'CASSANDRA', 'ELASTICSEARCH', 'REDIS', 'KAFKA', 'KUBERNETES', 'DOCKER', 'OTHER'].map((tech) => (
                  <Checkbox key={tech} value={tech}>
                    {tech.replace('_', ' ')}
                  </Checkbox>
                ))}
              </SimpleGrid>
            </CheckboxGroup>
          )}
        </Field>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Data Volume</FormLabel>
        <Field name="dataVolume" as={Select}>
          <option value="">Select data volume</option>
          <option value="0-100GB">0-100GB</option>
          <option value="100GB-1TB">100GB-1TB</option>
          <option value="1TB-10TB">1TB-10TB</option>
          <option value="10TB+">10TB+</option>
        </Field>
      </FormControl>

      <FormControl>
        <FormLabel>Is this for a new application?</FormLabel>
        <Field name="isNewApp">
          {({ field }) => (
            <RadioGroup {...field} value={values.isNewApp === null ? '' : values.isNewApp.toString()}>
              <HStack spacing={4}>
                <Radio
                  value="true"
                  onChange={() => setFieldValue('isNewApp', true)}
                >
                  Yes
                </Radio>
                <Radio
                  value="false"
                  onChange={() => setFieldValue('isNewApp', false)}
                >
                  No
                </Radio>
              </HStack>
            </RadioGroup>
          )}
        </Field>
      </FormControl>

      <FormControl>
        <FormLabel>Required Features</FormLabel>
        <Field name="keyFeatures">
          {({ field }) => (
            <CheckboxGroup
              {...field}
              value={values.keyFeatures || []}
              onChange={(values) => setFieldValue('keyFeatures', values)}
            >
              <SimpleGrid columns={3} spacing={2}>
                {['SCALABILITY', 'CONSISTENCY', 'MULTI_REGION', 'DATA_COMPLIANCE', 'HIGH_AVAILABILITY', 'PERFORMANCE', 'MULTI_CLOUD'].map((feature) => (
                  <Checkbox key={feature} value={feature}>
                    {feature.replace('_', ' ')}
                  </Checkbox>
                ))}
              </SimpleGrid>
            </CheckboxGroup>
          )}
        </Field>
      </FormControl>

      <FormControl>
        <FormLabel>Minimum Acceptable Query Latency (ms)</FormLabel>
        <Field name="queryLatency">
          {({ field }) => (
            <NumberInput
              {...field}
              value={field.value || ''}
              min={1}
              step={1}
              precision={0}
              onChange={(valueString, valueNumber) => {
                setFieldValue('queryLatency', valueNumber);
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          )}
        </Field>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Timeline</FormLabel>
        <Field name="timeline" as={Select}>
          <option value="">Select a timeline</option>
          <option value="0-3 months">0-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6-12 months">6-12 months</option>
          <option value="12+ months">12+ months</option>
        </Field>
      </FormControl>

      <FormControl>
        <FormLabel>Additional Notes</FormLabel>
        <Field name="additionalNotes" as={Textarea} />
      </FormControl>
    </VStack>
  );
};

export default ProspectForm;