import { TechStack, CloudProvider, Features } from "@prisma/client";

export const customerStories = [
  {
    companyName: "Netflix",
    industry: "Media",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [TechStack.NA],
    useCase: "Device Management Platform for testing and ensuring Netflix app quality across various devices like smart phones, tablets, TVs, etc",
    challenge: "Scaling device management capabilities while maintaining data consistency and fault tolerance",
    solution: "With CockroachDB, they successfully scaled device management and testing capabilities, ensuring high-quality streaming experience across hundreds of device types",
    keyFeatures: [
      Features.SCALABILITY,
      Features.CONSISTENCY,
      Features.PERFORMANCE
    ]
  },
  {
    companyName: "Hard Rock Digital",
    industry: "Online Gambling",
    cloudProvider: CloudProvider.HYBRID,
    techStack: [TechStack.POSTGRES],
    useCase: "Supporting their online sports betting platform with consitency and high availability",
    challenge: "Expanding online gaming operations while ensuring low latency, high availability, and compliance with various regional regulations",
    solution: "Successfully handles over 30,000 transactions per second across 4 states and regions while maintianing compliance",
    keyFeatures: [
      Features.HIGH_AVAILABILITY,
      Features.CONSISTENCY,
      Features.DATA_COMPLIANCE,
      Features.MULTI_REGION,
    ]
  },
  {
    companyName: "Shipt",
    industry: "eCommerce",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [],
    useCase: "Building a highly available, distributed payment system designed for correctness to support same-day delivery services across the United States",
    challenge: "Developing a multi-region payment service that ensures transaction correctness, concurrency control, and high availability",
    solution: "Implemented CockroachDB Dedicated and they process 1-2 million transactions per day with zero downtime across 4 regions",
    keyFeatures: [
      Features.SCALABILITY,
      Features.MULTI_REGION,
      Features.HIGH_AVAILABILITY,
      Features.CONSISTENCY,
      Features.PERFORMANCE
    ]
  },
  {
    companyName: "Route",
    industry: "Logistics & Shipping",
    cloudProvider: CloudProvider.AWS,
    techStack: [TechStack.POSTGRES],
    useCase: "Real-time data store for order management, package tracking, and shipping protection across billions of e-commerce orders",
    challenge: "Scaling order, shipment, and tracking data while maintaining high availability and performance, especially during days like Black Friday",
    solution: "Implemented CockroachDB as their system of record to handle over a billion records with zero downtime, even during peak seasons. They actually had an issue where their cloud provider called them about a hardware failure when they were using CockroachDB. There was no data loss and no downtime",
    keyFeatures: [
      Features.SCALABILITY,
      Features.HIGH_AVAILABILITY,
      Features.PERFORMANCE,
      Features.CONSISTENCY
    ]
  },
  {
    companyName: "Nightfall",
    industry: "Cybersecurity",
    cloudProvider: CloudProvider.AWS,
    techStack: [TechStack.KUBERNETES, TechStack.KAFKA, TechStack.DOCKER],
    useCase: "The provide a cloud-native data security platform that detects if their is sensitive information in cloud environments",
    challenge: "Looking for a multi-region, scalable database to handle high volumes of API requests and support an interactive analytics dashboard",
    solution: "Implemented CockroachDB as the transactional store to analyze and process terabytes of customer data for sensitive information detection",
    keyFeatures: [
      Features.SCALABILITY,
      Features.MULTI_REGION,
      Features.PERFORMANCE,
      Features.CONSISTENCY
    ]
  },
  {
    companyName: "DoorDash",
    industry: "Food Delivery",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [TechStack.AURORA],
    useCase: 'Looking for a fault-toleranta and scalable distributed database that will not fail during peak seasons',
    challenge: 'Aurora was not able to scale and it would crash during peak seasons leading to hours of downtime',
    solution: 'Implemented CockroachDB for its resilience. They are doing 1.2 million queries per second at daily peak hours, 1.9 petabytes of data on disk, and managing over 300 CockroachDB clusters',
    keyFeatures: [
      Features.SCALABILITY,
      Features.HIGH_AVAILABILITY,
      Features.PERFORMANCE,
      Features.CONSISTENCY,
      Features.MULTI_REGION
    ]
  },
  {
    companyName: "Fi",
    industry: "Financial Services",
    cloudProvider: CloudProvider.AWS,
    techStack: [TechStack.POSTGRES, TechStack.DOCKER, TechStack.KUBERNETES],
    useCase: "Building India's first neobanking platform for millennials, serving as a financial ledger and storing core banking data",
    challenge: "Creating a scalable, consistent, and compliant digital-first banking platform that can grow with the business across multiple regions while ensuring data locality",
    solution: "CockroachDB is handling their core financial data, because of its scalability, consistency, and multi-region capabilities",
    keyFeatures: [
      Features.SCALABILITY,
      Features.CONSISTENCY,
      Features.MULTI_REGION,
      Features.DATA_COMPLIANCE,
      Features.PERFORMANCE
    ]
  },
  {
    companyName: "Form3",
    industry: "Fintech",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [],
    useCase: "Global payment processing platform for banks",
    challenge: "Building a cloud-native, payment platform using microservices and Kubernetes that is scalable and resilient across multiple cloud providers",
    solution: "They created a multi-cloud platform built on CockroachDB, enabling global payment transactions with 100-200ms SLAs for global payment transactions",
    keyFeatures: [
      Features.SCALABILITY,
      Features.MULTI_CLOUD,
      Features.CONSISTENCY,
      Features.PERFORMANCE,
      Features.MULTI_REGION
    ],
  },
  {
    companyName: "Starburst",
    industry: "Data Analytics",
    cloudProvider: CloudProvider.AWS,
    techStack: [],
    useCase: "Building a cloud-native analytics platform that will act as a single point of access to data spread across multiple data sources (data lakes, data warehouses, databases) to address issues like data silos",
    challenge: "Developing their application with a distributed architecture that can span multiple geographies, survive regional failure, support scale, and ensure 24/7 uptime",
    solution: "Implemented CockroachDB to build their highly available, global application with low read latency. It operates across 5 regions, handling exabytes of data",
    keyFeatures: [
      Features.MULTI_REGION,
      Features.SCALABILITY,
      Features.HIGH_AVAILABILITY,
      Features.PERFORMANCE,
      Features.MULTI_CLOUD,
      Features.CONSISTENCY
    ],
  },
  {
    companyName: "Stash",
    industry: "Fintech",
    cloudProvider: CloudProvider.AWS,
    techStack: [TechStack.KUBERNETES, TechStack.POSTGRES],
    useCase: "Building a new banking infrastructure (Stash Core) to support their investing app for 2 million active subscribers",
    challenge: "Achieving five 9s of availability and building a multi-region, multi-cloud foundation for their banking app",
    solution: "CockroachDB is used as the system of record for their entire banking infrastructure that supports 2 million active subscribers",
    keyFeatures: [
      Features.HIGH_AVAILABILITY,
      Features.CONSISTENCY,
      Features.MULTI_REGION,
      Features.MULTI_CLOUD,
      Features.SCALABILITY,
      Features.PERFORMANCE
    ],
  },
  {
    companyName: "Shopmonkey",
    industry: "SaaS for Automotive Care Retail",
    cloudProvider: CloudProvider.GCP,
    techStack: [TechStack.MONGO_DB, TechStack.POSTGRES, TechStack.ELASTICSEARCH, TechStack.KAFKA],
    useCase: "Building a business platform for automotive care retailers",
    challenge: "Scaling infrastructure to accommodate rapid growth, ensuring low-latency access for geographically dispersed customers",
    solution: "Rebuilt entire application stack on CockroachDB because of its geo-distribution and scalability",
    keyFeatures: [
      Features.MULTI_REGION,
      Features.SCALABILITY,
      Features.PERFORMANCE,
      Features.HIGH_AVAILABILITY,
      Features.CONSISTENCY,
      Features.DATA_LOCALITY
    ],
  },
  {
    companyName: "Kami",
    industry: "Education Technology",
    cloudProvider: CloudProvider.NA,
    techStack: [TechStack.POSTGRES],
    useCase: "Digital classroom application for collaborative note-taking",
    challenge: "Scaling database infrastructure to handle exponential growth of over 1M new users per week during the COVID-19 pandemic",
    solution: "Migrated from Postgres to CockroachDB, enabling 20x business growth over 180 countires with over 30 million users",
    keyFeatures: [
      Features.SCALABILITY,
      Features.PERFORMANCE,
      Features.CONSISTENCY,
      Features.MULTI_REGION
    ]
  },
];
