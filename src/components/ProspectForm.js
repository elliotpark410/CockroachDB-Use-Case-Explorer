import React from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  NumberInput,
  NumberInputField,
  Textarea,
  CheckboxGroup,
  SimpleGrid,
} from '@chakra-ui/react';
import { Field, useField } from 'formik';

const ProspectForm = () => {
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

      <FormControl isRequired>
        <FormLabel>Tech Stack</FormLabel>
        <Field name="techStack" as={CheckboxGroup}>
          {({ field }) => (
            <SimpleGrid columns={3} spacing={2}>
              {['MYSQL', 'POSTGRES', 'ORACLE', 'SQL_SERVER', 'MARIA_DB', 'AURORA', 'DYNAMO_DB', 'SPANNER', 'TERADATA', 'COUCHBASE', 'MONGO_DB', 'IBM_DB2', 'CASSANDRA', 'ELASTICSEARCH', 'REDIS', 'KAFKA', 'KUBERNETES', 'DOCKER', 'OTHER', 'NA'].map((tech) => (
                <Checkbox key={tech} {...field} value={tech}>
                  {tech.replace('_', ' ')}
                </Checkbox>
              ))}
            </SimpleGrid>
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
        <FormLabel>Is this a new application?</FormLabel>
        <Field name="isNewApp" as={Select}>
          <option value="">Select an option</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </Field>
      </FormControl>

      <FormControl>
        <FormLabel>Key Features</FormLabel>
        <Field name="keyFeatures" as={CheckboxGroup}>
          {({ field }) => (
            <SimpleGrid columns={3} spacing={2}>
              {['SCALABILITY', 'CONSISTENCY', 'MULTI_REGION', 'DATA_LOCALITY', 'DATA_COMPLIANCE', 'HIGH_AVAILABILITY', 'FAULT_TOLERANCE', 'PERFORMANCE', 'MULTI_CLOUD'].map((feature) => (
                <Checkbox key={feature} {...field} value={feature}>
                  {feature.replace('_', ' ')}
                </Checkbox>
              ))}
            </SimpleGrid>
          )}
        </Field>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Query Latency (ms)</FormLabel>
        <Field name="queryLatency">
          {({ field }) => (
            <NumberInput min={0} {...field}>
              <NumberInputField />
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