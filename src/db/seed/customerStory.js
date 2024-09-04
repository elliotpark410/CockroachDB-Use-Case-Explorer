import { TechStack, CloudProvider, Features } from "@prisma/client";
import prisma from "../../lib/prisma.js";

const customerStories = [
  {
    companyName: "Netflix",
    industry: "Media",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [TechStack.NA],
    useCase: "Device Management Platform for testing and ensuring Netflix app quality across various devices like smart phones, tablets, TVs, etc.",
    challenge: "Scaling device management capabilities while maintaining data consistency and fault tolerance across a growing number of diverse devices",
    solution: "Successfully scaled device management and testing capabilities, ensuring high-quality streaming experience across hundreds of device types",
    keyFeatures: [
      Features.SCALABILITY,
      Features.FAULT_TOLERANCE,
    ]
  },
  {
    companyName: "Hard Rock Digital",
    industry: "Online Gambling",
    cloudProvider: CloudProvider.HYBRID,
    techStack: [TechStack.POSTGRES],
    useCase: "Supporting their online sports betting platform with consitency and high availability",
    challenge: "Expanding online gaming operations while ensuring low latency, high availability, and compliance with various regional regulations",
    solution: "Successfully launched a global gaming platform over 4 states and regions, with a hybrid deployment, consuming over 30,000 transactions per second, and achieved compliance across multiple jurisdictions",
    keyFeatures: [
      Features.HIGH_AVAILABILITY,
      Features.CONSISTENCY,
      Features.DATA_COMPLIANCE,
    ]
  },
  {
    companyName: "Shipt",
    industry: "eCommerce",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [],
    useCase: "They provide same-day delivery services. Building a highly available, distributed payment system designed for correctness to support same-day delivery services across the United States",
    challenge: "Developing a multi-region payment service that ensures transaction correctness, concurrency control, and high availability while processing millions of transactions daily",
    solution: "Implemented CockroachDB Dedicated as the foundation for their distributed payment system, leveraging its multi-region capabilities, ACID transactions, and automated replication to processes 1-2 million transactions per day with 99.999% uptime over 4 regions",
    keyFeatures: [
      Features.SCALABILITY,
      Features.MULTI_REGION,
      Features.HIGH_AVAILABILITY,
    ]
  },
  {
    companyName: "Route",
    industry: "Logistics & Shipping",
    cloudProvider: CloudProvider.AWS,
    techStack: [TechStack.POSTGRES],
    useCase: "Real-time data store for order management, package tracking, and shipping protection across billions of e-commerce orders",
    challenge: "Scaling order, shipment, and tracking data into the billions while maintaining high availability and performance, especially during peak seasons like Black Friday",
    solution: "Implemented CockroachDB as their central database for their order management platform, leveraging its scalability, high availability, and ability to handle over a billion records with zero downtime",
    keyFeatures: [
      Features.SCALABILITY,
      Features.HIGH_AVAILABILITY,
    ]
  },
  {
    companyName: "Nightfall",
    industry: "Cybersecurity",
    cloudProvider: CloudProvider.AWS,
    techStack: [TechStack.KUBERNETES, TechStack.KAFKA, TechStack.DOCKER],
    useCase: "Cloud-native data protection platform that analyzes and processes terabytes of customer data for sensitive information detection across various cloud applications",
    challenge: "Scaling database operations to handle high volumes of API requests and support an interactive analytics dashboard while preparing for multi-region expansion",
    solution: "Implemented CockroachDB as a scalable, cloud-native database solution to support their API gateway which required high-performance reads and writes on large data volumes",
    keyFeatures: [
      Features.SCALABILITY,
      Features.MULTI_REGION,
      Features.PERFORMANCE
    ]
  },
  {
    companyName: "DoorDash",
    industry: "Food Delivery",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [TechStack.KUBERNETES, TechStack.DOCKER, TechStack.AURORA],
    useCase: "Managing a massive-scale distributed database infrastructure to support various engineering teams and applications across the food delivery platform",
    challenge: "Aurora was not able to support the amount of scale they were reaching during peak business days. They were looking for a highly available and performant database that can handle millions of queries per second and petabytes of data",
    solution: "Implemented CockroachDB at scale, with over 300 clusters, automating management tasks, and providing self-serve tools for internal engineering teams",
    keyFeatures: [
      Features.SCALABILITY,
      Features.HIGH_AVAILABILITY,
    ]
  },
  {
    companyName: "Fi",
    industry: "Financial Services",
    cloudProvider: CloudProvider.AWS,
    techStack: [TechStack.POSTGRES, TechStack.DOCKER, TechStack.KUBERNETES],
    useCase: "Building India's first neobanking platform for millennials, serving as a financial ledger and storing core banking data",
    challenge: "Creating a scalable, consistent, and compliant digital-first banking platform that can grow with the business across multiple regions while ensuring data locality",
    solution: "Implemented CockroachDB as their primary database to handle core financial data, leveraging its scalability, consistency, and multi-region capabilities",
    keyFeatures: [
      Features.SCALABILITY,
      Features.CONSISTENCY,
      Features.MULTI_REGION,
      Features.DATA_COMPLIANCE,
      Features.DATA_LOCALITY
    ]
  }
];

async function main() {
  console.log(`Start seeding ...`);
  for (const story of customerStories) {
    const customerStory = await prisma.customerStory.create({
      data: story,
    });
    console.log(`Created customer story with id: ${customerStory.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });