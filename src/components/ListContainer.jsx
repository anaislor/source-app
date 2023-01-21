import React from "react";
import "./../styles/components/ListContainer.scss";

function ListContainer({ shows, selectShow, selectedShow, search }) {
  return (
    <table className="list-container">
      <thead className="list-container-header">
        <tr>
          <td>
          </td>
          <td>Title:</td>
          <td>Category</td>
          <td>Best quality</td>
        </tr>
      </thead>
      <tbody className="list-container-body">
        {shows
          .filter((show) =>
            show.name.toUpperCase().includes(search.toUpperCase())
          )
          .map((show) => (
            <tr key={show.id}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={selectedShow === show.id}
                  onChange={() => selectShow(show.id)}
                />
              </td>
              <td>
                <div className="list-container-body-item-name">
                  <div className="list-container-body-image-container">
                    <img src="/assets/netflix-poster.jpeg" alt={show.name} />
                  </div>
                  {show.season} {show.name}
                </div>
              </td>
              <td>
                {show.category && (
                  <div className="grid-container-item-detail-tag">
                    {show.category}
                  </div>
                )}
              </td>
              <td>{show.quality}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ListContainer;
