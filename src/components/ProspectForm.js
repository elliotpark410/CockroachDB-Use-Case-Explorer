import React from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  SimpleGrid,
  Box,
  Text,
} from '@chakra-ui/react';
import { Field, useFormikContext } from 'formik';

const CustomFormControl = ({ children, label, required, error }) => (
  <FormControl mb={6}>
    <FormLabel>
      {label} {required && <span style={{ color: 'red' }}>*</span>}
    </FormLabel>
    {children}
    {error && (
      <Text color="red.500" fontSize="sm">
        {error}
      </Text>
    )}
  </FormControl>
);

const ProspectForm = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  return (
    <Box
      maxW="4xl"
      mx="auto"
      bg="white"
      boxShadow="xl"
      rounded="lg"
      overflow="hidden"
    >
      <VStack spacing={6} align="stretch" p={8}>
      <CustomFormControl label="Data Workload Type" required error={touched.dataWorkloadType && errors.dataWorkloadType}>
          <Field name="dataWorkloadType">
            {({ field }) => (
              <Select {...field}>
                <option value="TRANSACTIONAL">Transactional</option>
                <option value="ANALYTICAL">Analytical</option>
                <option value="HYBRID">Hybrid</option>
                <option value="OTHER">Other</option>
              </Select>
            )}
          </Field>
        </CustomFormControl>

        <CustomFormControl
          label="Cloud Provider"
          required
          error={touched.cloudProvider && errors.cloudProvider}
        >
          <Field
            name="cloudProvider"
            as={Select}
            placeholder="Select a cloud provider"
          >
            <option value="AWS">AWS</option>
            <option value="GCP">GCP</option>
            <option value="AZURE">Azure</option>
            <option value="MULTI_CLOUD">Multi-cloud</option>
            <option value="ON_PREMISE">On-premise</option>
            <option value="HYBRID">Hybrid</option>
            <option value="OTHER">Other</option>
          </Field>
        </CustomFormControl>

        <CustomFormControl
          label="Tech Stack"
          error={touched.techStack && errors.techStack}
          required
        >
          <Field name="techStack">
            {({ field }) => (
              <SimpleGrid columns={[2, 3, 4]} spacing={4}>
                {[
                  'AURORA',
                  'CASSANDRA',
                  'COUCHBASE',
                  'DYNAMO_DB',
                  'ELASTICSEARCH',
                  'IBM_DB2',
                  'MARIA_DB',
                  'MONGO_DB',
                  'MYSQL',
                  'ORACLE',
                  'POSTGRES',
                  'REDIS',
                  'SCYLLA_DB',
                  'SPANNER',
                  'SQL_SERVER',
                  'TERADATA',
                  'TI_DB',
                  'YUGABYTE_DB',
                  'DOCKER',
                  'KUBERNETES',
                  'KAFKA',
                  'OTHER',
                ].map((tech) => (
                  <Checkbox
                    key={tech}
                    {...field}
                    value={tech}
                    isChecked={field.value && field.value.includes(tech)}
                    onChange={(e) => {
                      const set = new Set(field.value || []);
                      if (e.target.checked) {
                        set.add(tech);
                      } else {
                        set.delete(tech);
                      }
                      setFieldValue('techStack', Array.from(set));
                    }}
                  >
                    {tech.replace('_', ' ')}
                  </Checkbox>
                ))}
              </SimpleGrid>
            )}
          </Field>
        </CustomFormControl>

        <CustomFormControl label="Data Volume">
          <Field name="dataVolume" as={Select} placeholder="Select data volume">
            <option value="0-100GB">0-100GB</option>
            <option value="100GB-1TB">100GB-1TB</option>
            <option value="1TB-10TB">1TB-10TB</option>
            <option value="10TB+">10TB+</option>
          </Field>
        </CustomFormControl>

        <CustomFormControl
          label="Required Features"
          required
          error={touched.keyFeatures && errors.keyFeatures}
        >
          <Field name="keyFeatures">
            {({ field }) => (
              <SimpleGrid columns={[2, 3, 4]} spacing={4}>
                {[
                  'SCALABILITY',
                  'CONSISTENCY',
                  'MULTI_REGION',
                  'DATA_COMPLIANCE',
                  'HIGH_AVAILABILITY',
                  'PERFORMANCE',
                  'MULTI_CLOUD',
                ].map((feature) => (
                  <Checkbox
                    key={feature}
                    {...field}
                    value={feature}
                    isChecked={field.value && field.value.includes(feature)}
                    onChange={(e) => {
                      const set = new Set(field.value || []);
                      if (e.target.checked) {
                        set.add(feature);
                      } else {
                        set.delete(feature);
                      }
                      setFieldValue('keyFeatures', Array.from(set));
                    }}
                  >
                    {feature.replace('_', ' ')}
                  </Checkbox>
                ))}
              </SimpleGrid>
            )}
          </Field>
        </CustomFormControl>

        <FormControl>
          <FormLabel>
            Acceptable query response times (ms)
          </FormLabel>
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

        <CustomFormControl
          label="Project Completion Timeline?"
        >
          <Field name="timeline" as={Select} placeholder="Select a timeline">
            <option value="0-3 months">0-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6-12 months">6-12 months</option>
            <option value="12+ months">12+ months</option>
          </Field>
        </CustomFormControl>

        <CustomFormControl label="Additional Notes">
          <Field name="additionalNotes" as={Textarea} />
        </CustomFormControl>
      </VStack>
    </Box>
  );
};

export default ProspectForm;
