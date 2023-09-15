import { Layout } from '@/components/layout/Layout';
import { NotFound } from '@/components/marketing/NotFound';

export default function NotFoundError() {
  return (
    <Layout lean title='404'>
      <NotFound />
    </Layout>
  );
}
