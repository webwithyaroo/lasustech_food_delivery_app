import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the Ordery platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: "2. User Accounts",
    content: `You must create an account to use certain features of our platform. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.`,
  },
  {
    title: "3. Ordering and Payment",
    content: `When placing an order through our platform, you agree to provide current, complete, and accurate purchase and account information. All payments must be made through our approved payment methods.`,
  },
  {
    title: "4. Delivery Services",
    content: `Delivery times are estimates and may vary based on factors outside our control. We are not responsible for delays caused by traffic, weather, or other circumstances beyond our reasonable control.`,
  },
  {
    title: "5. Restaurant Partners",
    content: `Restaurants listed on our platform are independent businesses. While we strive to ensure quality, we are not responsible for the food quality, safety, or accuracy of menu descriptions provided by restaurant partners.`,
  },
  {
    title: "6. User Conduct",
    content: `You agree not to use our platform for any unlawful purpose or in any way that could damage, disable, overburden, or impair our service.`,
  },
  {
    title: "7. Privacy",
    content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service.`,
  },
  {
    title: "8. Modifications to Service",
    content: `We reserve the right to modify or discontinue our service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `To the maximum extent permitted by law, Ordery shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8 font-inter">
          Terms of Service
        </h1>

        <div className="bg-secondary/20 rounded-lg p-6 mb-8">
          <p className="text-lg">Last updated: January 1, 2024</p>
          <p className="mt-4">
            Please read these Terms of Service ("Terms") carefully before using
            the Ordery platform. These Terms constitute a legally binding
            agreement between you and Ordery regarding your use of our food
            delivery platform and services.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <p className="text-gray-600">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent/10 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Email: support@ordery.com</li>
            <li>Phone: 1-800-ORDERY</li>
            <li>Address: 123 Food Street, Cuisine City, FC 12345</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
