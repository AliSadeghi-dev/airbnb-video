"use client";

interface menuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<menuItemProps> = ({ label, onClick }) => {
  return (
    <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
      {label}
    </div>
  );
};

export default MenuItem;
