import ShareIcon from "../../assets/svgs/share-icon";

const SharedInfoModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="sharedInfoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalLabel"
                style={{ alignItems: "center", display: "flex" }}
              >
                <ShareIcon /> <p style={{ marginBottom: 0, marginLeft: 8 }}>Share</p>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Link copied to clipboard</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                style={{
                  padding: "0.55rem 2.5rem",
                  borderRadius: "30px",
                  border: "1px solid rgb(8 126 164)",
                  backgroundColor: "rgb(8 126 164)",
                  fontWeight: 700,
                }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedInfoModal;
