export default function DoctorCard({ doctor }) {
    return (
      <div className="border p-4 rounded shadow">
        <h3 className="text-lg font-bold">{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <p>Experience: {doctor.experience} years</p>
        <p>Location: {doctor.location}</p>
        <p>Fees: ₹{doctor.fees}</p>
        <p>Rating: {doctor.rating}/5</p>
      </div>
    );
  }