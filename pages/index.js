import React, { useState } from 'react';
import { ChakraProvider, Box, VStack, Heading, Text, Button, useToast } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ProspectForm from '../components/ProspectForm';
import Results from '../components/Results';

const validationSchema = Yup.object({
  contactName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  companyName: Yup.string().required('Required'),
  industry: Yup.string().required('Required'),
  role: Yup.string().required('Required'),
  dataWorkloadType: Yup.string().required('Required'),
  cloudProvider: Yup.string().required('Required'),
  currentDatabase: Yup.array().min(1, 'Select at least one'),
  isNewApp: Yup.boolean().required('Required'),
  scalability: Yup.boolean(),
  consistency: Yup.boolean(),
  multiRegion: Yup.boolean(),
  dataLocality: Yup.boolean(),
  dataCompliance: Yup.boolean(),
  highAvailability: Yup.boolean(),
  faultTolerance: Yup.boolean(),
  performance: Yup.boolean(),
  queryLatency: Yup.number().required('Required'),
  timeline: Yup.string().required('Required'),
  dataVolume: Yup.string().required('Required'),
});

export default function Home() {
  const [results, setResults] = useState(null);
  const toast = useToast();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('/api/prospect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Failed to submit');

      const data = await response.json();
      setResults(data);
    } catch (error) {
      toast({
        title: 'An error occurred.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ChakraProvider>
      <Box maxWidth="800px" margin="auto" padding={8}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="xl" textAlign="center">
            CockroachDB Use Case Explorer
          </Heading>

          {!results ? (
            <Formik
              initialValues={{
                contactName: '',
                email: '',
                companyName: '',
                industry: '',
                role: '',
                dataWorkloadType: '',
                cloudProvider: '',
                currentDatabase: [],
                isNewApp: null,
                scalability: false,
                consistency: false,
                multiRegion: false,
                dataLocality: false,
                dataCompliance: false,
                highAvailability: false,
                faultTolerance: false,
                performance: false,
                queryLatency: 0,
                timeline: '',
                dataVolume: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <ProspectForm />
                  <Button
                    mt={4}
                    colorScheme="blue"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            <Results data={results} />
          )}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}