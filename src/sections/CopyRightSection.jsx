import { Link } from "react-router-dom";

export default function CopyRightSection() {
  return (
    <div className="bg-gray-800 py-4 text-gray-300 text-sm text-center">
      <div className="container mx-auto">
        <div className="flex ">
          <div className="w-1/2 flex justify-end">
            <p>
              &copy; 2024{" "}
              <Link to="admin"> BIRVEN SUPPLIES COMPANY LIMITED </Link> All
              rights Preserved.
            </p>
          </div>

          <div className="flex w-1/2 justify-end">
            <p>
              Branded by{" "}
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                DusstechBrands
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
