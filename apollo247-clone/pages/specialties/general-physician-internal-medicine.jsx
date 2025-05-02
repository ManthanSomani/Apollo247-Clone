import Head from 'next/head';
import Header from '../../components/Header';
import DoctorCard from '../../components/DoctorCard';
import FilterSidebar from '../../components/FilterSidebar';
import { useEffect, useState } from 'react';
import API from '../../utils/api';


export default function GeneralPhysician() {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  const fetchDoctors = async () => {
    const { data } = await API.get('/list-doctor-with-filter', {
      params: { ...filters, page },
    });
    setDoctors(data.data);
  };

  useEffect(() => {
    fetchDoctors();
  }, [filters, page]);

  return (
    <>
      <Head>
        <title>Consult General Physicians Online | Apollo 247</title>
        <meta name="description" content="Consult best general physicians online through Apollo 247." />
        <meta property="og:title" content="Consult General Physicians Online | Apollo 247" />
        <meta property="og:description" content="Consult top rated general physicians from Apollo hospitals online." />
        <link rel="canonical" href="https://your-clone-domain/specialties/general-physician-internal-medicine" />
      </Head>
      <Header />
      <div className="flex">
        <FilterSidebar setFilters={setFilters} />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {doctors.map((doc) => (
            <DoctorCard key={doc._id} doctor={doc} />
          ))}
        </div>
      </div>
    </>
  );
}
