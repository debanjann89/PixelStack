import { redirect } from 'next/navigation';

/**
 * Case Studies page has been merged into the Portfolio page.
 * This route redirects to /portfolio for backwards compatibility.
 */
export default function CaseStudiesPage() {
  redirect('/portfolio');
}
