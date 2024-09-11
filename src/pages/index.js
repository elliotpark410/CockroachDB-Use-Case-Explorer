import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  useToast,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ProspectForm from '../components/ProspectForm';
import Results from '../components/Results';

const validationSchema = Yup.object({
  dataWorkloadType: Yup.string().required('Data Workload Type is required'),
  cloudProvider: Yup.string().required('Cloud Provider is required'),
  techStack: Yup.array().min(1, 'At least one Tech Stack option must be selected'),
  dataVolume: Yup.string(),
  keyFeatures: Yup.array().min(1, 'At least one Key Feature must be selected'),
  queryLatency: Yup.number().integer('Must be an integer').nullable(),
  timeline: Yup.string(),
  additionalNotes: Yup.string(),
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
            Case Study Finder
          </Heading>

          {!results ? (
            <Formik
              initialValues={{
                dataWorkloadType: '',
                cloudProvider: '',
                techStack: [],
                dataVolume: '',
                keyFeatures: [],
                queryLatency: 0,
                timeline: '',
                additionalNotes: '',
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