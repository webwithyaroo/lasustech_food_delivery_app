import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        details:
          "We collect information that you provide directly to us, including name, email address, phone number, delivery address, and payment information.",
      },
      {
        subtitle: "Usage Information",
        details:
          "We automatically collect information about your interactions with our platform, including order history, browsing behavior, and device information.",
      },
      {
        subtitle: "Location Information",
        details:
          "With your consent, we collect and process location information to facilitate delivery services and provide location-based features.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Order Processing",
        details:
          "To process and deliver your orders, communicate with you about orders, and provide customer support.",
      },
      {
        subtitle: "Platform Improvement",
        details:
          "To analyze usage patterns, improve our services, and develop new features.",
      },
      {
        subtitle: "Marketing",
        details:
          "To send promotional materials, updates, and other communications (with your consent).",
      },
    ],
  },
  {
    title: "Information Sharing",
    content: [
      {
        subtitle: "Service Providers",
        details:
          "We share information with third-party service providers who assist in operating our platform and delivering services.",
      },
      {
        subtitle: "Restaurant Partners",
        details:
          "We share necessary order information with restaurants to fulfill your orders.",
      },
      {
        subtitle: "Legal Requirements",
        details:
          "We may disclose information if required by law or to protect our rights and safety.",
      },
    ],
  },
  {
    title: "Data Security",
    content: [
      {
        subtitle: "Security Measures",
        details:
          "We implement appropriate technical and organizational measures to protect your personal information.",
      },
      {
        subtitle: "Data Retention",
        details:
          "We retain your information for as long as necessary to provide our services and comply with legal obligations.",
      },
    ],
  },
  {
    title: "Your Rights",
    content: [
      {
        subtitle: "Access and Control",
        details:
          "You have the right to access, correct, or delete your personal information.",
      },
      {
        subtitle: "Communication Preferences",
        details:
          "You can opt out of marketing communications while still receiving essential service-related messages.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8 font-inter">Privacy Policy</h1>

        <div className="bg-secondary/20 rounded-lg p-6 mb-8">
          <p className="text-lg">Last updated: January 1, 2024</p>
          <p className="mt-4">
            At Ordery, we take your privacy seriously. This Privacy Policy
            describes how we collect, use, and protect your personal information
            when you use our platform.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
                <div className="space-y-6">
                  {section.content.map((item) => (
                    <div key={item.subtitle}>
                      <h3 className="text-lg font-medium mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent/10 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about our Privacy Policy or how we handle
            your personal information, please contact our Privacy Team at:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Email: privacy@ordery.com</li>
            <li>Phone: 1-800-ORDERY</li>
            <li>Address: 123 Food Street, Cuisine City, FC 12345</li>
          </ul>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>
            By using Ordery, you agree to the collection and use of information in
            accordance with this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}