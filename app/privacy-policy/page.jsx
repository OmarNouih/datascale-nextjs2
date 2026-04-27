import PrivacyPolicyClient from './PrivacyPolicyClient'

export const metadata = {
  title: 'Privacy Policy | Data Scale Business',
  description:
    'Privacy policy for Data Scale Business, covering personal data collection, cookies, security and contact rights.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Data Scale Business',
    description:
      'Privacy policy for Data Scale Business, covering personal data collection, cookies, security and contact rights.',
    url: 'https://datascalebusiness.io/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
}
