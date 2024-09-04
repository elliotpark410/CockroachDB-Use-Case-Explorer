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
  contactName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  companyName: Yup.string().required('Required'),
  industry: Yup.string().required('Required'),
  role: Yup.string().required('Required'),
  dataWorkloadType: Yup.string().required('Required'),
  cloudProvider: Yup.string().required('Required'),
  techStack: Yup.array(),
  dataVolume: Yup.string(),
  isNewApp: Yup.boolean().nullable(),
  keyFeatures: Yup.array(),
  queryLatency: Yup.number().min(0, 'Must be at least 1 ms').integer('Must be an integer'),
  timeline: Yup.string(),
  additionalNotes: Yup.string(),
});

export default function Home() {
  const [results, setResults] = useState(null);
  const toast = useToast();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("values")
      console.log(values)
      // const response = await fetch('/api/prospect', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // });

      // if (!response.ok) throw new Error('Failed to submit');

      // const data = await response.json();
      // setResults(data);
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
                techStack: [],
                dataVolume: '',
                isNewApp: '',
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