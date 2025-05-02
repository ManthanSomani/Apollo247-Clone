import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the specialties page automatically when accessing the root route
    router.push('/specialties/general-physician-internal-medicine');
  }, [router]);

  return null; // No need to render anything since it's a redirect
};

export default HomePage;