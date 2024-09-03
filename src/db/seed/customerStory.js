import { TechStack } from "@prisma/client";

const customerStorySeedData = [
  {
    companyName: "Netflix",
    industry: "Media",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [TechStack.NA],
    useCase: "Device Management Platform for testing and ensuring quality across various devices like Roku, Chromecast, LG, Samsung, smart phones, tablets, etc.",
    businessChallenge: "Managing and testing hundreds of device types to ensure consistent streaming quality and user experience across all supported devices",
    technicalChallenge: "Scaling device management capabilities while maintaining data consistency and fault tolerance across a growing number of diverse devices",
    businessOutcome: "Successfully scaled device management and testing capabilities, ensuring high-quality streaming experience across hundreds of device types",
    requiredFeatures: [
      Features.SCALABILITY,
      Features.MULTI_REGION,
      Features.HIGH_AVAILABILITY,
      Features.FAULT_TOLERANCE,
    ]
  },
  {
    companyName: "Hard Rock Digital",
    industry: "Online Gambling",
    cloudProvider: CloudProvider.HYBRID,
    techStack: [TechStack.POSTGRES],
    useCase: "Transactional store for an online sports betting platform",
    businessChallenge: "Expanding online gaming operations globally while ensuring player service-level agreements for low latency, high availability, and compliance with various regional regulations",
    technicalChallenge: "Implementing a distributed database system that can handle global traffic, ensure data consistency for financial transactions, and comply with diverse regulatory requirements",
    businessOutcome: "Successfully launched a global gaming platform over 4 states and regions, with a hybrid deployment, consuming over 30,000 transactions per second, and achieved compliance across multiple jurisdictions",
    requiredFeatures: [
      Features.HIGH_AVAILABILITY,
      Features.CONSISTENCY,
      Features.DATA_COMPLIANCE,
      Features.DATA_LOCALITY,
    ]
  },
  {
    companyName: "Shipt",
    industry: "eCommerce",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [],
    useCase: "They provide same-day delivery services. Looking for a transactional store for their payment system that is highly available and consistent",
    businessChallenge: "Building a scalable, correct, and highly available payment system to support rapid business growth across multiple regions",
    technicalChallenge: "Implementing a distributed payment system with concurrency control, idempotency, state repair, and consistency while maintaining high availability across multiple regions",
    businessOutcome: "Successfully processes 1-2 million transactions per day with 99.999% uptime over 4 regions, supporting operations across 5,000+ cities and 120+ retailers",
    requiredFeatures: [
      Features.SCALABILITY,
      Features.CONSISTENCY,
      Features.MULTI_REGION,
      Features.HIGH_AVAILABILITY,
      Features.FAULT_TOLERANCE,
      Features.PERFORMANCE
    ]
  },
  {
    companyName: "Route",
    industry: "Logistics & Shipping",
    cloudProvider: CloudProvider.AWS,
    techStack: [TechStack.POSTGRES],
    useCase: "Real-time Order Tracking & Management",
    businessChallenge: "Handling massive amounts of data and ensure high availability and low latency for critical, shipping operations",
    technicalChallenge: "Breaking up a monolithic PostgreSQL database to achieve horizontal scaling, high availability, and low latency in a centralized data store",
    businessOutcome: "Successfully manages 1+ billion orders, supports millions of active app users, and handles 52 TB of storage with zero downtime during peak seasons for improved customer experience",
    requiredFeatures: [
      Features.SCALABILITY,
      Features.CONSISTENCY,
      Features.HIGH_AVAILABILITY,
      Features.FAULT_TOLERANCE,
      Features.PERFORMANCE
    ]
  },
  {
    companyName: "OPTIMAL SYSTEMS",
    industry: "Document Storage Software",
    cloudProvider: CloudProvider.HYBRID,
    techStack: [TechStack.ELASTICSEARCH, TechStack.KUBERNETES, TechStack.DOCKER],
    useCase: "Scalable cloud-native document storage software",
    businessChallenge: "Modernizing infrastructure to support billions of documents across 30 countries while ensuring scalability and cloud compatibility",
    technicalChallenge: "Building a new cloud-native solution that is Postgres compatible, horizontally scales, ensures zero data loss, and support hybrid deployment models",
    businessOutcome: "Successfully stores over 1 petabyte of data across 30 countries, with zero data loss and ability to scale to billions of documents",
    requiredFeatures: [
      Features.SCALABILITY,
      Features.CONSISTENCY,
      Features.MULTI_REGION,
      Features.HIGH_AVAILABILITY,
      Features.FAULT_TOLERANCE,
      Features.PERFORMANCE
    ]
  },
];

export default customerStorySeedData;