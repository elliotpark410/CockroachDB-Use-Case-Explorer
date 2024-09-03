const customerStorySeedData = [
  {
    companyName: "Netflix",
    industry: "Media & Entertainment",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [TechStack.NA],
    useCase: "Device Management Platform for testing and ensuring quality across various devices like Roku, Chromecast, LG, Samsung, smart phones, tablets, etc.",
    businessChallenge: "Managing and testing hundreds of device types to ensure consistent streaming quality and user experience across all supported devices",
    technicalChallenge: "Scaling device management capabilities while maintaining data consistency and fault tolerance across a growing number of diverse devices",
    businessOutcome: "Successfully scaled device management and testing capabilities, ensuring high-quality streaming experience across hundreds of device types",
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
    companyName: "Hard Rock Digital",
    industry: "Digital Entertainment and Gaming",
    cloudProvider: CloudProvider.MULTI_CLOUD,
    techStack: [TechStack.POSTGRES, TechStack.KAFKA, TechStack.OTHER],
    useCase: "Global online gaming platform with real-time player data synchronization.",
    businessChallenge: "Expanding online gaming operations globally while ensuring low latency, high availability, and compliance with various regional regulations",
    technicalChallenge: "Implementing a distributed database system that can handle global traffic, ensure data consistency for financial transactions, and comply with diverse regulatory requirements",
    businessOutcome: "Successfully launched a global gaming platform over 4 states and regions, consuming over 30,000 transactions per second, and achieved compliance across multiple jurisdictions",
    requiredFeatures: [
      Features.SCALABILITY,
      Features.CONSISTENCY,
      Features.MULTI_REGION,
      Features.DATA_LOCALITY,
      Features.DATA_COMPLIANCE,
      Features.HIGH_AVAILABILITY,
      Features.PERFORMANCE
    ]
  },
  {
    companyName: "Shipt",
    industry: "Retail & eCommerce",
    cloudProvider: "AWS",
    useCase: "Order & Inventory Management",
    businessChallenge: "Scalability and high availability for managing millions of daily transactions",
    technicalChallenge: [Features.SCALABILITY, Features.HIGH_AVAILABILITY],
    businessOutcome: "Improved operational efficiency and reduced downtime during peak periods",
  },
  {
    companyName: "Route",
    industry: "Logistics & Shipping",
    cloudProvider: "AWS",
    useCase: "Real-time Order Tracking & Management",
    businessChallenge: "Handling massive amounts of data and ensuring high availability for critical operations",
    technicalChallenge: [Features.SCALABILITY, Features.HIGH_AVAILABILITY, Features.PERFORMANCE],
    businessOutcome: "Improved customer experience and operational efficiency",
  },
];

export default customerStorySeedData;