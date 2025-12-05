import React from 'react';
import { 
  Bot, Workflow, PieChart, Briefcase, Factory, 
  UserCog, Network, Cloud
} from 'lucide-react';
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'aispace',
    title: 'AI Space',
    shortDescription: 'Build custom AI agents with integration capabilities.',
    fullDescription: 'The ultimate environment for constructing intelligent digital workforce. AI Space allows organizations to build custom AI agents with deep integration capabilities that handle specific processes within the business.',
    icon: <Bot className="h-6 w-6" />,
    visualType: 'bot',
    modules: [
      { name: 'Architect', description: 'Handles the heavy lifting by taking a simple prompt and building fully AI-powered workflows automatically.' },
      { name: 'Agentic Orchestration', description: 'Visual drag-and-drop interface (like n8n) to build agents with reasoning capacity, memory, and multiple integrations.' },
      { name: 'Elements', description: 'Advanced AI capabilities including deep reasoning, virtualization, and complex problem-solving components.' }
    ],
    benefits: ['Reduce development time by 90%', 'No-code agent creation', 'Seamless enterprise integration'],
    features: ['Natural Language Architect', 'Visual Node Editor', 'Persistent Memory Context']
  },
  {
    id: 'process',
    title: 'Process Automator',
    shortDescription: 'Streamline workflows using advanced AI.',
    fullDescription: 'A powerhouse for streamlining workflows. The Process Automator uses advanced AI to analyze, assign, and execute tasks across your entire organization.',
    icon: <Workflow className="h-6 w-6" />,
    visualType: 'network',
    modules: [
      { name: '+AI', description: 'General purpose AI engine (Gemini/ChatGPT) acting as the cognitive core for basic tasks.' },
      { name: 'AI Agent', description: 'Intelligent task delegation system that assigns specific jobs to specialized agents.' },
      { name: 'Xcutioneer', description: 'The execution engine that performs actions based on command logic and agent outputs.' }
    ],
    benefits: ['End-to-end automation', 'Intelligent task routing', 'Zero-latency execution'],
    features: ['Multi-LLM Support', 'Auto-Scaling Workers', 'Real-time Monitoring']
  },
  {
    id: '0o1',
    title: '0.o1 Analytics',
    shortDescription: 'Deep data visualization and analytics.',
    fullDescription: 'The eyes of your enterprise. 0.o1 is a dedicated suite for high-precision analytics and immersive data visualization, turning raw data into actionable insights.',
    icon: <PieChart className="h-6 w-6" />,
    visualType: 'chart',
    modules: [
      { name: 'Real-time Processing', description: 'Ingest and analyze data streams as they happen.' },
      { name: 'Predictive Modeling', description: 'Forecast trends using historical data and AI projection.' },
      { name: 'Visual Dashboards', description: 'Customizable, interactive charts for every department.' }
    ],
    benefits: ['Instant data visibility', 'Predictive decision making', 'Beautiful visualizations'],
    features: ['Live Streaming Data', 'Custom Report Builder', 'Anomaly Detection']
  },
  {
    id: 'roa',
    title: 'rOA Operations',
    shortDescription: 'The central workspace of your system.',
    fullDescription: 'The operational heart of the system. rOA Operations provides a unified workspace for business intelligence, project management, and internal operations.',
    icon: <Briefcase className="h-6 w-6" />,
    visualType: 'network',
    modules: [
      { name: 'Business Intelligence', description: 'Deep insights into business performance metrics.' },
      { name: 'Enterprise Workspace', description: 'Project management, collaboration, building, and documentation hub.' },
      { name: 'Iops Manager', description: 'Internal operations manager handling Teams, Projects, HR, and Admin.' }
    ],
    benefits: ['Centralized control', 'Enhanced collaboration', 'Unified data silos'],
    features: ['Team Management', 'Project Tracking', 'HR Automation']
  },
  {
    id: 'machina',
    title: 'Enterprise Machina',
    shortDescription: 'Enhances enterprise management with SI capabilities.',
    fullDescription: 'Smart tools and applications that enhance enterprise management. Enterprise Machina integrates deeply with existing ERP systems to boost efficiency.',
    icon: <Factory className="h-6 w-6" />,
    visualType: 'chart',
    modules: [
      { name: 'ERP Bridge', description: 'Seamless connection to SAP, Oracle, and Microsoft Dynamics.' },
      { name: 'Efficiency Booster', description: 'AI-driven optimization of existing legacy processes.' },
      { name: 'Smart Tool Suite', description: 'Collection of micro-apps for specific enterprise tasks.' }
    ],
    benefits: ['Modernize legacy systems', 'Boost operational efficiency', 'Low-risk integration'],
    features: ['Legacy Connectors', 'Process Optimization', 'Smart Apps']
  },
  {
    id: 'admin',
    title: 'Administrator AI',
    shortDescription: 'Your digital presence clone overseeing all processes.',
    fullDescription: 'Your digital twin. Administrator AI acts as a digital presence that oversees all processes within the business, making decisions based on your parameters.',
    icon: <UserCog className="h-6 w-6" />,
    visualType: 'bot',
    modules: [
      { name: 'Digital Clone', description: 'Learns your decision-making patterns to act on your behalf.' },
      { name: 'Process Oversight', description: 'Monitors all other agents and workflows for anomalies.' },
      { name: 'Decision Engine', description: 'Approves or rejects low-risk actions automatically.' }
    ],
    benefits: ['Scale management capacity', '24/7 Oversight', 'Consistent decision making'],
    features: ['Behavioral Cloning', 'Audit Logs', 'Risk Thresholds']
  },
  {
    id: 'integration',
    title: 'Integrations',
    shortDescription: 'Seamlessly interact with new and existing systems.',
    fullDescription: 'The bridge between worlds. The Integration product allows businesses to introduce new and existing systems and defines how they interact with Spherr software.',
    icon: <Network className="h-6 w-6" />,
    visualType: 'code',
    modules: [
      { name: 'System Handshake', description: 'Protocol negotiation for connecting disparate systems.' },
      { name: 'API Gateway', description: 'Unified API endpoint for all external interactions.' },
      { name: 'Webhooks & Events', description: 'Real-time event triggering and handling.' }
    ],
    benefits: ['Connect anything', 'Standardized communication', 'Future-proof architecture'],
    features: ['REST/GraphQL Support', 'Legacy SOAP Adapters', 'Custom Connectors']
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    shortDescription: 'Simple but powerful cloud connectors.',
    fullDescription: 'Cloud agility at your fingertips. Offers essential cloud services similar to Make or Zapier but deeply integrated into the Spherr ecosystem.',
    icon: <Cloud className="h-6 w-6" />,
    visualType: 'network',
    modules: [
      { name: 'Visual Connector', description: 'Connect apps like Slack, Gmail, and Salesforce visually.' },
      { name: 'Cloud Trigger', description: 'Serverless function execution based on cloud events.' },
      { name: 'Data Sync', description: 'Keep data consistent across multiple cloud platforms.' }
    ],
    benefits: ['Reduce IT dependency', 'Rapid prototyping', 'Scalable infrastructure'],
    features: ['1000+ App Integrations', 'Visual Logic Builder', 'Secure Auth Management']
  }
];
