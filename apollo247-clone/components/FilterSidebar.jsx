export default function FilterSidebar({ setFilters }) {
    const handleSpecialization = (e) => {
      setFilters(prev => ({ ...prev, specialization: e.target.value }));
    };
  
    return (
      <aside className="w-64 p-4 border-r">
        <label className="block mb-2">Specialization:</label>
        <input
          className="border p-2 w-full"
          placeholder="e.g., Cardiologist"
          onChange={handleSpecialization}
        />
      </aside>
    );
  }